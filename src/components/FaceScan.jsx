import React, { useEffect, useRef, useState } from 'react';
import { analyzeSkin, getMockAiResult } from '../services/aiService';

const FaceScan = ({ isOpen, products, onClose, onAiResult }) => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const streamRef = useRef(null);
    const [message, setMessage] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    useEffect(() => {
        if (!isOpen) return undefined;

        let isMounted = true;
        setMessage('');
        setIsAnalyzing(false);

        navigator.mediaDevices?.getUserMedia({
            video: { facingMode: 'user', width: 640, height: 640 },
        })
            .then((stream) => {
                if (!isMounted) {
                    stream.getTracks().forEach((track) => track.stop());
                    return;
                }
                streamRef.current = stream;
                if (videoRef.current) videoRef.current.srcObject = stream;
            })
            .catch(() => {
                setMessage('Không thể mở camera. Vui lòng cho phép truy cập camera trong trình duyệt.');
            });

        return () => {
            isMounted = false;
            if (streamRef.current) {
                streamRef.current.getTracks().forEach((track) => track.stop());
                streamRef.current = null;
            }
        };
    }, [isOpen]);

    const closeScan = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach((track) => track.stop());
            streamRef.current = null;
        }
        onClose();
    };

    const captureAndAnalyze = async () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;

        if (!streamRef.current || !video || video.readyState < 2) {
            setMessage('Camera chưa sẵn sàng.');
            return;
        }

        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 640;
        canvas.getContext('2d').drawImage(video, 0, 0);

        const imageBase64 = canvas.toDataURL('image/jpeg', 0.8).split(',')[1];
        setIsAnalyzing(true);
        setMessage('Đang phân tích làn da với AI Gemini...');

        try {
            const result = await analyzeSkin(imageBase64, products);
            onAiResult(result);
            closeScan();
        } catch (error) {
            console.error(error);
            setMessage('Lỗi kết nối AI. Đang hiển thị gợi ý mặc định...');
            setTimeout(() => {
                onAiResult(getMockAiResult());
                closeScan();
            }, 1200);
        }
    };

    if (!isOpen) return null;

    return (
        <div id="face-scan-overlay" style={{ display: 'flex' }}>
            <h2>Phân Tích Da Bằng AI</h2>
            <p>Đặt khuôn mặt vào trong vòng tròn để nhận gợi ý sản phẩm phù hợp với làn da của bạn.</p>
            <div className="camera-frame">
                <video ref={videoRef} id="camera-video" autoPlay playsInline muted></video>
                <canvas ref={canvasRef} id="camera-canvas"></canvas>
                <div className="scan-ring"></div>
                <div className="scan-ring-2"></div>
                <div className="scan-corners"></div>
                <div className="scan-line"></div>
            </div>
            <div id="scan-result-msg">{message}</div>
            <button className="btn-capture" aria-label="Chụp khuôn mặt để phân tích" onClick={captureAndAnalyze} disabled={isAnalyzing}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v4h-2zm0 6h2v2h-2z" />
                </svg>
            </button>
            <button className="btn-skip-scan" onClick={closeScan}>Bỏ qua</button>
        </div>
    );
};

export default FaceScan;
