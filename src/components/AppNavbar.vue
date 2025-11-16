<template>
  <v-app-bar elevation="0">
    <router-link to="/" class="text-decoration-none text-h6 mx-5">{{ t('app.title') }}</router-link>

    <v-btn color="primary" to="/manage-level-zero" class="ml-2">
      {{ t('navbar.manageLevelZero') }}
    </v-btn>
    <v-btn color="primary" to="/manage-character" class="ml-2">
      {{ t('navbar.manageCharacters') }}
    </v-btn>
    <!-- <v-btn color="primary" to="/create-random-table">{{ t('navbar.manageRandomTables') }}</v-btn> -->

    <v-spacer />

    <v-btn icon variant="text" class="mr-4" :aria-label="toggleThemeLabel" @click="toggleTheme">
      <v-icon :icon="themeIcon" size="x-large" />
    </v-btn>

    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon variant="text" class="mr-4" v-bind="props">
          <v-icon icon="mdi-translate" size="x-large" v-bind="props" />
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in languageItems" :key="index" :value="index">
          <v-list-item-title @click="currentLocale = item.value">
            {{ item.label }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { useTheme } from 'vuetify';
  import { LOCALE_STORAGE_KEY, THEME_STORAGE_KEY, DEFAULT_THEME } from '../constants/storage';

  function readSavedTheme(): 'light' | 'dark' {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const stored = localStorage.getItem(THEME_STORAGE_KEY);
        if (stored === 'light' || stored === 'dark') return stored;
      }
    } catch (e) {
      /* ignore */
    }
    return DEFAULT_THEME;
  }

  const { t, locale } = useI18n();
  const theme = useTheme();

  // initialize theme from storage once per mount
  theme.global.name.value = readSavedTheme();

  const isDarkTheme = computed(() => theme.global.name.value === 'dark');
  const themeIcon = computed(() =>
    isDarkTheme.value ? 'mdi-white-balance-sunny' : 'mdi-moon-waxing-crescent'
  );
  const toggleThemeLabel = computed(() =>
    isDarkTheme.value ? 'Switch to light theme' : 'Switch to dark theme'
  );

  function toggleTheme() {
    const nextTheme: 'light' | 'dark' = isDarkTheme.value ? 'light' : 'dark';
    theme.global.name.value = nextTheme;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch (e) {
      /* ignore */
    }
  }

  const languageItems = [
    { value: 'en', label: 'English' },
    { value: 'pt-BR', label: 'Português (Brasil)' }
  ];

  const currentLocale = computed({
    get: () => locale.value,
    set: (v: string) => {
      locale.value = v;
      try {
        localStorage.setItem(LOCALE_STORAGE_KEY, v);
      } catch (e) {
        /* ignore */
      }
    }
  });
</script>
