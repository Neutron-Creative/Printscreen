<template>
  <div class="flex flex-col w-screen min-h-screen">
    <nav
      class="sticky top-0 z-50 flex flex-row p-3 border border-l-0 border-r-0 border-t-0  items-center justify-center" style="background:#F9F6EF;border-color:#cec8bb;">
      <div class="w-full max-w-6xl flex-row flex">
        <n-link to="/dashboard" aria-current="page"
                class="mr-auto flex items-center justify-center nuxt-link-exact-active nuxt-link-active">
          <img src="/printscreen-logo.svg" style="height:30px;" class="w-auto"/>
        </n-link>
        <ul class="w-full flex flex-row text-gray-300 text-sm items-center justify-end">
          <n-link to="/dashboard" aria-current="page" :class="getActiveStyles('dashboard')">
            <li>Dashboard</li>
          </n-link>
          <a href="https://billing.stripe.com/p/login/fZe15hfMU1QYeKAcMM" :class="getActiveStyles('dashboard-settings')">
            <li>Billing</li>
          </a>
          <n-link to="/logout" :class="getActiveStyles('logout')">
            <li>Logout</li>
          </n-link>
        </ul>
      </div>
    </nav>
    <section class="flex flex-col items-center w-full bg-gray-200 min-h-full">
      <div style="min-height: calc(100vh - 64px);"
           class="flex flex-col max-w-6xl items-start justify-start w-11/12 bg-gray-100 border border-gray-300 border-t-0 border-b-0 relative">
        <Nuxt/>
      </div>
    </section>
  </div>
</template>

<style>
@import url('https://rsms.me/inter/inter.css');

html {
  font-family: 'Inter', sans-serif;
}

html {
  font-size: 16px;
  line-height: 1.65;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html, body {
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

</style>

<style scoped>
.phone-display {
  display: flex;
  margin: 20px auto auto auto;
  border-radius: 50px;
  background: #000;
  padding: 14px;
  width: 280px;
  height: 606px;
}

.phone-display > iframe {
  border: none;
  width: 100%;
  height: 100%;
  border-radius: 35px;
}
</style>

<script>
export default {
  data: () => {
    return {
      active: 'dashboard',
      user: null
    };
  },

  methods: {
    getActiveStyles(page) {
      let styles = 'p-2 pl-4 pr-4 ml-4 font-medium text-gray-600 cursor-pointer';
      if (page === this.active) {
        styles = styles.replace('font-medium text-gray-600', 'font-semibold text-black');
      }
      if (page === 'dashboard') styles += ' ml-auto';
      return styles;
    },

    setActive() {
      try {
        switch (this.$route.name) {
          case "dashboard":
            this.active = "dashboard";
            break;
          case "dashboard-settings":
            this.active = "dashboard-settings";
            break;
        }
      } catch (err) {
        console.log(err);
      }
    },
  },

  mounted() {
    this.setActive();
  },

  watch: {
    $route() {
      this.setActive();
    }
  },
};
</script>

<style scoped>
.nc-item-link:hover {
  border-bottom: solid 2px rgba(235, 244, 255, 1);
}

</style>
