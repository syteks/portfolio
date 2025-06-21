<script setup>
</script>

<template>
  <div class="min-h-screen relative bg-black overflow-hidden">
    <div class="absolute inset-0 z-0" id="starfield-background">
      <div class="stars-layer-1 absolute inset-0 animate-starfield-zoom-slow motion-reduce:animate-none"></div>
      <div class="stars-layer-2 absolute inset-0 animate-starfield-zoom-medium motion-reduce:animate-none"></div>
      <div class="stars-layer-3 absolute inset-0 animate-starfield-zoom-fast motion-reduce:animate-none"></div>

      <div class="twinkling-stars-small absolute inset-0 animate-star-twinkle-slow motion-reduce:animate-none"></div>
      <div class="twinkling-stars-medium absolute inset-0 animate-star-twinkle-medium motion-reduce:animate-none"></div>

      <div class="falling-star falling-star-1 motion-reduce:animate-none"></div>
      <div class="falling-star falling-star-2 motion-reduce:animate-none"></div>
      <div class="falling-star falling-star-3 motion-reduce:animate-none"></div>
      <div class="falling-star falling-star-4 motion-reduce:animate-none"></div>
      <div class="falling-star falling-star-5 motion-reduce:animate-none"></div>
    </div>
    <slot></slot>
  </div>
</template>
