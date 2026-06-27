/**
 * Central registry mapping a canonical skill name to its icon component.
 *
 * The data layer (skills.js / experience.js) references skills by these exact
 * names; presentational components resolve the icon through getSkillIcon so the
 * mapping lives in one place instead of being duplicated per section.
 */
import Php from '@components/core/svgs/skills/Php.vue';
import JavaScript from '@components/core/svgs/skills/JavaScript.vue';
import TypeScript from '@components/core/svgs/skills/TypeScript.vue';
import GoLang from '@components/core/svgs/skills/GoLang.vue';
import CSharp from '@components/core/svgs/skills/CSharp.vue';
import CPlusPlus from '@components/core/svgs/skills/CPlusPlus.vue';
import GraphQL from '@components/core/svgs/skills/GraphQL.vue';
import HTML from '@components/core/svgs/skills/HTML.vue';
import CSS from '@components/core/svgs/skills/CSS.vue';
import MySQL from '@components/core/svgs/skills/MySQL.vue';
import FireStore from '@components/core/svgs/skills/FireStore.vue';
import Redis from '@components/core/svgs/skills/Redis.vue';
import MongoDB from '@components/core/svgs/skills/MongoDB.vue';
import MSSQLServer from '@components/core/svgs/skills/MSSQLServer.vue';
import ElasticSearch from '@components/core/svgs/skills/ElasticSearch.vue';
import Laravel from '@components/core/svgs/skills/Laravel.vue';
import LaravelNova from '@components/core/svgs/skills/LaravelNova.vue';
import VueJS from '@components/core/svgs/skills/VueJS.vue';
import TailwindCSS from '@components/core/svgs/skills/TailwindCSS.vue';
import NodeJS from '@components/core/svgs/skills/NodeJS.vue';
import NodeRed from '@components/core/svgs/skills/NodeRed.vue';
import JQuery from '@components/core/svgs/skills/jQuery.vue';
import AspNet from '@components/core/svgs/skills/AspNet.vue';
import React from '@components/core/svgs/skills/React.vue';
import Blazor from '@components/core/svgs/skills/Blazor.vue';
import WordPress from '@components/core/svgs/skills/WordPress.vue';
import AngularJS from '@components/core/svgs/skills/AngularJS.vue';
import CodeIgniter from '@components/core/svgs/skills/CodeIgniter.vue';
import Vite from '@components/core/svgs/skills/Vite.vue';
import PhpStorm from '@components/core/svgs/skills/PhpStorm.vue';
import DataGrip from '@components/core/svgs/skills/DataGrip.vue';
import VisualStudioCode from '@components/core/svgs/skills/VisualStudioCode.vue';
import Postman from '@components/core/svgs/skills/Postman.vue';
import PHPUnit from '@components/core/svgs/skills/PHPUnit.vue';
import Git from '@components/core/svgs/skills/Git.vue';
import GitHub from '@components/core/svgs/skills/GitHub.vue';
import GitLab from '@components/core/svgs/skills/GitLab.vue';
import BitBucket from '@components/core/svgs/skills/BitBucket.vue';
import Docker from '@components/core/svgs/skills/Docker.vue';
import Kubernetes from '@components/core/svgs/skills/Kubernetes.vue';
import GCP from '@components/core/svgs/skills/GCP.vue';
import OpsGenie from '@components/core/svgs/skills/OpsGenie.vue';
import Jira from '@components/core/svgs/skills/Jira.vue';
import Confluence from '@components/core/svgs/skills/Confluence.vue';
import Pinia from '@components/core/svgs/skills/Pinia.vue';
import Linux from '@components/core/svgs/skills/Linux.vue';
import OpenSuse from '@components/core/svgs/skills/OpenSuse.vue';
import Rider from '@components/core/svgs/skills/Rider.vue';
import Azure from '@components/core/svgs/skills/Azure.vue';
import Claude from '@components/core/svgs/skills/Claude.vue';
import Gemini from '@components/core/svgs/skills/Gemini.vue';
import Devin from '@components/core/svgs/skills/Devin.vue';
import ChatGPT from '@components/core/svgs/skills/ChatGPT.vue';

export const skillIcons = {
  // Languages
  'PHP': Php,
  'JavaScript': JavaScript,
  'TypeScript': TypeScript,
  'Go': GoLang,
  'C#': CSharp,
  'C++': CPlusPlus,
  'GraphQL': GraphQL,
  'HTML': HTML,
  'CSS': CSS,
  // Databases
  'MySQL': MySQL,
  'Firestore': FireStore,
  'Redis': Redis,
  'MongoDB': MongoDB,
  'MS SQL Server': MSSQLServer,
  'Elasticsearch': ElasticSearch,
  // Frameworks
  'Laravel': Laravel,
  'Laravel Nova': LaravelNova,
  'Vue.js': VueJS,
  'Tailwind CSS': TailwindCSS,
  'Node.js': NodeJS,
  'Node-RED': NodeRed,
  'jQuery': JQuery,
  '.NET': AspNet,
  'React': React,
  'Blazor': Blazor,
  'WordPress': WordPress,
  'AngularJS': AngularJS,
  'CodeIgniter': CodeIgniter,
  'Vite': Vite,
  // Tools
  'PhpStorm': PhpStorm,
  'Rider': Rider,
  'DataGrip': DataGrip,
  'VS Code': VisualStudioCode,
  'Postman': Postman,
  'PHPUnit': PHPUnit,
  'Git': Git,
  'GitHub': GitHub,
  'GitLab': GitLab,
  'BitBucket': BitBucket,
  'Docker': Docker,
  'Kubernetes': Kubernetes,
  'GCP': GCP,
  'Azure': Azure,
  'OpsGenie': OpsGenie,
  'Jira': Jira,
  'Confluence': Confluence,
  'Pinia': Pinia,
  'Linux': Linux,
  'openSUSE': OpenSuse,
  // AI tools
  'Claude': Claude,
  'Gemini': Gemini,
  'Devin AI': Devin,
  'ChatGPT': ChatGPT,
};

export const getSkillIcon = (name) => skillIcons[name] ?? null;
