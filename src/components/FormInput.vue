<script setup>
defineProps({ placeholder: String, title: String, icon: String, inputType: String });
</script>

<template>
  <label>{{ title }}</label>
  <div class="input">
    <input class="input__field" :type="inputType" :placeholder="placeholder" />
    <img class="input__icon" :src="icon" alt="icon" />
  </div>
</template>

<style lang="scss">
@use '../assets/styles/components/form-input';
</style>
