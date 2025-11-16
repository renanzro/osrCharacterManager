<template>
  <v-container>
    <!-- Hero Section -->
    <v-row class="mb-8">
      <v-col cols="12" lg="6">
        <h1 class="text-h3 font-weight-bold mb-4">{{ t('home.heroTitle') }}</h1>
        <p class="text-body-1 mb-6" style="white-space: pre-line">{{ t('home.heroText') }}</p>
        <v-row>
          <v-col></v-col>
        </v-row>
      </v-col>

      <v-col cols="12" lg="6">
        <v-card class="pa-4">
          <v-card-title>{{ t('home.quickRollTitle') }}</v-card-title>

          <v-card-text>
            <v-select :items="Object.values(DiceType)" v-model="selectedDice" />

            <v-row v-if="lastResult !== undefined" class="mt-6 justify-center">
              <v-col cols="12" class="text-center">
                <div class="text-h3 font-weight-bold" style="font-size: 2.5rem; font-weight: 700">
                  {{ lastResult }}
                </div>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="handleRoll">{{ t('home.roll') }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Feature Cards -->
    <v-row align="stretch">
      <v-col cols="12" md="4" class="d-flex">
        <v-card class="d-flex flex-column h-100">
          <v-card-title>{{ t('home.feature1Title') }}</v-card-title>
          <v-card-text class="flex-grow-1">{{ t('home.feature1Text') }}</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4" class="d-flex">
        <v-card class="d-flex flex-column h-100">
          <v-card-title>{{ t('home.feature2Title') }}</v-card-title>
          <v-card-text class="flex-grow-1">{{ t('home.feature2Text') }}</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4" class="d-flex">
        <v-card class="d-flex flex-column h-100">
          <v-card-title>{{ t('home.feature3Title') }}</v-card-title>
          <v-card-text class="flex-grow-1">{{ t('home.feature3Text') }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { DiceType } from '../types/dice';
  import { useDice } from '../composables/useDice';

  const { t } = useI18n();

  const { selectedDice, rollDice } = useDice();

  // last roll result shown in the UI
  const lastResult = ref<number | undefined>(undefined);

  function handleRoll() {
    lastResult.value = rollDice();
  }

  onMounted(() => {
    selectedDice.value = DiceType.D6;
  });
</script>
