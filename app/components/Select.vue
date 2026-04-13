<script setup lang="ts">
type Props = {
  modelValue: string;
  options: { label: string; value: string }[];
  label?: string;
  disabled?: boolean;
};

withDefaults(defineProps<Props>(), {
  label: "",
  disabled: false,
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const handleChange = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLSelectElement).value);
};
</script>

<style scoped src="./Select.css" />

<template>
  <label v-if="label">{{ label }}</label>

  <select :value="modelValue" @change="handleChange">
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>
