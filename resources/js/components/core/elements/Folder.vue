<script setup>
const props = defineProps({
  folder: {
    type: Object,
    default: () => {},
  },
  isActive: {
    type: Boolean,
    default: () => false,
  },
});

const emit = defineEmits(['folder-clicked']);

/**
 * Emits the folder click event, which will emit the title to the parent so it can set the active folder.
 */
const emitClickEvent = () => {
  emit('folder-clicked', props.folder.title);
};
</script>

<template>
  <div
    class="relative group flex flex-col items-center justify-center w-fit h-fit lg:px-5 sm:px-2"
    @click="emitClickEvent"
  >
    <div
      class="file relative w-60 h-40 cursor-pointer origin-bottom [perspective:1500px] z-50"
    >
      <div
        class="work-5 w-full h-full origin-top rounded-2xl rounded-tl-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]"
        :class="isActive ? 'bg-green-600 after:bg-green-600 before:bg-green-600' : 'bg-amber-600 after:bg-amber-600 before:bg-amber-600'"
      >
      </div>
      <div
        class="work-4 absolute inset-1 bg-zinc-400 rounded-2xl transition-all ease duration-300 origin-bottom select-none group-hover:[transform:rotateX(-20deg)]"
      ></div>
      <div
        class="work-3 absolute inset-1 bg-zinc-300 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]"
      ></div>
      <div
        class="work-2 absolute inset-1 bg-zinc-200 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]"
      ></div>
      <div
        class="flex items-center justify-center work-1 absolute bottom-0 bg-gradient-to-t w-full h-[156px] rounded-2xl rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[146px] after:h-[16px] after:rounded-t-2xl before:absolute before:content-[''] before:-top-[10px] before:right-[142px] before:size-3 before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-46deg)_translateY(1px)]"
        :class="isActive ? 'from-green-500 to-green-400 after:bg-green-400 before:bg-green-400 group-hover:shadow-[inset_0_20px_40px_#43cc75,_inset_0_-20px_40px_#2f8f52]' : 'from-amber-500 to-amber-400 after:bg-amber-400 before:bg-amber-400 group-hover:shadow-[inset_0_20px_40px_#fbbf24,_inset_0_-20px_40px_#d97706]'"
      >
        <p class="text-5xl pt-4">{{ props.folder.title }}</p>
      </div>
    </div>
  </div>
</template>
