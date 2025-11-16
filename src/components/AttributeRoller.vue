<template>
  <v-card class="pa-4">
    <v-card-title class="text-h5">Roll Character Attributes</v-card-title>

    <v-row>
      <v-col v-for="attr in attributes" :key="attr" cols="12" md="6">
        <v-card variant="outlined">
          <v-card-text>
            <v-row class="align-center">
              <v-col cols="5" class="text-capitalize font-weight-bold">{{ attr }}:</v-col>
              <v-col cols="5" class="text-capitalize font-weight-bold">
                <v-text-field
                  v-model.number="attributeValues[attr]"
                  density="compact"
                  hide-details
                  readonly
                />
              </v-col>

              <v-col cols="2" class="d-flex justify-center">
                <v-btn
                  @click="rollAttribute(attr)"
                  color="primary"
                  icon="mdi-dice-multiple"
                  variant="text"
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-card-actions class="mt-4">
      <v-btn @click="rollAll" color="primary" variant="elevated">Roll All Attributes</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
  import { ref, computed, watch } from 'vue';
  import { AttributeType, CharacterAttributes, isValidAttributeValue } from '../types/attributes';

  const attributes = Object.values(AttributeType);

  const attributeValues = ref<Partial<CharacterAttributes>>({
    [AttributeType.STRENGTH]: undefined,
    [AttributeType.INTELLIGENCE]: undefined,
    [AttributeType.WISDOM]: undefined,
    [AttributeType.DEXTERITY]: undefined,
    [AttributeType.CONSTITUTION]: undefined,
    [AttributeType.CHARISMA]: undefined
  });

  // Roll 3d6
  function rollDice(): number {
    return Array(3)
      .fill(0)
      .map(() => Math.floor(Math.random() * 6) + 1)
      .reduce((a, b) => a + b, 0);
  }

  function rollAttribute(attr: AttributeType) {
    attributeValues.value[attr] = rollDice();
  }

  function rollAll() {
    attributes.forEach(attr => rollAttribute(attr));
  }

  function isCompleteAttributes(
    values: Partial<CharacterAttributes>
  ): values is CharacterAttributes {
    return attributes.every(attr => {
      const v = values[attr];
      return typeof v === 'number' && isValidAttributeValue(v);
    }) as boolean;
  }

  const emit = defineEmits<{
    'update:attributes': [attributes: CharacterAttributes];
  }>();

  // Watch for changes and emit them only when the partial is a complete CharacterAttributes
  watch(
    attributeValues,
    (newValues: Partial<CharacterAttributes>) => {
      if (isCompleteAttributes(newValues)) {
        emit('update:attributes', newValues);
      }
    },
    { deep: true }
  );
</script>
