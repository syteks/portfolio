<script setup>
  import Navbar from '@components/core/models/Navbar.vue';
</script>

<template>
  <div id="container">
    <header class="bg-gray-800 h-16 z-10 flex-no-wrap fixed top-0 w-full border-b-2 border-gray-600">
      <Navbar>
      </Navbar>
      <slot name="header"></slot>
    </header>
    <main class="pt-16 relative bg-gray-800 w-full h-full">
      <slot name="main"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
