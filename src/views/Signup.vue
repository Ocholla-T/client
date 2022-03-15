<script setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';

import FormInput from '@/components/FormInput.vue';
import ErrorMessageCard from '@/components/ErrorMessageCard.vue';
import { useFetchUserStore } from '@/store/useFetchUser.js';

const userStore = useFetchUserStore();
const { responseMessage, hasMessage } = storeToRefs(userStore);

const inputs = [
  {
    title: 'E-mail',
    inputType: 'email',
    icon: getImageSource('at-outline'),
    placeholder: 'name@email.com',
    inputValue: ref(''),
  },
  {
    title: 'Password',
    inputType: 'password',
    icon: getImageSource('eye-outline'),
    placeholder: '8+ Characters',
    inputValue: ref(''),
  },
  {
    title: 'Confirm Password',
    inputType: 'password',
    icon: getImageSource('eye-off-outline'),
    placeholder: 'Confirm your password',
    inputValue: ref(''),
  },
];

function getImageSource(image) {
  return new URL(`../assets/images/${image}.svg`, import.meta.url).href;
}

async function createAccount() {
  userStore.$reset();

  userStore.$patch((state) => {
    state.user.email = inputs[0].inputValue.value;
    state.user.password = inputs[1].inputValue.value;
    state.user.confirmPassword = inputs[2].inputValue.value;
  });

  await userStore.fetchUser();
}

function close() {
  if (hasMessage.signup.value == true) {
    hasMessage.signup.value = false;
  }
}
</script>

<template>
  <section>
    <form class="form" action="submit" @submit.prevent="createAccount" method="post">
      <h1 class="form__title">Create new account.</h1>
      <h4 class="form__subtitle">
        Already have an account? <router-link to="/login">Sign in</router-link>
      </h4>

      <transition-group
        v-for="(message, index) in responseMessage"
        :key="index"
        name="fade"
        tag="div"
      >
        <ErrorMessageCard class="form__error_message" v-if="hasMessage.signup" @is-open="close">
          <template v-slot:error_message> {{ message.message }} </template>
        </ErrorMessageCard>
      </transition-group>

      <FormInput
        v-for="(input, index) in inputs"
        :key="index"
        :title="input.title"
        :inputType="input.inputType"
        :placeholder="input.placeholder"
        :icon="input.icon"
        :modelValue="input.inputValue.value"
        @update:modelValue="(newValue) => (input.inputValue.value = newValue)"
      />

      <input class="form__button form__button--blue" type="submit" value="Create your Account" />
      <button class="form__button form__button--google" type="submit">
        <img src="@/assets/images/logo-google.svg" alt="" /> Sign up with Google
      </button>
    </form>
  </section>
</template>

<style lang="scss">
@use '@/assets/styles/views/signup.scss';
</style>
