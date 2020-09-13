<template>
  <div class="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
    <section class="flex items-center justify-center flex-col mt-auto w-screen">
      <h1 class="font-semibold text-3xl mt-2">Forgot your password?</h1>
      <p class="text-gray-700 text-sm">Or, <a class="text-indigo-600 hover:text-indigo-700" href="/">Go back</a></p>
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
        <div class="mb-4 flex items-center justify-between">
          <!--          <div class="flex items-center">-->
          <!--            <input id="remember-me" type="checkbox"-->
          <!--                   class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">-->
          <!--            <label for="remember-me" class="ml-2 block text-sm leading-5 text-gray-700">-->
          <!--              Remember me-->
          <!--            </label>-->
          <!--          </div>-->
          <div class="text-sm leading-5">
            <span class="font-medium text-gray-600 hover:text-gray-700 focus:outline-none focus:underline">
              We'll send an email for you to reset your password.
            </span>
          </div>
        </div>
        <button type="button" @click="requestReset"
                class="mt-2 w-full p-3 text-center text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded font-semibold tracking-wide uppercase">
          Request Reset
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

export default {
  data() {
    return {
      email: '',
      error: null
    };
  },

  methods: {
    async requestReset() {
      this.$nuxt.$loading.start();

      if (!this.email) {
        this.error = 'A valid email address is required.';
        this.$nuxt.$loading.finish();
      }

      try {
        await this.$axios.post('/api/v1/account/forgot-password', {
          email: this.email
        });

        return this.$router.push("/forgot-password/sent");
      } catch (e) {
        this.error = "This email doesn't exist!";

        this.$nuxt.$loading.finish();
      }

    },
    clear_errors: () => {
      this.error = null;
    }
  }
};
</script>
