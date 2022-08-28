<template>
  <div class="content-center">
    <canvas id="viewport" hidden></canvas>
    <video id="videoPlayback" playsinline controls autoplay muted></video>
    
    <script type="text/javascript" src="/http-live-player.js"></script>
    <!--<script type="text/javascript" src="/video-stream.js"></script>-->
   
  </div>
</template>

<script>
export default {
  publicRuntimeConfig: {
    streamUri: process.env.streamUri || 'ws://192.168.1.15:8080/stream',
    streamWidth: process.env.streamWidth || 960,
    streamHeight: process.env.streamHeight || 540,
    streamFps: process.env.streamFps || 30,
  },
  methods: {
    startStream() {
      var canvas = document.getElementById('viewport');
      const video = document.getElementById('videoPlayback');

      // Create h264 player
      var uri = "ws://192.168.1.15:8080/stream";
      var wsavc = new WSAvcPlayer(canvas, "webgl", 1, 35);
      wsavc.cmd({
          "action": "init",
          "width": 960,
          "height": 540,
      });
      wsavc.connect(uri);

      // Expose instance for button callbacks
      window.wsavc = wsavc;
            
      // Stream canvas to video
      const stream = canvas.captureStream(30);
      video.srcObject = stream;
    },
  },
  mounted() {
    this.startStream();
  }
}
</script>