<script setup>
defineProps({
  placeholder: { type: String, required: true },
  title: { type: String, required: true },
  icon: { type: String, required: true },
  inputType: { type: String, required: true },
  modelValue: String,
});
defineEmits(['update:modelValue']);
</script>

<template>
  <div>
    <label>{{ title }}</label>
    <div class="input">
      <input
        class="input__field"
        :type="inputType"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        required
      />
      <img class="input__icon" :src="icon" alt="icon" />
    </div>
  </div>
</template>

<style lang="scss">
@use '../assets/styles/components/form-input';
</style>
