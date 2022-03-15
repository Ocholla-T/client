<script setup>
// @ts-ignore
import FormInput from '@/components/FormInput.vue';
import ErrorMessageCard from '@/components/ErrorMessageCard.vue';

import { useFetchUserStore } from '@/store/useFetchUser.js';
import { computed } from 'vue';

const userStore = useFetchUserStore();
const { responseMessage, hasMessage } = userStore;

const inputs = [
  {
    title: 'E-mail',
    inputType: 'email',
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

const isSuccessMessage = computed(() => {
  if (responseMessage[0].type == 'success') {
    return true;
  }
});

function getImageSource(image) {
  // @ts-ignore
  return new URL(`../assets/images/${image}.svg`, import.meta.url).href;
}

function close() {
  if (hasMessage.login == true) {
    hasMessage.login = false;
  }
}
</script>

<template>
  <section>
    <form class="form" action="submit">
      <h1 class="form__title">Welcome Back</h1>
      <p class="form__subtitle">You've been missed</p>

      <transition name="fade" tag="div">
        <ErrorMessageCard
          :class="{ 'success-message': isSuccessMessage }"
          v-if="hasMessage.login"
          @is-open="close"
        >
          <template v-slot:error_message> {{ responseMessage[0].message }} </template>
        </ErrorMessageCard>
      </transition>

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
