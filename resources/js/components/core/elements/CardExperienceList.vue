<script setup>
import CardExperience from '@components/core/elements/CardExperience.vue';

const props = defineProps({
  jobExperiences: {
    type: Array,
    default: () => [
      {
        title: null,
        date: null,
        description: null,
        responsibilities: [],
      },
    ],
  },
});

/**
 * This method will return the date in a readable format.
 * @param date
 * @return string
 */
const displayDate = (date) => {
  const startDate = new Date(date.start);

  const startDateString = startDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });

  let endDateString = 'Present';
  let endDate = new Date();

  if (date.end !== null) {
    endDate = new Date(date.end);

    endDateString = endDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });
  }

  let years = endDate?.getFullYear() - startDate.getFullYear();

  // Added the + 1 as to include the last month of work.
  let months = (endDate?.getMonth() - startDate.getMonth()) + 1;

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years === 0) {
    return `${startDateString} - ${endDateString} (${months} months)`;
  }

  return `${startDateString} - ${endDateString} (${years} years, ${months} months)`;
};
</script>

<template>
  <ul
    v-for="experience in jobExperiences"
    class="space-y-6 text-white-700"
  >
    <CardExperience
      :title="experience.title"
      :date="displayDate(experience.date)"
      :description="experience.description"
      :responsibilities="experience.responsibilities"
    >
    </CardExperience>
  </ul>
</template>
