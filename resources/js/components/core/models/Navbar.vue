<script setup>
import { profile } from '@/data/profile';
import { navItems } from '@/data/navigation';
import SocialLinks from '@components/ui/SocialLinks.vue';

defineProps({
  isNavbarSolid: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <nav
    class="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
    :class="
      isNavbarSolid
        ? 'border-b border-white/10 bg-slate-950/80 backdrop-blur'
        : 'border-b border-transparent bg-transparent'
    "
  >
    <div class="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
      <a href="#home" class="shrink-0 font-mono text-sm">
        <span class="text-emerald-400">{{ profile.handle }}</span>
        <span class="hidden text-slate-500 sm:inline">@</span>
        <span class="hidden text-slate-300 sm:inline">{{ profile.host }}</span>
        <span class="text-slate-500">:~$</span>
      </a>

      <div class="flex items-center gap-1 overflow-x-auto font-mono text-sm scrollbar-hide">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="shrink-0 rounded-md px-3 py-1.5 text-slate-400 transition-colors duration-200 hover:bg-white/5 hover:text-emerald-400"
        >
          {{ item.command }}
        </a>
      </div>

      <div class="hidden shrink-0 md:block">
        <SocialLinks :size="18" />
      </div>
    </div>
  </nav>
</template>
