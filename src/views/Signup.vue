<script setup>
import FormInput from '@/components/FormInput.vue';
import ErrorMessageCard from '@/components/ErrorMessageCard.vue';
import { ref } from 'vue';

function getImageSource(image) {
  // @ts-ignore
  return new URL(`../assets/images/${image}.svg`, import.meta.url).href;
}

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

const errors = ref([]);
async function hasError() {
  if (errors.value.length > 0) {
    console.log(true);
  }
}

async function createAccount(event) {
  errors.value = [];

  const user = {
    email: inputs[0].inputValue.value,
    password: inputs[1].inputValue.value,
    confirmPassword: inputs[2].inputValue.value,
  };

  await fetch('http://localhost:9000/api', {
    method: 'POST',
    body: JSON.stringify({ ...user }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      if (json.errors) {
        errors.value.push(...json.errors);
      }
    });
}
</script>

<template>
  <section>
    <form class="form" action="submit" @submit.prevent="createAccount" method="post">
      <h1 class="form__title">Create new account.</h1>
      <h4 class="form__subtitle">
        Already have an account? <router-link to="/login">Sign in</router-link>
      </h4>

      <transition-group v-for="error in errors" :key="error" name="fade" tag="div">
        <ErrorMessageCard class="form__error_message" v-if="hasError">
          <template v-slot:error_message> {{ error.message }} </template>
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
