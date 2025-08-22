const modelViewer = document.querySelector('model-viewer');

// Enable camera controls and auto rotate
modelViewer.cameraControls = true;
modelViewer.autoRotate = true;
modelViewer.autoRotateDelay = 1000; // Delay before auto-rotate starts (ms)
modelViewer.autoRotateSpeed = 2.0; // Speed of auto-rotation

// Optional: Add event listeners for interaction feedback
modelViewer.addEventListener('camera-change', () => {
console.log('Camera moved');
});

modelViewer.addEventListener('click', () => {
console.log('Model clicked');
});
