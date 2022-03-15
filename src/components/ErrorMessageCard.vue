<script setup>
defineEmits(['is-open']);
</script>

<template>
  <div class="card">
    <p>
      <slot name="error_message"> </slot>
    </p>
    <img
      class="card__icon"
      src="@/assets/images/close-circle-outline.svg"
      alt="close"
      @click="$emit('is-open')"
    />
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/components/error-message-card.scss';
</style>
