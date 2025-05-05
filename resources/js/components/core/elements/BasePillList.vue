<script setup>
  import BasePill from '@components/core/elements/BasePill.vue';

  const props = defineProps({
    pills: {
      type: Array,
      default: () => [{}]
    },
    showMore: {
      type: Boolean,
      default: false
    }
  });

  /**
   * Hide pill if it's index is equal to hiddenIndex.
   * @param pill
   * @param index
   * @return {string}
   */
  const hidePillClass = (pill, index) => {
    return props.showMore === false && index >= pill.hiddenIndex ? 'hidden' : '';
  }
</script>

<template>
  <ul class="mb-3 max-w-md space-y-1 list-none list-inside text-gray-400">
    <li
      v-for="(pill, index) in props.pills"
      :class="hidePillClass(pill, index)"
    >
      <BasePill
        :color="pill.color"
        :text-color="pill.textColor"
      >
        {{ pill.title }}
      </BasePill>
    </li>
  </ul>
</template>
