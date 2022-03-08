<script setup>
import { ref } from 'vue';
let isOpen = ref(true);

function close() {
  if (isOpen.value == true) {
    return (isOpen.value = false);
  }
}
</script>

<template>
  <div v-if="isOpen" class="card">
    <p>
      <slot name="error_message"> </slot>
    </p>
    <img
      class="card__icon"
      src="@/assets/images/close-circle-outline.svg"
      alt="close"
      @click="close"
    />
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/components/error-message-card.scss';
</style>
