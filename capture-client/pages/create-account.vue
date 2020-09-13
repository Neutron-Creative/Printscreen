<template>
  <div class="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
    <section class="flex items-center justify-center flex-col mt-auto w-screen">
      <h1 class="font-semibold text-3xl mt-2">Get started for free</h1>
      <p class="text-gray-700 text-sm">
        Already have an Capture account?
        <a class="text-indigo-600 hover:text-indigo-700" href="/">Sign in.</a>
      </p>
      <div v-if="this.error"
           class="flex flex-row p-2 mt-4 mb-2 bg-orange-200 text-orange-600 rounded w-11/12 max-w-sm justify-center items-center text-sm border border-orange-300 shadow-sm">
        <img style="width: 12px;" src="/caution.svg">
        <div class="flex flex-col ml-2">
          {{ this.error }}
        </div>
      </div>
      <form class="w-11/12 max-w-sm mt-4 p-6 bg-white rounded-md shadow-md flex-col">
        <div class="flex flex-col mb-4">
          <label class="font-medium text-sm">Email Address</label>
          <input class="p-2 mt-2 text-sm border-solid border-gray-300 rounded border" type="email"
                 placeholder="e.g. jane@gmail.com" v-model="email"/>
        </div>
        <div class="flex flex-col mb-4">
          <label class="font-medium text-sm">Password</label>
          <input class="p-2 mt-2 text-sm border-solid border-gray-300 rounded border" type="password"
                 placeholder="e.g. your password" v-model="password"/>
        </div>
        <div class="flex flex-col mb-4">
          <label class="font-medium text-sm">Full Name</label>
          <input class="p-2 mt-2 text-sm border-solid border-gray-300 rounded border" type="text"
                 placeholder="e.g. your full name" v-model="fullName"/>
        </div>
        <button type="button" @click="attemptSignup"
                class="mt-2 w-full p-3 text-center text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded font-semibold tracking-wide uppercase">
          Sign up
        </button>
      </form>
    </section>
    <section class="flex text-center text-gray-600 text-sm mt-auto mb-4">All rights reserved.<br>Copyright
      ©{{ new Date().getFullYear() }}
      Neutron Creative Inc.
    </section>
  </div>
</template>

<style>
.NeutronLogo {
  width: 180px;
}
</style>

<script>
import Utils from "~/middleware/utils";

let cancelSource;

export default {
  middleware: 'unauthenticated',

  data() {
    return {
      email: '',
      password: '',
      fullName: '',
      error: null
    };
  },

  created() {
    cancelSource = this.$axios.CancelToken.source();
  },

  beforeRouteLeave(to, from, next) {
    cancelSource?.cancel();
    next();
  },

  methods: {
    async attemptSignup() {
      this.$nuxt.$loading.start();

      if (!this.email) {
        this.error = 'Email address is required to sign up.';
        this.$nuxt.$loading.finish();
        return;
      }

      if (!this.password) {
        this.error = 'Password is required to sign up.';
        this.$nuxt.$loading.finish();
        return;
      }

      if (!this.fullName) {
        this.error = 'Full Name is required to sign up.';
        this.$nuxt.$loading.finish();
        return;
      }

      try {

        let response = await this.$axios.post('/api/v1/account/create', {
          email: this.email,
          password: this.password,
          fullName: this.fullName
        }, {cancelToken: cancelSource.token});

        console.log('Account creation successful');
        Utils.setCookie('singlelink_token', response.data.token, 7);
        this.$store.commit('auth/login', response.data.token);
        this.$nuxt.$loading.finish();
        await this.$router.push('/dashboard');

      } catch (e) {

        console.log(e);

        if (e.response.status === 409) {

          this.error = 'An account with this email already exists!';
          this.$nuxt.$loading.finish();

        } else {

          this.error = 'Something ' +
            'went wrong while trying to make the account!';
          this.$nuxt.$loading.finish();

        }
      }
    }
  }
};
</script>
