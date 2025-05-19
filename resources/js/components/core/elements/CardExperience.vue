<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: null,
    },
    date: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    responsibilities: {
      type: Array,
      default: () => [],
    },
  });
</script>

<template>
  <li>
    <div class="flex flex-col gap-2">
      <div class="flex justify-between items-center">
        <span class="text-lg font-semibold">• {{ props.title }}</span>
        <span class="text-md text-green-500">{{ props.date }}</span>
      </div>
    </div>
    <div class="pl-4 mt-1 border-l-2 border-white ml-2">
      <p
        class="mb-2"
      >
        {{ props.description }}
      </p>
      <ul
        v-for="responsibility in props.responsibilities"
        class="list-disc list-inside text-md text-white-600"
      >
        <li>{{ responsibility }}</li>
      </ul>
    </div>
  </li>
</template>
