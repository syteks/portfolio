<script setup>
  import Navbar from '@components/core/models/Navbar.vue';
  import PageLayout from '@/layouts/PageLayout.vue';
  import { ref, onMounted, onBeforeUnmount } from 'vue';

  // Reactive references to DOM elements
  const scrollContainerRef = ref(null);
  const isNavbarSolid = ref(false);
  const scrollThreshold = 20;

  const handleScroll = () => {
    if (scrollContainerRef.value) {
      isNavbarSolid.value = scrollContainerRef.value.scrollTop > scrollThreshold
    }
  };

  // Lifecycle hook: component mounted to DOM
  onMounted(() => {
    if (scrollContainerRef.value) {
      scrollContainerRef.value.addEventListener('scroll', handleScroll);
    }
  });

  // Lifecycle hook: component about to be unmounted
  onBeforeUnmount(() => {
    if (scrollContainerRef.value) {
      scrollContainerRef.value.removeEventListener('scroll', handleScroll);
    }
  });
</script>

<template>
    <PageLayout>
      <div ref="scrollContainerRef" class="relative z-10 h-screen overflow-y-scroll snap-y snap-mandatory">
        <header class="relative z-10">
          <Navbar
            :is-navbar-solid="isNavbarSolid"
          />
          <slot name="header"></slot>
        </header>
        <main class="w-full h-full">
          <slot name="main"></slot>
        </main>
        <footer>
          <slot name="footer"></slot>
          <p>&copy; 2025 Your Name. All rights reserved.</p>
        </footer>
      </div>

    </PageLayout>

</template>
