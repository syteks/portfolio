<script setup>
import { ref } from 'vue';
import Home from '@/pages/Home.vue';
import BootScreen from '@components/boot/BootScreen.vue';

// The nvim editor is mounted underneath the boot overlay the whole time, so it
// is fully ready the instant the overlay fades away — the "pop into nvim" beat.
const isBooting = ref(true);
</script>

<template>
  <div class="relative">
    <div :class="isBooting ? 'pointer-events-none' : 'editor-pop'">
      <Home />
    </div>

    <transition name="boot-fade">
      <BootScreen v-if="isBooting" @finished="isBooting = false" />
    </transition>
  </div>
</template>
