<script setup>
  import BaseCard from '@components/core/cards/BaseCard.vue';
  import CardSkillContent from '@components/core/elements/CardSkillContent.vue';

  const skills = [
    {
      title: 'Coding Languages',
      itemsColor: 'bg-green-800',
      itemsTextColor: 'text-white',
      hiddenIndex: 4,
      items: [
        {
          title: 'PHP',
        },
        {
          title: 'Javascript/Typescript',
        },
        {
          title: 'GoLang',
        },
        {
          title: 'C#',
        }
      ]
    },
    {
      title: 'Databases',
      itemsColor: 'bg-blue-800',
      itemsTextColor: 'text-white',
      hiddenIndex: 4,
      items: [
        {
          title: 'MySQL',
        },
        {
          title: 'FireStore',
        },
        {
          title: 'MongoDB',
        },
        {
          title: 'MS SQL Server',
        },
        {
          title: 'Redis',
        },
      ]
    },
    {
      title: 'Frameworks',
      itemsColor: 'bg-purple-800',
      itemsTextColor: 'text-white',
      hiddenIndex: 4,
      items: [
        {
          title: 'Laravel',
        },
        {
          title: 'VueJS',
        },
        {
          title: 'Tailwind CSS',
        },
        {
          title: 'NodeJS',
        },
        {
          title: 'jQuery',
        },
        {
          title: 'Code Igniter',
        }
      ]
    },
    {
      title: 'Tools',
      itemsColor: 'bg-yellow-800',
      itemsTextColor: 'text-white',
      hiddenIndex: 4,
      items: [
        {
          title: 'PhpStorm',
        },
        {
          title: 'Google Cloud Platform (GCP)',
        },
        {
          title: 'Elastic Search',
        },
        {
          title: 'Git',
        },
        {
          title: 'BitBucket',
        },
        {
          title: 'GitHub',
        },
        {
          title: 'GitLab',
        },
        {
          title: 'Docker',
        },
        {
          title: 'Postman',
        },
      ]
    }
  ];
</script>

<template>
  <section id="skills_page">
    <div class="pt-24 sticky h-screen py-8 bg-gradient-to-b from-gray-600 to-gray-800  text-white">
      <div class="flex justify-center">
        <BaseCard v-for="skill in skills">
          <CardSkillContent
            :skill="skill"
          >
          </CardSkillContent>
        </BaseCard>
      </div>
    </div>
  </section>
</template>
