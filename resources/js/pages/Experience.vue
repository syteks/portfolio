<script setup>
  import Folder from '@components/core/elements/Folder.vue';
  import { ref } from 'vue';
  import BaseCard from '@components/core/cards/BaseCard.vue';
  import CardHeader from '@components/core/cards/CardHeader.vue';
  import CardExperienceList from '@components/core/elements/CardExperienceList.vue';

  const experiences = [
    {
      title: "Aylo",
      link: "https://aylo.com",
      jobExperiences: [
        {
          title: 'Senior - Software Developer',
          date: {
            start: "2025-2-01",
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
          ]
        },
        {
          title: 'Intermediate - Software Developer',
          date: {
            start: "2023-8-1",
            end: "2025-2-1",
          },
          description: 'Worked as part of the Payment Services team on building and maintaining high-performance backend services that support internal platforms and user-facing payment flows.',
        }
      ],
      jobSkills: [
        {
          title: 'Coding Languages',
          items: [
            'PHP',
            'Javascript/Typescript',
            'Go',
            'C#',
            'SQL',
            'GraphQL',
          ],
        },
        {
          title: 'Databases',
          items: [
            'FireStore (NoSQL)',
            'Redis',
          ],
        },
        {
          title: 'Frameworks',
          items: [
            'Laravel',
            '.NET',
            'React',
            'NodeRed',
            'Blazor',
            'Jest'
          ],
        },
        {
          title: 'Tools',
          items: [
            'PHPStorm',
            'Git',
            'GitLab',
            'Postman',
            'Lerna',
            'Docker',
            'Kubernetes',
            'Google Cloud Platform (GCP)',
            'Elastic Search',
            'OpsGenie',
            'Jira',
            'PHPUnit',
          ],
        }
      ],
    },
    {
      title: "Tollé",
      link: "https://agencetolle.com",
      jobExperiences: [
        {
          title: 'Junior - Backend Developer',
          date: {
            start: "2020-11-1",
            end: "2023-7-1",
          },
          description: 'Specialized in backend development of ERP platforms, helping clients digitalize and streamline their daily business operations.',
          responsibilities: [
            'Designed and built custom ERP modules tailored to client needs.',
            'Automated business processes including inventory, invoicing, and reporting.',
            'Conducted code reviews and enforced backend development standards.',
            'Worked closely with clients to gather requirements and provide ongoing support.',
            'Implemented new features and enhancements for existing modules.',
            'Gave clients support and feedback on their ERP implementation.',
          ]
        }
      ],
      jobSkills: [
        {
          title: 'Coding Languages',
          items: [
            'PHP',
            'Javascript/Typescript',
            'SQL',
            'HTML/CSS',
          ],
        },
        {
          title: 'Databases',
          items: [
            'MySQL',
            'Redis',
            'Microsoft SQL Server',
          ],
        },
        {
          title: 'Frameworks',
          items: [
            'Laravel',
            'VueJS',
            'Tailwind CSS',
            'InertiaJS',
            'WordPress',
            'PHPUnit',
          ],
        },
        {
          title: 'Tools',
          items: [
            'PHPStorm',
            'DataGrip',
            'DataGrip',
            'Git',
            'Postman',
            'BitBucket',
            'Jira',
            'Laravel Nova',
            'Vite',
            'Inertia',
          ],
        }
      ],
    },
    {
      title: "Spordle",
      link: "https://spordle.com",
      jobExperiences: [
        {
          title: 'Junior - Web Developer',
          date: {
            start: "2020-7-1",
            end: "2020-11-1",
          },
          description: 'Implemented new features and enhancements for Spordle\'s suite of web services supporting sports organizations and leagues.',
          responsibilities: [
            'Developed front-end and back-end features to improve platform functionality.',
            'Built and maintained RESTful APIs for sports data management.',
            'Collaborated with UI/UX teams to enhance user experience.',
            'Assisted in resolving bugs and optimizing code for performance.',
          ]
        },
        {
          title: 'Internship - Web Developer',
          date: {
            start: "2020-1-1",
            end: "2020-4-1",
          },
          description: 'As an intern at Spordle, I worked on a variety of projects and tasks, including: developing and maintaining internal and external web applications, implementing new features and enhancements, and resolving bugs and optimizing code for performance.',
        }
      ],
      jobSkills: [
        {
          title: 'Coding Languages',
          items: [
            'PHP',
            'Javascript',
            'SQL',
            'HTML/CSS'
          ],
        },
        {
          title: 'Databases',
          items: [
            'MySQL',
          ],
        },
        {
          title: 'Frameworks',
          items: [
            'CodeIgniter',
          ],
        },
        {
          title: 'Tools',
          items: [
            'Visual Studio Code',
            'Postman',
            'Git',
            'Linux (OpenSuse)',
            'Jira'
          ],
        }
      ],
    },
    {
      title: "Polygon",
      link: "https://polygon.ca/en/",
      jobExperiences: [
        {
          title: 'Internship - Web Developer',
          date: {
            start: "2019-6-1",
            end: "2019-8-1",
          },
          description: 'As a Web Developer Intern at Polygon, I supported the development and maintenance of internal and external web applications focused on enhancing user experience and system functionality. Working closely with senior developers and cross-functional teams, I contributed to a variety of front-end and back-end tasks, while gaining hands-on experience with modern development tools and best practices.',
          responsibilities: [
            'Assisted in developing, testing, and debugging responsive web applications.',
            'Collaborated with the design team to implement UI/UX improvements.',
            'Participated in code reviews and contributed to agile development workflows.',
          ]
        },
      ],
      jobSkills: [
        {
          title: 'Coding Languages',
          items: [
            'C#',
            'Javascript',
            'SQL',
            'HTML/CSS',
          ],
        },
        {
          title: 'Databases',
          items: [
            'Microsoft SQL Server',
          ],
        },
        {
          title: 'Frameworks',
          items: [
            'AngularJS',
            'ASP.NET',
          ],
        },
        {
          title: 'Tools',
          items: [
            'Visual Studio',
            'Git',
          ],
        }
      ],
    }
  ];

  const skillStyle = {
    'Coding Languages': 'bg-blue-800 border-blue-50',
    'Databases': 'bg-purple-800 border-purple-50',
    'Frameworks': 'bg-amber-800 border-amber-50',
    'Tools': 'bg-green-800 border-green-50',
  };

  const clickedFolderTitle = ref("Aylo")

  /**
   * Sets the active folder for the experience section.
   * @param {string} title
   */
  const setActiveFolder = (title) => {
    if (clickedFolderTitle.value === title) {
      clickedFolderTitle.value = '';
      return;
    }

    clickedFolderTitle.value = title;
  }

  /**
   * Returns the job experiences for the selected folder.
   * @return {[{title: string, date: string, description: string, responsibilities: string[]},{title: string, date: string, description: string, responsibilities: string[]}] | [{title: string, date: string, description: string, responsibilities: string[]},{title: string, date: string, description: string, responsibilities: string[]}] | [{title: string, date: string, description: string, responsibilities: string[]},{title: string, date: string, description: string, responsibilities: string[]}] | [{title: string, date: string, description: string, responsibilities: string[]},{title: string, date: string, description: string, responsibilities: string[]}] | *}
   */
  const getJobExperienceForSelectedFolder = () => {
    return experiences.find(experience => experience.title === clickedFolderTitle.value).jobExperiences;
  }

  /**
   * Returns the job skills for the selected folder.
   * @return {[{title: string, items: string[]},{title: string, items: string[]},{title: string, items: string[]},{title: string, items: string[]}] | [{title: string, items: string[]},{title: string, items: string[]},{title: string, items: string[]},{title: string, items: string[]}] | [{title: string, items: string[]},{title: string, items: string[]},{title: string, items: string[]},{title: string, items: string[]}] | [{title: string, items: string[]},{title: string, items: string[]},{title: string, items: string[]},{title: string, items: string[]}] | *}
   */
  const getJobSkillsForSelectedFolder = () => {
    return experiences.find(experience => experience.title === clickedFolderTitle.value).jobSkills;
  }

  /**
   * Returns the link for the selected folder.
   * @return {string | *}
   */
  const getLink = () => {
    return experiences.find(experience => experience.title === clickedFolderTitle.value).link;
  }
</script>

<template>
  <section id="experience_page">
    <div
      class="pt-24 sticky top-0 min-h-screen bg-gradient-to-b from-gray-800 to-gray-600 text-white"
    >
        <div
          class="flex justify-center flex-col md:flex-row pl-12 md:pl-0"
        >
            <Folder
              v-for="experience in experiences"
              :folder="experience"
              :isActive="clickedFolderTitle === experience.title"
              @folder-clicked="setActiveFolder"
              class="mb-8 md:mb-0"
            >
            </Folder>
        </div>
        <BaseCard
          v-if="clickedFolderTitle"
          :classes="'border rounded-lg shadow bg-gray-800 border-gray-700 max-w-7xl mx-auto mt-8 space-y-8 shadow-lg rounded-lg p-6'"
        >
          <CardHeader
            :title="clickedFolderTitle"
            :link="getLink()"
          >
          </CardHeader>
          <CardExperienceList
            :jobExperiences="getJobExperienceForSelectedFolder()"
          >
          </CardExperienceList
          >
        </BaseCard>
      <div
        v-if="clickedFolderTitle"
        class="max-w-7xl mx-auto mt-8 space-y-8"
      >
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <BaseCard
              v-for="skill in getJobSkillsForSelectedFolder()"
              :classes="skillStyle[skill.title] + ' border  p-4 rounded-md shadow-sm'"
            >
              <h4 class="font-semibold text-white-800 mb-2 text-center">{{ skill.title }}</h4>
              <ul
                v-for="item in skill.items"
                class="text-md text-white list-disc list-inside"
              >
                <li>{{ item }}</li>
              </ul>
            </BaseCard>
          </div>
        </div>
    </div>
  </section>
</template>
