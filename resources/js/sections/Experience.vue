<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { experiences } from '@/data/experience';
import { getAccent } from '@/utils/accents';
import Section from '@components/ui/Section.vue';
import TimelineItem from '@components/ui/TimelineItem.vue';
import StackChip from '@components/ui/StackChip.vue';
import PathHeading from '@components/ui/PathHeading.vue';
import Link from '@components/core/svgs/Link.vue';

const { t, tm, rt } = useI18n({ useScope: 'global' });

const selected = ref(experiences[0]);

const select = (experience) => {
  selected.value = experience;
};

// Merge each role's structural data (dates) with its translated prose.
const roles = computed(() => {
  const localized = tm(`experience.companies.${selected.value.id}.roles`);
  return selected.value.roles.map((role, index) => {
    const text = localized[index] ?? {};
    return {
      ...role,
      title: rt(text.title),
      description: rt(text.description),
      responsibilities: text.responsibilities ? text.responsibilities.map(rt) : null,
    };
  });
});
</script>

<template>
  <Section id="experience" file="experience.log" :title="t('sections.experience')">
    <!-- Company tabs -->
    <div v-reveal class="mb-8 flex flex-wrap gap-2">
      <button
        v-for="experience in experiences"
        :key="experience.company"
        type="button"
        class="rounded-lg border px-4 py-2 font-mono text-sm transition-all duration-300"
        :class="
          selected.company === experience.company
            ? 'border-[#9ece6a]/50 bg-[#9ece6a]/10 text-[#9ece6a] shadow-lg shadow-[#9ece6a]/10'
            : 'border-white/10 text-[#565f89] hover:-translate-y-0.5 hover:border-white/30 hover:text-[#c0caf5] active:border-white/30 active:text-[#c0caf5]'
        "
        @click="select(experience)"
      >
        {{ experience.company }}
      </button>
    </div>

    <transition name="panel" mode="out-in">
      <div :key="selected.company">
        <!-- Company header -->
        <a
          :href="selected.link"
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-flex items-center gap-2 font-mono text-xl font-bold text-[#c0caf5] transition-colors hover:text-[#9ece6a] active:text-[#9ece6a] sm:text-2xl"
        >
          {{ selected.company }}
          <Link class="opacity-50 transition-all group-hover:translate-x-0.5 group-hover:opacity-100 group-active:translate-x-0.5 group-active:opacity-100" />
        </a>

        <div class="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
          <!-- Roles timeline -->
          <div class="lg:col-span-3">
            <div class="relative space-y-8">
              <span class="pointer-events-none absolute bottom-2 left-[6px] top-2 w-px bg-white/10" />
              <TimelineItem
                v-for="(role, index) in roles"
                :key="role.title"
                v-reveal="{ delay: `${index * 90}ms` }"
                :role="role"
              />
            </div>
          </div>

          <!-- Tech stack — everything visible -->
          <div class="lg:col-span-2">
            <PathHeading class="mb-5">stack</PathHeading>

            <div class="space-y-5">
              <div
                v-for="(group, index) in selected.stack"
                :key="group.category"
                v-reveal="{ delay: `${index * 80}ms` }"
              >
                <h4 class="mb-2.5 flex items-center gap-2 font-mono text-sm font-semibold">
                  <span class="h-2 w-2 rounded-full" :class="getAccent(group.accent).dot" />
                  <span :class="getAccent(group.accent).text">{{ t(`skills.categories.${group.category}`) }}</span>
                  <span class="text-[#565f89]">// {{ group.items.length }}</span>
                </h4>
                <div class="flex flex-wrap gap-2">
                  <StackChip
                    v-for="name in group.items"
                    :key="name"
                    :name="name"
                    :accent="group.accent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Section>
</template>
