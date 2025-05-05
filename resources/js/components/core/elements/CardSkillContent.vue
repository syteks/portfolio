<script setup>
  import BasePillList from '@components/core/elements/BasePillList.vue';
  import BaseButton from '@components/core/buttons/BaseButton.vue';
  import ArrowDown from '@components/core/svgs/ArrowDown.vue';
  import { ref } from 'vue';
  import ArrowUp from '@components/core/svgs/ArrowUp.vue';

  const props = defineProps({
    skill: {
      type: Object,
      default: () => {}
    }
  });

  const loadMoreButtonClasses = "inline-flex items-center my-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-non bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"

  /**
   * We transform each skill item to a pill array.
   * @param {Array} items
   * @returns {Array<object>}
   */
  const transformSkillItemsToPills = (items) => {
    return items.map(item => {
      return {
        title: item.title,
        color: item.color ? item.color : props.skill.itemsColor,
        textColor: item.textColor ? item.textColor : props.skill.itemsTextColor,
        hiddenIndex: props.skill.hiddenIndex,
      }
    });
  };

  const showMore = ref(false);

  /**
   * Toggle showMore state.
   */
  const showMoreClick = () => {
    showMore.value = !showMore.value;
  }
</script>

<template>
  <div class="p-5 min-h-[250px]">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{{ props.skill.title }}</h5>
    <BasePillList
      :pills="transformSkillItemsToPills(props.skill.items)"
      :show-more="showMore"
    >
    </BasePillList>
    <BaseButton
      v-if="skill.items.length > skill.hiddenIndex"
      :custom-classes="loadMoreButtonClasses"
      @click="showMoreClick"
    >
      {{ showMore ? 'Show Less' : 'Show More'}}
      <ArrowUp v-if="showMore"></ArrowUp>
      <ArrowDown v-else></ArrowDown>
    </BaseButton>
  </div>
</template>
