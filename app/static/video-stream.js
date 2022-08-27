var canvas = document.getElementById('viewport');
const video = document.getElementById('videoPlayback');

// Create h264 player
//var uri = "ws://192.168.86.154:8080/stream";
var wsavc = new WSAvcPlayer(canvas, "webgl", 1, 35);
wsavc.cmd({
    "action": "init",
    "width": streamWidth,
    "height": streamHeight,
});
wsavc.connect(streamUri);

// Expose instance for button callbacks
window.wsavc = wsavc;
      
// Stream canvas to video
const stream = canvas.captureStream(30);
video.srcObject = stream;