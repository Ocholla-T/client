<script setup>
// @ts-ignore
import FormInput from '@/components/FormInput.vue';

function getImageSource(image) {
  // @ts-ignore
  return new URL(`../assets/images/${image}.svg`, import.meta.url).href;
}

const inputs = [
  {
    title: 'E-mail',
    inputType: 'text',
    icon: getImageSource('at-outline'),
    placeholder: 'name@email.com',
  },
  {
    title: 'Password',
    inputType: 'password',
    icon: getImageSource('eye-outline'),
    placeholder: '8+ Characters, 1 Capital Letter',
  },
  {
    title: 'Confirm Password',
    inputType: 'password',
    icon: getImageSource('eye-off-outline'),
    placeholder: 'Confirm your password',
  },
];
</script>

<template>
  <section>
    <form class="form" action="submit">
      <h1 class="form__title">Create new account.</h1>
      <h4 class="form__subtitle">
        Already have an account? <router-link to="/login">Sign in</router-link>
      </h4>

      <FormInput
        v-for="(input, index) in inputs"
        :key="index"
        :title="input.title"
        :inputType="input.inputType"
        :placeholder="input.placeholder"
        :icon="input.icon"
      />

      <button class="form__button form__button--blue" type="submit">Create an account</button>
      <button class="form__button form__button--google" type="submit">
        <img src="@/assets/images/logo-google.svg" alt="" /> Sign up with Google
      </button>
    </form>
  </section>
</template>

<style lang="scss">
@use '@/assets/styles/views/signup.scss';
</style>
