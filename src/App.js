import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';

function App() {
  const videoRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
      await faceapi.nets.faceExpressionNet.loadFromUri('/models');
      startVideo();
    };

    loadModels();
  }, []);

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => {
        console.error('Webcam error:', err);
      });
  };

  const handleVideoPlay = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const displaySize = { width: video.width, height: video.height };

    faceapi.matchDimensions(canvas, displaySize);

    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();

      const resizedDetections = faceapi.resizeResults(detections, displaySize);

      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
      faceapi.draw.drawDetections(canvas, resizedDetections);
      faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
    }, 100);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <video
          ref={videoRef}
          width="720"
          height="560"
          autoPlay
          muted
          onPlay={handleVideoPlay}
          style={{ borderRadius: '10px', border: '2px solid #444' }}
        />
        <canvas
          ref={canvasRef}
          width="720"
          height="560"
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>
    </div>
  );
}

export default App;
