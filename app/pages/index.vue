<template>
  <div class="min-h-full">
    
    <navbar></navbar>
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">Livestream</h1>
      </div>
    </header>
    <main class="content-center">
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <camera-stream></camera-stream>
      </div>
    </main>
  </div>
</template>

<script>
import CameraStream from '~/components/CameraStream.vue'
import Navbar from '~/components/Navbar.vue'

export default {
  components: { 
    CameraStream,
    Navbar
  },
}
</script>
