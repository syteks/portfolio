<script setup>
import { ref, computed } from 'vue';
import ColoredTitle from '@components/core/elements/ColoredTitle.vue';
import Link from '@components/core/svgs/Link.vue';
import ArrowUp from '@components/core/svgs/ArrowUp.vue';
import ArrowDown from '@components/core/svgs/ArrowDown.vue';
import Php from '@components/core/svgs/skills/Php.vue';
import JavaScript from '@components/core/svgs/skills/JavaScript.vue';
import GoLang from '@components/core/svgs/skills/GoLang.vue';
import TypeScript from '@components/core/svgs/skills/TypeScript.vue';
import CSharp from '@components/core/svgs/skills/CSharp.vue';
import GitHub from '@components/core/svgs/skills/GitHub.vue';
import BitBucket from '@components/core/svgs/skills/BitBucket.vue';
import VueJS from '@components/core/svgs/skills/VueJS.vue';
import TailwindCSS from '@components/core/svgs/skills/TailwindCSS.vue';
import MSSQLServer from '@components/core/svgs/skills/MSSQLServer.vue';
import MySQL from '@components/core/svgs/skills/MySQL.vue';
import ElasticSearch from '@components/core/svgs/skills/ElasticSearch.vue';
import Docker from '@components/core/svgs/skills/Docker.vue';
import Postman from '@components/core/svgs/skills/Postman.vue';
import GitLab from '@components/core/svgs/skills/GitLab.vue';
import Git from '@components/core/svgs/skills/Git.vue';
import PhpStorm from '@components/core/svgs/skills/PhpStorm.vue';
import Laravel from '@components/core/svgs/skills/Laravel.vue';
import FireStore from '@components/core/svgs/skills/FireStore.vue';
import GCP from '@components/core/svgs/skills/GCP.vue';
import Redis from '@components/core/svgs/skills/Redis.vue';
import React from '@components/core/svgs/skills/React.vue';
import CodeIgniter from '@components/core/svgs/skills/CodeIgniter.vue';
import GraphQL from '@components/core/svgs/skills/GraphQL.vue';
import AspNet from '@components/core/svgs/skills/AspNet.vue';
import Blazor from '@components/core/svgs/skills/Blazor.vue';
import Kubernetes from '@components/core/svgs/skills/Kubernetes.vue';
import NodeRed from '@components/core/svgs/skills/NodeRed.vue';
import OpsGenie from '@components/core/svgs/skills/OpsGenie.vue';
import PHPUnit from '@components/core/svgs/skills/PHPUnit.vue';
import HTML from '@components/core/svgs/skills/HTML.vue';
import CSS from '@components/core/svgs/skills/CSS.vue';
import WordPress from '@components/core/svgs/skills/WordPress.vue';
import DataGrip from '@components/core/svgs/skills/DataGrip.vue';
import LaravelNova from '@components/core/svgs/skills/LaravelNova.vue';
import Vite from '@components/core/svgs/skills/Vite.vue';
import VisualStudioCode from '@components/core/svgs/skills/VisualStudioCode.vue';
import OpenSuse from '@components/core/svgs/skills/OpenSuse.vue';
import AngularJS from '@components/core/svgs/skills/AngularJS.vue';
import Linux from '@components/core/svgs/skills/Linux.vue';
import Jira from '@components/core/svgs/skills/Jira.vue';

/**
 * Calculates the duration in years and months stayed at a company
 * @param start
 * @param end
 * @return {string}
 */
const calculateDuration = (start, end) => {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = (endDate.getMonth() - startDate.getMonth()) + 1;

  if (months < 0) {
    years--;
    months += 12;
  }

  if (months === 0 && years === 0) {
    return 'Less than a month';
  }
  const yearStr = years > 0
    ? `${years} year${years > 1 ? 's' : ''}`
    : '';

  const monthStr = months > 0
    ? `${months} month${months > 1 ? 's' : ''}`
    : '';

  return [yearStr, monthStr].filter(Boolean).join(', ');
};

/**
 * We format the date to show.
 * @param dateString
 * @return {string|null}
 */
const formatDate = (dateString) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long' };
  return date.toLocaleDateString('en-US', options);
};

const defaultIconClasses = 'h-10 w-10 mb-2 object-contain';

const skillDetails = {
  'PHP': { icon: Php },
  'Javascript': { icon: JavaScript },
  'Typescript': { icon: TypeScript },
  'Go': { icon: GoLang },
  'C#': { icon: CSharp },
  'GraphQL': { icon: GraphQL },
  'FireStore (NoSQL)': { icon: FireStore },
  'Redis': { icon: Redis },
  'Laravel': { icon: Laravel },
  '.NET': { icon: AspNet },
  'React': { icon: React },
  'NodeRed': { icon: NodeRed },
  'Blazor': { icon: Blazor },
  'PHPStorm': { icon: PhpStorm },
  'Git': { icon: Git },
  'GitLab': { icon: GitLab },
  'Postman': { icon: Postman },
  'Docker': { icon: Docker },
  'Kubernetes': { icon: Kubernetes },
  'GCP': { icon: GCP },
  'Elastic Search': { icon: ElasticSearch },
  'OpsGenie': { icon: OpsGenie },
  'Jira': { icon: Jira },
  'PHPUnit': { icon: PHPUnit },
  'HTML': { icon: HTML },
  'CSS': { icon: CSS },
  'MySQL': { icon: MySQL },
  'Microsoft SQL Server': { icon: MSSQLServer },
  'VueJS': { icon: VueJS },
  'Tailwind CSS': { icon: TailwindCSS },
  'WordPress': { icon: WordPress },
  'DataGrip': { icon: DataGrip },
  'BitBucket': { icon: BitBucket },
  'Laravel Nova': { icon: LaravelNova },
  'Vite': { icon: Vite },
  'CodeIgniter': { icon: CodeIgniter },
  'Visual Studio Code': { icon: VisualStudioCode },
  'OpenSuse': { icon: OpenSuse },
  'Linux': { icon: Linux },
  'AngularJS': { icon: AngularJS },
  'GitHub': { icon: GitHub },
};

/**
 * Maps the skills into object that we can use to display it easier.
 * @param skillNames
 * @return {*}
 */
const mapSkills = (skillNames) => {
  return skillNames.map((name) => {
    return {
      title: name,
      ...skillDetails[name],
    };
  })
  .filter(Boolean);
};

const experiences = ref([
  {
    title: 'Aylo',
    link: 'https://aylo.com',
    jobExperiences: [
      {
        title: 'Senior - Software Developer',
        date: {
          start: '2025-02-01',
          end: null
        },
        description: 'Worked in a microservices environment, maintaining multiple services concurrently. Careful planning was essential when implementing new features, as changes often required coordinated updates across several interconnected services.' +
          ' Coordinated communication between cross-functional teams to ensure timely and successful feature delivery.',
        responsibilities: [
          'Designing and implementing robust APIs and integrating third-party services.',
          'Managing CI/CD pipelines and ensuring code quality through code reviews and testing.',
          'Developed and optimized payment processing features and microservices.',
          'Integrated third-party payment gateways and ensured compliance with security standards (e.g., PCI-DSS).',
          'Collaborated with cross-functional teams to deliver reliable and high-performance financial features.',
          'Monitored and resolved issues related to payment workflows in production environments.',
          'Collaborate closely with product managers, security teams, and other developers to deliver high-impact features.',
          'Develop core components of the payment infrastructure with a focus on scalability, reliability, and security.',
        ],
      },
      {
        title: 'Intermediate - Software Developer',
        date: {
          start: '2023-08-01',
          end: '2025-02-01'
        },
        description: 'Worked as part of the Payment Services team on building and maintaining high-performance backend services that support internal platforms and user-facing payment flows.',
      },
    ],
    jobSkills: [
      {
        title: 'Coding Languages',
        items: ['PHP', 'Javascript', 'Typescript', 'Go', 'C#', 'GraphQL'],
        borderColor: 'border-green-400',
        itemsColor: 'bg-green-400',
      },
      {
        title: 'Databases',
        items: ['FireStore (NoSQL)', 'Redis'],
        borderColor: 'border-blue-400',
        itemsColor: 'bg-blue-400',
      },
      {
        title: 'Frameworks',
        items: [
          'Laravel',
          '.NET',
          'React',
          'NodeRed',
          'Blazor',
        ],
        borderColor: 'border-purple-400',
        itemsColor: 'bg-purple-400',
      },
      {
        title: 'Tools',
        items: [
          'PHPStorm',
          'Git',
          'GitLab',
          'Postman',
          'Docker',
          'Kubernetes',
          'GCP',
          'Elastic Search',
          'OpsGenie',
          'Jira',
          'PHPUnit',
          'Linux',
          'Kubernetes',
        ],
        borderColor: 'border-yellow-400',
        itemsColor: 'bg-yellow-400',
      },
    ],
  },
  {
    title: 'Tollé',
    link: 'https://agencetolle.com',
    jobExperiences: [
      {
        title: 'Junior - Backend Developer',
        date: {
          start: '2020-11-01',
          end: '2023-07-01'
        },
        description: 'Specialized in backend development of ERP platforms, helping clients digitalize and streamline their daily business operations.',
        responsibilities: [
          'Designed and built custom ERP modules tailored to client needs.',
          'Automated business processes including inventory, invoicing, and reporting.',
          'Conducted code reviews and enforced backend development standards.',
          'Worked closely with clients to gather requirements and provide ongoing support.',
          'Implemented new features and enhancements for existing modules.',
          'Gave clients support and feedback on their ERP implementation.',
        ],
      },
    ],
    jobSkills: [
      {
        title: 'Coding Languages',
        items: ['PHP', 'Javascript', 'Typescript', 'HTML', 'CSS'],
        borderColor: 'border-green-400',
        itemsColor: 'bg-green-400',
      },
      {
        title: 'Databases',
        items: ['MySQL', 'Redis', 'Microsoft SQL Server'],
        borderColor: 'border-blue-400',
        itemsColor: 'bg-blue-400',
      },
      {
        title: 'Frameworks',
        items: ['Laravel', 'VueJS', 'Tailwind CSS', 'WordPress', 'PHPUnit'],
        borderColor: 'border-purple-400',
        itemsColor: 'bg-purple-400',
      },
      {
        title: 'Tools',
        items: ['PHPStorm', 'DataGrip', 'Git', 'Postman', 'BitBucket', 'Jira', 'Laravel Nova', 'Vite'],
        borderColor: 'border-yellow-400',
        itemsColor: 'bg-yellow-400',
      },
    ],
  },
  {
    title: 'Spordle',
    link: 'https://spordle.com',
    jobExperiences: [
      {
        title: 'Junior - Web Developer',
        date: {
          start: '2020-7-1',
          end: '2020-11-1',
        },
        description: 'Implemented new features and enhancements for Spordle\'s suite of web services supporting sports organizations and leagues.',
        responsibilities: [
          'Developed front-end and back-end features to improve platform functionality.',
          'Built and maintained RESTful APIs for sports data management.',
          'Collaborated with UI/UX teams to enhance user experience.',
          'Assisted in resolving bugs and optimizing code for performance.',
        ],
      },
      {
        title: 'Internship - Web Developer',
        date: {
          start: '2020-1-1',
          end: '2020-4-1',
        },
        description: 'As an intern at Spordle, I worked on a variety of projects and tasks, including: developing and maintaining internal and external web applications, implementing new features and enhancements, and resolving bugs and optimizing code for performance.',
      },
    ],
    jobSkills: [
      {
        title: 'Coding Languages',
        items: ['PHP', 'Javascript', 'HTML', 'CSS'],
        borderColor: 'border-green-400',
        itemsColor: 'bg-green-400',
      },
      { title: 'Databases', items: ['MySQL'], borderColor: 'border-blue-400', itemsColor: 'bg-blue-400' },
      { title: 'Frameworks', items: ['CodeIgniter'], borderColor: 'border-purple-400', itemsColor: 'bg-purple-400' },
      {
        title: 'Tools',
        items: ['Visual Studio Code', 'Postman', 'Git', 'OpenSuse', 'Linux', 'Jira'],
        borderColor: 'border-yellow-400',
        itemsColor: 'bg-yellow-400',
      },
    ],
  },
  {
    title: 'Polygon',
    link: 'https://polygon.ca/en/',
    jobExperiences: [
      {
        title: 'Internship - Web Developer',
        date: {
          start: '2019-6-1',
          end: '2019-8-1',
        },
        description: 'As a Web Developer Intern at Polygon, I supported the development and maintenance of internal and external web applications focused on enhancing user experience and system functionality. Working closely with senior developers and cross-functional teams, I contributed to a variety of front-end and back-end tasks, while gaining hands-on experience with modern development tools and best practices.',
        responsibilities: [
          'Assisted in developing, testing, and debugging responsive web applications.',
          'Collaborated with the design team to implement UI/UX improvements.',
          'Participated in code reviews and contributed to agile development workflows.',
        ],
      },
    ],
    jobSkills: [
      {
        title: 'Coding Languages',
        items: ['C#', 'Javascript', 'HTML', 'CSS'],
        borderColor: 'border-green-400',
        itemsColor: 'bg-green-400',
      },
      {
        title: 'Databases',
        items: ['Microsoft SQL Server'],
        borderColor: 'border-blue-400',
        itemsColor: 'bg-blue-400',
      },
      {
        title: 'Frameworks',
        items: ['AngularJS', '.NET'],
        borderColor: 'border-purple-400',
        itemsColor: 'bg-purple-400',
      },
      {
        title: 'Tools',
        items: ['Visual Studio Code', 'Git'],
        borderColor: 'border-yellow-400',
        itemsColor: 'bg-yellow-400',
      },
    ],
  },
]);

// The selected experience
const selectedExperience = ref(experiences.value[0]);
const showAllSkills = ref(false);

/**
 * The amount of skill categories to display.
 * @type {number}
 */
const initialSkillCategories = 2;

/**
 * This display only the necessary stack techs and hide the rest afterwards we can load more if needed.
 * @type {ComputedRef<[UnwrapRefSimple<{title: string, items: string[], borderColor: string, itemsColor: string}>, UnwrapRefSimple<{title: string, items: string[], borderColor: string, itemsColor: string}>, UnwrapRefSimple<{title: string, items: string[], borderColor: string, itemsColor: string}>, UnwrapRefSimple<{title: string, items: string[], borderColor: string, itemsColor: string}>]|(UnwrapRefSimple<{title: string, items: string[], borderColor: string, itemsColor: string}> | UnwrapRefSimple<{title: string, items: string[], borderColor: string, itemsColor: string}> | UnwrapRefSimple<{title: string, items: string[], borderColor: string, itemsColor: string}> | UnwrapRefSimple<{title: string, items: string[], borderColor: string, itemsColor: string}>)[]>}
 */
const visibleSkillCategories = computed(() => {
  if (showAllSkills.value) {
    return selectedExperience.value.jobSkills;
  }

  return selectedExperience.value.jobSkills.slice(0, initialSkillCategories);
});

/**
 * Handles the experience click event.
 * We set the current selected experience to reflect across the component the changes of the job.
 * @param experience
 */
const selectExperience = (experience) => {
  selectedExperience.value = experience;
  showAllSkills.value = false;
};

</script>

<style scoped>
@keyframes draw-line {
  from {
    transform: scaleY(0);
    opacity: 0;
  }
  to {
    transform: scaleY(1);
    opacity: 1;
  }
}

@keyframes pop-in {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* A simple utility for hiding the scrollbar on the tabs for mobile */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Animation for the timeline container */
.timeline-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: -1px;
  height: 100%;
  width: 2px;
  background-color: #374151;
  transform-origin: top;
  animation: draw-line 1s 0.2s ease-out forwards;
  opacity: 0;
}

/* Animation for the timeline dots */
.timeline-dot {
  opacity: 0;
  transform: scale(0);
  animation: pop-in 0.3s ease-out forwards;
}
</style>
<template>
  <section id="skills_page" class="p-4 sm:p-0 min-h-screen w-full">
    <div class="w-full text-white min-h-screen p-4 sm:p-6 lg:p-8">
      <div class="max-w-7xl mx-auto">
        <ColoredTitle
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12"
          title="Professional Experience"
          :enable-glow="true"
        />
        <div class="flex justify-center mb-8 sm:mb-12">
          <div class="flex space-x-2 sm:space-x-4 bg-gray-800 p-2 rounded-xl scrollbar-hide">
            <button
              v-for="experience in experiences"
              :key="experience.title"
              @click="selectExperience(experience)"
              :class="[
              'px-4 py-2 text-sm sm:text-base font-semibold rounded-lg transition-colors duration-300 flex-shrink-0',
              selectedExperience.title === experience.title
                ? 'bg-yellow-400 text-gray-900'
                : 'bg-transparent text-gray-400 hover:bg-gray-700 hover:text-white'
            ]"
            >
              {{ experience.title }}
            </button>
          </div>
        </div>

        <transition name="fade" mode="out-in">
          <div :key="selectedExperience.title" class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div class="lg:col-span-3">
              <a
                class="inline-flex items-center text-2xl sm:text-3xl font-bold mb-6 group"
                :href="selectedExperience.link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 class="animate-fade-in-left opacity-0" style="animation-fill-mode: forwards;">
                  {{ selectedExperience.title }} Roles
                </h2>
                <Link/>
              </a>
              <div class="relative timeline-container">
                <div
                  v-for="(job, index) in selectedExperience.jobExperiences"
                  :key="job.title"
                  class="mb-10 pl-8 animate-fall-in opacity-0"
                  :style="{ 'animation-delay': `${index * 200}ms`, 'animation-fill-mode': 'forwards' }"
                >
                  <div class="timeline-dot absolute -left-[9px] top-1 h-5 w-5 rounded-full bg-yellow-400 border-4 border-gray-900"></div>
                  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                    <h3 class="text-lg sm:text-xl font-semibold text-white">{{ job.title }}</h3>
                    <p class="text-sm text-yellow-400 mt-1 sm:mt-0">({{
                        calculateDuration(job.date.start, job.date.end)
                      }})</p>
                  </div>
                  <p class="text-xs text-gray-400 mb-4">
                    {{
                      formatDate(job.date.start) }} - {{
                      formatDate(job.date.end) || 'Present'
                    }}
                  </p>
                  <p class="text-gray-300 mb-4">{{ job.description }}</p>
                  <ul v-if="job.responsibilities" class="list-disc list-inside space-y-2 text-gray-400">
                    <li v-for="responsibility in job.responsibilities" :key="responsibility">
                      {{ responsibility }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="lg:col-span-2">
              <h2
                class="text-2xl sm:text-3xl font-bold mb-6 animate-fade-in-right opacity-0"
                :style="{'animation-fill-mode': 'forwards'}"
              >Tech Stack</h2>
              <div class="space-y-6">
                <div
                  v-for="(skillCategory, catIndex) in visibleSkillCategories"
                  :key="skillCategory.title"
                  class="animate-fall-in opacity-0"
                  :style="{'animation-delay': `${100 + catIndex * 100}ms`, 'animation-fill-mode': 'forwards'}"
                >
                  <h3 class="text-lg font-semibold text-yellow-400 mb-3">{{ skillCategory.title }}</h3>
                  <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-3">
                    <div
                      v-for="(item, index) in mapSkills(skillCategory.items)"
                      :key="item.title"
                      :class="[
                        'border-2 bg-gray-800 animate-fall-in opacity-0',
                        skillCategory.borderColor,
                        'border-opacity-30 hover:border-opacity-100',
                      ]"
                      :style="{ 'animation-delay': `${250 + catIndex * 100 + index * 50}ms`, 'animation-fill-mode': 'forwards' }"
                      class="flex flex-col items-center justify-center text-center p-3 rounded-lg font-semibold cursor-pointer transition-all duration-300 h-28"
                    >
                      <component :is="item.icon" :class="item.classes ?? defaultIconClasses"/>
                      <span class="text-xs sm:text-sm text-gray-200">{{ item.title }}</span>
                    </div>
                  </div>
                </div>

                <div v-if="selectedExperience.jobSkills.length > initialSkillCategories" class="text-center pt-4">
                  <button
                    @click="showAllSkills = !showAllSkills"
                    class="inline-flex items-center gap-2 text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
                  >
                    <span>{{ showAllSkills ? 'Show Less' : 'Show More' }}</span>
                    <ArrowUp v-if="showAllSkills"/>
                    <ArrowDown v-else/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>
