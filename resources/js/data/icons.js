/**
 * Registry for general-purpose (non-skill) icons referenced by name in the
 * data layer, e.g. the About journey steps.
 */
import LightBulb from '@components/core/svgs/LightBulb.vue';
import IconAngleBrackets from '@components/core/svgs/IconAngleBrackets.vue';
import Briefcase from '@components/core/svgs/Briefcase.vue';
import GraduationCap from '@components/core/svgs/GraduationCap.vue';
import Layers from '@components/core/svgs/Layers.vue';

export const icons = {
  LightBulb,
  IconAngleBrackets,
  Briefcase,
  GraduationCap,
  Layers,
};

export const getIcon = (name) => icons[name] ?? null;
