/**
 * Social / external links rendered by SocialLinks.vue.
 * `icon` is a top-level svg component; `label` is used for aria-label/title.
 */
import GitHub from '@components/core/svgs/GitHub.vue';
import LinkedIn from '@components/core/svgs/LinkedIn.vue';
import Instagram from '@components/core/svgs/Instagram.vue';

export const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/syteks',
    icon: GitHub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sergiu-turcanu-169b81190/',
    icon: LinkedIn,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/sergiuthefirst',
    icon: Instagram,
  },
];
