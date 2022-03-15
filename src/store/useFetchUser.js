import { defineStore } from 'pinia';
import router from '@/router/index.js';

export const useFetchUserStore = defineStore('userStore', {
  state: () => ({
    responseMessage: [],
    hasMessage: {
      signup: false,
      login: false,
    },
    user: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  }),
  actions: {
    async fetchUser() {
      fetch(`http://localhost:9000/api/v1/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.user),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.MESSAGE[0].type == 'failure') {
            this.hasMessage.signup = true;
          } else {
            this.hasMessage.login = true;
            router.push('/login');
          }

          this.responseMessage.push(...data.MESSAGE);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
});
