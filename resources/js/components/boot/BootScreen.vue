<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, computed } from 'vue';
import { profile } from '@/data/profile';
import { prefersReducedMotion } from '@/utils/media';
import TrafficLights from '@components/ui/TrafficLights.vue';

/**
 * Landing intro: a Fedora-style boot, then a GNOME-ish desktop where a terminal
 * window opens and auto-types `nvim portfolio` before the real nvim editor is
 * revealed underneath. Fully skippable; bypassed for reduced-motion / repeat
 * visits in the same session.
 */
const emit = defineEmits(['finished']);

// 'boot' → 'desktop' → 'typing' → 'launching'
const phase = ref('boot');
const bootLines = reactive([]);
const typedCommand = ref('');
const terminalReady = ref(false);

const user = profile.handle || 'sergiu';
const promptHost = 'fedora';
const command = `nvim ${user}`;

// All durations for the intro choreography, in milliseconds, in one place.
const TIMING = {
  bootLine: 140, // gap between systemd log lines
  afterBootLog: 650, // pause once the log finishes
  desktopSettle: 550, // desktop shown → terminal window animates in
  terminalSettle: 750, // terminal visible → start typing
  typeChar: 85, // gap between typed characters
  beforeLaunch: 550, // "press enter" beat after typing
  launchHandoff: 450, // "launching nvim…" before handing off to the editor
};

const clock = ref('');
const updateClock = () => {
  clock.value = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

// Systemd-style boot log. `ok` lines get the green [  OK  ] tag.
const BOOT_LOG = [
  { ok: true, text: 'Started Load Kernel Modules.' },
  { ok: true, text: 'Mounted /boot.' },
  { ok: true, text: 'Reached target Local File Systems.' },
  { ok: true, text: 'Started udev Kernel Device Manager.' },
  { ok: true, text: 'Started Network Manager.' },
  { ok: true, text: 'Started D-Bus System Message Bus.' },
  { ok: true, text: 'Started Authorization Manager.' },
  { ok: true, text: 'Started GNOME Display Manager.' },
  { ok: true, text: 'Reached target Graphical Interface.' },
  { ok: false, text: 'Starting GNOME Shell session…' },
];

let timers = [];
let clockTimer = null;
let cancelled = false;

const wait = (ms) =>
  new Promise((resolve) => {
    const id = setTimeout(resolve, ms);
    timers.push(id);
  });

const finish = () => {
  if (cancelled) return;
  cancelled = true;
  emit('finished');
};

const skip = () => finish();

// Each phase of the intro is its own small step; `run` sequences them and bails
// out early if the user skips (cancelled) at any point.
const printBootLog = async () => {
  for (const line of BOOT_LOG) {
    if (cancelled) return;
    bootLines.push(line);
    await wait(TIMING.bootLine);
  }
  await wait(TIMING.afterBootLog);
};

const openTerminal = async () => {
  phase.value = 'desktop';
  await wait(TIMING.desktopSettle);
  terminalReady.value = true;
  await wait(TIMING.terminalSettle);
};

const typeCommand = async () => {
  phase.value = 'typing';
  for (const char of command) {
    if (cancelled) return;
    typedCommand.value += char;
    await wait(TIMING.typeChar);
  }
  await wait(TIMING.beforeLaunch);
};

const launchEditor = async () => {
  phase.value = 'launching';
  await wait(TIMING.launchHandoff);
  finish();
};

const run = async () => {
  for (const phaseStep of [printBootLog, openTerminal, typeCommand, launchEditor]) {
    if (cancelled) return;
    await phaseStep();
  }
};

onMounted(() => {
  if (prefersReducedMotion()) {
    finish();
    return;
  }

  updateClock();
  clockTimer = setInterval(updateClock, 30000);
  window.addEventListener('keydown', skip);
  run();
});

onBeforeUnmount(() => {
  cancelled = true;
  timers.forEach(clearTimeout);
  clearInterval(clockTimer);
  window.removeEventListener('keydown', skip);
});

const showDesktop = computed(() => phase.value !== 'boot');
</script>

<template>
  <div
    class="fixed inset-0 z-[200] overflow-hidden font-mono text-[#c0caf5] select-none"
    @click="skip"
  >
    <!-- ───────────────────────── BOOT LOG ───────────────────────── -->
    <div
      v-if="!showDesktop"
      class="flex h-full w-full flex-col bg-black px-4 py-6 text-[13px] leading-relaxed sm:px-10 sm:text-sm"
    >
      <div class="mb-4 flex items-center gap-3">
        <span class="boot-fedora flex h-7 w-7 items-center justify-center rounded-full text-base font-bold text-white">f</span>
        <div class="text-[#9aa5ce]">
          <div>Fedora Linux 40 (Workstation Edition)</div>
          <div class="text-[#565f89]">Kernel 6.8.9-300.fc40.x86_64 on an x86_64</div>
        </div>
      </div>
      <div class="space-y-0.5">
        <p v-for="(line, index) in bootLines" :key="index" class="boot-line">
          <span v-if="line.ok" class="text-[#9ece6a]">[&nbsp;&nbsp;OK&nbsp;&nbsp;]</span>
          <span v-else class="text-[#7aa2f7]">[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span>
          <span class="ml-2 text-[#a9b1d6]">{{ line.text }}</span>
        </p>
      </div>
    </div>

    <!-- ───────────────────────── DESKTOP ───────────────────────── -->
    <div v-else class="boot-wallpaper flex h-full w-full flex-col">
      <!-- GNOME top bar -->
      <div class="flex items-center justify-between bg-black/40 px-4 py-1.5 text-xs text-white/90 backdrop-blur">
        <span class="font-semibold">Activities</span>
        <span class="font-semibold">{{ clock }}</span>
        <span class="flex items-center gap-2 text-white/80">
          <span aria-hidden="true">▾</span>
          <span aria-hidden="true">🔊</span>
          <span aria-hidden="true">🔋</span>
        </span>
      </div>

      <!-- Terminal window -->
      <div class="flex flex-1 items-center justify-center p-4">
        <div
          class="boot-term w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 shadow-2xl"
          :class="terminalReady ? 'boot-term-in' : 'boot-term-out'"
        >
          <!-- header bar -->
          <div class="flex items-center gap-2 bg-[#2b2b2b] px-3 py-2">
            <TrafficLights tone="mac" />
            <span class="flex-1 text-center text-xs text-white/70">{{ user }}@{{ promptHost }}:~</span>
          </div>
          <!-- body -->
          <div class="min-h-[180px] bg-[#1d1f21]/98 px-4 py-3 text-sm leading-relaxed">
            <p>
              <span class="text-[#7dcfff]">[{{ user }}@{{ promptHost }}</span>
              <span class="text-[#9ece6a]">&nbsp;~</span><span class="text-[#7dcfff]">]$</span>
              <span class="ml-2 text-[#c0caf5]">{{ typedCommand }}</span><span class="boot-caret">▋</span>
            </p>
            <p v-if="phase === 'launching'" class="mt-1 text-[#565f89]">launching nvim…</p>
          </div>
        </div>
      </div>
    </div>

    <!-- skip hint -->
    <button
      type="button"
      class="absolute bottom-4 right-5 z-10 text-xs text-white/40 transition-colors hover:text-white/80"
      @click.stop="skip"
    >
      press any key to skip ▸
    </button>
  </div>
</template>
