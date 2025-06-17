<script setup>
</script>

<template>
  <div class="w-full flex justify-center py-4 animate-text-glow-pulse">
    <svg width="300" height="20" viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md h-auto">
      <defs>
        <linearGradient id="separatorLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#A855F7" /> <stop offset="50%" stop-color="#EC4899" /> <stop offset="100%" stop-color="#FACC15" /> </linearGradient>

        <filter id="separatorGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur">
            <animate attributeName="stdDeviation" values="4;8;4" dur="2s" repeatCount="indefinite" /> </feGaussianBlur>
          <feFlood flood-color="url(#separatorLineGradient)" flood-opacity="1" result="floodColor">
            <animate attributeName="flood-opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" /> </feFlood>
          <feComposite in="floodColor" in2="blur" operator="in" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x="0" y="9" width="300" height="2" fill="url(#separatorLineGradient)" filter="url(#separatorGlow)" />
    </svg>
  </div>
</template>
