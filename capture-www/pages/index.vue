<template>
  <div class="flex flex-col items-center w-full">
    <section class="bg-white flex flex-col p-20 w-full items-center">
      <div class="flex flex-col w-full max-w-5xl text-center items-center">
        <h1 data-aos="fade-up" data-aos-duration="1000" style="font-size: 2.95rem;" class="font-bold text-black mb-2">A free and open-source screenshots API</h1>
        <p data-aos="fade-up" data-aos-duration="1000" class="text-2xl mb-4 text-gray-700">Fast, reliable, and free screenshots as a service.</p>
        <form data-aos="fade-up" data-aos-duration="1000" class="flex min-w-lg max-w-lg w-full flex-row items-center justify-center rounded shadow mb-4">
              <input class="h-full w-full p-5" type="text" placeholder="e.g. https://neutroncreative.com" v-model="example_url"/>
            <button @click="fetch_example" type="button" class="whitespace-no-wrap flex flex-row items-center justify-center p-5 pl-6 pr-6 font-semibold tracking-wide uppercase rounded bg-indigo-600 hover:bg-indigo-700 text-white text-sm">Capture website</button>
        </form>
          <p data-aos="fade-up" data-aos-duration="1000" class="text-sm text-gray-700">Already using Capture? <a href="https://app.capture.neutron.so" class="text-indigo-600 hover:underline">Log in.</a></p>
      </div>
    </section>
    <section class="flex flex-col p-20 w-full items-center" id="perfect-screenshots">
      <div class="flex flex-col w-full max-w-5xl items-center">
        <h2 class="font-semibold text-4xl text-gray-900" data-aos="fade-up" data-aos-duration="1000">Effortlessly perfect screenshots</h2>
        <div class="flex flex-row w-full items-center justify-center p-4">
          <div class="flex flex-col w-full lg:w-7/12 p-3 mb-2">
            <div data-aos="fade-up" data-aos-duration="1000" class="p-6 hover:bg-white rounded cursor-pointer">
              <h3 class="font-semibold text-xl mb-2 text-gray-900">Quick, reliable screenshots</h3>
              <p class="text-gray-700 leading-relaxed">Designed for quick & easy deployment on any static file server, Neutron Capture runs blazingly fast on a Global CDN.</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" class="p-6 hover:bg-white rounded cursor-pointer">
              <h3 class="font-semibold text-xl mb-2 text-gray-900">Powerful features and options️</h3>
              <p class="text-gray-700 leading-relaxed">Backed by NuxtJS and MongoDB, Neutron Capture is fast, secure, and highly extensible for developers looking to contribute.</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" class="p-6 hover:bg-white rounded cursor-pointer">
              <h3 class="font-semibold text-xl mb-2 text-gray-900">Licensed with GPL v3+</h3>
              <p class="text-gray-700 leading-relaxed">Neutron Capture is licensed via GNU General Public License version 3, meaning all future releases & forks will always remain free and community security & support is always available.</p>
            </div>
          </div>
          <div class="flex w-full lg:w-5/12 p-3">
            <div data-aos="fade-up" data-aos-duration="1000" style="transform:perspective(1040px) rotate(0deg) rotateX(2deg) rotateY(-12deg) translateZ(-10px) scale(1.05); " class="overflow-hidden shadow-lg relative w-full min-w-sm max-w-sm mt-4 bg-gray-800 rounded-md flex-col items-center justify-center">
              <div class="w-full h-full absolute t-0 l-0 r-0 b-0 z-1">
              </div>
              <div class="flex flex-row bg-gray-900 p-3 items-center">
                <img src="/Lock.svg" class="mr-2 opacity-50 w-3"/>
                <span class="text-sm text-gray-200 tracking-wide mr-2">{{ requested_url }}</span>
              </div>
              <img :src="requested_img"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="flex bg-white flex-col p-20 w-full items-center">
      <div class="flex flex-col w-full max-w-5xl items-center">
        <h2 class="font-semibold text-4xl text-gray-900" data-aos="fade-up" data-aos-duration="1000">Get started in 30 seconds</h2>
        <div class="flex flex-row w-full items-center justify-center p-4">
          <div class="flex w-full lg:w-5/12 p-3">
            <form data-aos="fade-up" data-aos-duration="1000" style="transform:perspective(1040px) rotate(0deg) rotateX(-2deg) rotateY(12deg) translateZ(10px) scale(1.05); " class="shadow-lg relative w-full min-w-sm max-w-sm mt-4 p-6 bg-white rounded-md shadow-md flex-col">
              <div class="w-full h-full absolute t-0 l-0 r-0 b-0 z-1"></div>
              <div class="flex flex-col mb-4">
                <label class="font-medium text-sm">Email Address</label>
                <input class="p-2 mt-2 text-sm border-solid border-gray-200 rounded-sm border" type="email" placeholder="e.g. jane@gmail.com"/>
              </div>
              <div class="flex flex-col mb-4">
                <label class="font-medium text-sm text-gray-800">Handle</label>
                <div class="flex flex-row p-2 pl-0 pt-0 pr-0 pb-0 mt-2 text-sm border-solid border-gray-200 rounded-sm border">
                  <span class="flex p-2 bg-gray-100 border text-gray-700 border-solid border-gray-300 border-t-0 border-l-0 border-b-0">app.singlelink.co/u/</span>
                  <input class="p-2 flex-grow w-full" type="text" placeholder="e.g. janedoe"/>
                </div>
              </div>
              <div class="flex flex-col mb-4">
                <label class="font-medium text-sm">Password</label>
                <input class="p-2 mt-2 text-sm border-solid border-gray-200 rounded-sm border" type="password" placeholder="e.g. your password"/>
              </div>
              <button type="button" class="mt-2 w-full p-3 text-center text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded-sm font-semibold">Sign up</button>
            </form>
          </div>
          <div class="flex flex-col w-full lg:w-7/12 p-3 mb-2">
            <div data-aos="fade-up" data-aos-duration="1000" class="p-6 hover:bg-gray-100 rounded cursor-pointer">
              <h3 class="font-semibold text-xl mb-2 text-gray-900">Create your free account</h3>
              <p class="text-gray-700 leading-relaxed">Create your free Capture account in seconds, no credit card required.</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" class="p-6 hover:bg-gray-100 rounded cursor-pointer">
              <h3 class="font-semibold text-xl mb-2 text-gray-900">Get your API Key</h3>
              <p class="text-gray-700 leading-relaxed">Request and instantly receive your API key to gain access to the Neutron Capture hosted screenshots API.</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" class="p-6 hover:bg-gray-100 rounded cursor-pointer">
              <h3 class="font-semibold text-xl mb-2 text-gray-900">Send your first request</h3>
              <p class="text-gray-700 leading-relaxed">It only takes a few steps to get your API token, and then you're ready to capture your first screenshots!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col w-full bg-indigo-600 items-center justify-content p-20">
      <div class="flex flex-row w-full max-w-5xl justify-between">
        <div class="flex flex-col">
          <h2 class="text-white font-bold text-5xl mb-2">Ready to get started?</h2>
          <p class="text-gray-300 text-xl max-w-2xl leading-relaxed">Get faster screenshots in 30 seconds when you sign up for Capture!</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <a href="https://app.capture.neutron.so">
            <button class="w-full mb-2 flex flex-row items-center justify-center p-5 pl-6 pr-6 font-semibold tracking-wide uppercase rounded overflow-hidden bg-black hover:bg-gray-900 text-white border border-indigo-600 hover:border-indigo-700 text-sm">Get started for free</button>
          </a>
          <a href="https://github.com/Neutron-Creative/Capture">
            <button class="w-full mb-2 flex flex-row items-center justify-center p-5 pl-6 pr-6 font-semibold tracking-wide uppercase rounded overflow-hidden bg-gray-100 hover:bg-gray-200 text-white border border-gray-200 text-gray-700 text-sm"><img style="width: 20px; height: auto; opacity: .85;" class="mr-3" src="/github-mark.svg"/>View us on Github</button>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        example_url: '',
        requested_url: 'https://neutron.so',
        requested_img: '',
      };
    },
    methods: {
      fetch_example: async function() {
        //this.$nuxt.$loading.start();
        if(this.example_url) this.requested_url = this.example_url;
        let image = await this.$axios.get(this.build_url(this.requested_url));
        //this.$nuxt.$loading.finish();
        return this.requested_img = this.build_url(this.requested_url);
      },
      build_url(url) {
        return 'https://capture.neutroncreative.com/api/v1/capture?url=' + url + '&sizes=1280x720&crop=true';
      }
    },
    mounted: function() {
      this.fetch_example();
    }
  };
</script>
