<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { skillCategories } from '@/data/skills';
import { getAccent } from '@/utils/accents';
import { useLanguageRotator, declarationStyles } from '@/composables/useLanguageRotator';
import Section from '@components/ui/Section.vue';
import SkillCard from '@components/ui/SkillCard.vue';

const { t } = useI18n({ useScope: 'global' });

const { styleIndex } = useLanguageRotator();
const style = computed(() => declarationStyles[styleIndex.value]);
</script>

<template>
  <Section id="skills" file="skills.json" :title="t('sections.skills')">
    <div class="space-y-12">
      <div v-for="category in skillCategories" :key="category.id" v-reveal>
        <!-- category header: accent dot + rotating language declaration -->
        <div class="mb-5 flex items-center justify-between gap-3 font-mono text-sm">
          <p class="flex min-w-0 items-center gap-2.5">
            <span
              class="h-2 w-2 shrink-0 rounded-full"
              :class="getAccent(category.accent).dot"
            />
            <span class="min-w-0 truncate">
              <transition name="decl" mode="out-in">
                <span :key="style.label">
                  <span v-if="style.keyword" class="text-[#bb9af7]">{{ style.keyword }}&nbsp;</span>
                  <span v-if="style.typeBefore" class="text-[#7dcfff]">{{ style.typeBefore }}&nbsp;</span>
                  <span class="font-semibold" :class="getAccent(category.accent).text">{{ style.prefix }}{{ category.variable }}</span>
                  <span v-if="style.typeAfter" class="text-[#7dcfff]">{{ style.typeAfter }}</span>
                  <span class="text-[#565f89]">{{ style.tail }}</span>
                </span>
              </transition>
            </span>
          </p>
          <span class="shrink-0 text-[#565f89]">{{ category.items.length }} {{ t('skills.items') }}</span>
        </div>

        <!-- skill tiles -->
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <SkillCard
            v-for="(item, index) in category.items"
            :key="item.name"
            v-reveal="{ delay: `${Math.min(index, 10) * 40}ms` }"
            :name="item.name"
            :accent="category.accent"
          />
        </div>

        <p class="mt-3 pl-[18px] font-mono text-sm text-[#565f89]">{{ style.close }}</p>
      </div>
    </div>
  </Section>
</template>
