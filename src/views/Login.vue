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
];
</script>

<template>
  <section>
    <form class="form" action="submit">
      <h1 class="form__title">Welcome Back</h1>
      <p class="form__subtitle">You've been missed</p>

      <FormInput
        v-for="(input, index) in inputs"
        :key="index"
        :title="input.title"
        :inputType="input.inputType"
        :placeholder="input.placeholder"
        :icon="input.icon"
      />

      <div class="form__options">
        <div>
          <input class="form__checkbox" type="checkbox" name="remember me" id="remember_me" />
          <label class="form__subtitle" for="remember_me">Remember me</label>
        </div>
        <router-link class="form__subtitle" to="/forgot-password">Forgot password?</router-link>
      </div>

      <button class="form__button form__button--blue" type="submit">Login</button>
      <p class="form__subtitle">or</p>
      <button class="form__button form__button--google" type="submit">
        <img src="@/assets/images/logo-google.svg" alt="" /> Sign in with Google
      </button>

      <h4 class="form__subtitle">
        Not registered yet? <router-link to="/signup">Create an account</router-link>
      </h4>
    </form>
  </section>
</template>

<style lang="scss">
@use '@/assets/styles/views/login.scss';
</style>
