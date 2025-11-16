<template>
  <v-container>
    <h1 class="text-h4 mb-6">{{ t('manageCharacters.pageTitle') }}</h1>

    <v-stepper v-model="currentStep" class="mb-8">
      <v-stepper-header>
        <template v-for="(step, index) in steps" :key="step">
          <v-stepper-item :value="index + 1" :title="step" :complete="currentStep > index + 1" />

          <v-stepper-divider v-if="index < steps.length - 1" :key="`divider-${index}`" />
        </template>
      </v-stepper-header>

      <v-stepper-window>
        <v-stepper-window-item :value="1">
          <AttributeRoller v-model:attributes="characterAttributes" />
        </v-stepper-window-item>

        <v-stepper-window-item :value="2">
          <v-alert type="info" class="mt-4">Class selection coming soon...</v-alert>
        </v-stepper-window-item>
      </v-stepper-window>

      <v-card-actions class="mt-4 pb-3 px-5">
        <v-btn @click="goToPreviousStep" color="primary" variant="elevated">Previous</v-btn>

        <v-spacer />

        <v-btn @click="goToNextStep" color="primary" variant="elevated">Next</v-btn>
      </v-card-actions>
    </v-stepper>
  </v-container>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import AttributeRoller from '../components/AttributeRoller.vue';
  import { CharacterAttributes } from '../types/attributes';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();

  const characterAttributes = ref<CharacterAttributes>();
  const currentStep = ref(1);

  const steps = ref<string[]>(['Attributes', 'Class', 'Treasury', 'Combat', 'Details', 'Review']);

  function goToPreviousStep() {
    currentStep.value--;
  }

  function goToNextStep() {
    currentStep.value++;
  }
</script>
