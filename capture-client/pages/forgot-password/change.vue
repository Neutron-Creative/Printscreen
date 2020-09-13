<template>
  <div class="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
    <section class="flex items-center justify-center flex-col mt-auto w-screen">
      <h1 class="font-semibold text-3xl mt-2">Set your new password</h1>
      <div v-if="this.error"
           class="flex flex-row p-2 mt-4 mb-2 bg-orange-200 text-orange-600 rounded w-11/12 max-w-sm justify-center items-center text-sm border border-orange-300 shadow-sm">
        <img style="width: 12px;" src="/caution.svg" alt="error box image">
        <div class="flex flex-col ml-2">
          {{ this.error }}
        </div>
      </div>
      <form class="w-11/12 max-w-sm mt-4 p-6 bg-white rounded-md shadow-md flex-col">
        <div class="flex flex-col mb-4">
          <label class="font-medium text-sm" for="password-box">New Password</label>
          <input id="password-box" class="p-2 mt-2 text-sm border-solid border-gray-300 rounded border" type="password"
                 placeholder="e.g. your password" v-model="password"/>
        </div>
        <button type="button" @click="updatePassword"
                class="mt-2 w-full p-3 text-center text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded font-semibold tracking-wide uppercase">
          Set Password
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
let cancelSource;

export default {
  data() {
    return {
      password: '',
      error: '',
      token: ''
    };
  },

  middleware: 'unauthenticated',

  created() {
    cancelSource = this.$axios.CancelToken.source();
  },

  mounted() {
    this.token = this.$route?.query?.token;
  },

  beforeRouteLeave(to, from, next) {
    cancelSource?.cancel();
    next();
  },

  methods: {
    async updatePassword() {
      if (!this.token) {
        return;
      }

      try {
        await this.$axios.post('/api/v1/account/password-reset', {
          token: this.token,
          password: this.password
        }, {cancelToken: cancelSource.token});

        await this.$router.push('/');
      } catch (e) {
        this.error = 'Something went wrong! Was your password reset link expired?';
      }

    }

  }
};
</script>
