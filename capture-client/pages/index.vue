<template>
  <div class="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
    <section class="flex items-center justify-center flex-col mt-auto w-screen">
      <img src="/printscreen-logo.svg" style="width: auto; height: 22px;margin-bottom: 16px;"/>
      <h1 class="font-semibold text-3xl mt-2">Log in to your account</h1>
      <p class="text-gray-700 text-sm">Or, <a class="text-indigo-600 hover:text-indigo-700" href="/create-account">create
        your new account for free</a></p>
      <div v-if="this.error"
           class="flex flex-row p-2 mt-4 mb-2 bg-orange-200 text-orange-600 rounded w-11/12 max-w-sm justify-center items-center text-sm border border-orange-300 shadow-sm">
        <img style="width: 12px;" src="/caution.svg" alt="error box image">
        <div class="flex flex-col ml-2">
          {{ this.error }}
        </div>
      </div>
      <form class="w-11/12 max-w-sm mt-4 p-6 bg-white rounded-md shadow-md flex-col">
        <div class="flex flex-col mb-4">
          <label class="font-medium text-sm" for="email-input">Email Address</label>
          <input id="email-input" class="p-2 mt-2 text-sm border-solid border-gray-300 rounded border" type="email"
                 placeholder="e.g. jane@gmail.com" v-model="email"/>
        </div>
        <div class="flex flex-col mb-4">
          <label class="font-medium text-sm" for="password-box">Password</label>
          <input id="password-box" class="p-2 mt-2 text-sm border-solid border-gray-300 rounded border" type="password"
                 placeholder="e.g. your password" v-model="password"/>
        </div>
        <div class="mb-4 flex items-center justify-between">
          <!--          <div class="flex items-center">-->
          <!--            <input id="remember-me" type="checkbox"-->
          <!--                   class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">-->
          <!--            <label for="remember-me" class="ml-2 block text-sm leading-5 text-gray-700">-->
          <!--              Remember me-->
          <!--            </label>-->
          <!--          </div>-->
          <div class="text-sm leading-5">
            <a href="/forgot-password"
               class="font-medium text-indigo-600 hover:text-indigo-700 focus:outline-none focus:underline">
              Forgot your password?
            </a>
          </div>
        </div>
        <button type="button" @click="attemptLogin"
            style="background: linear-gradient(180deg, #7040ff, #5100ff);"
                class="mt-2 w-full p-3 text-center text-sm text-white hover:scale-105 hover:transform rounded font-medium tracking-wide">
          Login
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
    async attemptLogin() {
      this.$nuxt.$loading.start();

      if (!this.email) {
        this.error = 'Email address is required to login.';
        this.$nuxt.$loading.finish();
        return;
      }
      if (!this.password) {
        this.error = 'Password is required to login.';
        this.$nuxt.$loading.finish();
        return;
      }

      try {

        let response = await this.$axios.post('/api/v1/account/login', {
          email: this.email,
          password: this.password
        }, {cancelToken: cancelSource.token});

        console.log('Login successful');
        Utils.setCookie('singlelink_token', response.data.token, 7);
        this.$store.commit('auth/login', response.data.token);
        this.$nuxt.$loading.finish();
        await this.$router.push('/dashboard');

      } catch (e) {

        console.log('Login failed');
        console.log(e);
        this.error = 'Your email or password is incorrect!';
        this.$nuxt.$loading.finish();

      }
    }
  }
};
</script>
