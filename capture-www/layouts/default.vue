<template>
  <div class="w-screen min-h-screen flex flex-col">
    <div class="flex flex-row w-full bg-black items-center justify-center p-3">
      <div class="w-full max-w-6xl flex-row flex items-center justify-center">
        <a href="https://neutroncreative.com/"><img style="width: 80px;" class="mr-4"
                                                    src="https://neutron.so/Sidebar-brandmark.svg"/></a>
        <a
          class="text-gray-400 text-sm flex flex-row items-center justify-center hover:underline hover:text-white cursor-pointer">Learn
          how Capture fits into the Neutron product suite. <span
            class="font-bold text-white ml-2">Read more 👉</span></a>
      </div>
    </div>
    <nav
      class="sticky top-0 z-50 flex flex-row p-3 border border-l-0 border-r-0 border-t-0 border-gray-200 bg-white items-center justify-center">
      <div class="w-full max-w-6xl flex-row flex">
        <n-link to="/" class="mr-auto flex items-center justify-center"><span class="text-xl font-bold">Capture</span>
        </n-link>
        <ul class="w-full flex flex-row text-gray-600 text-sm items-center justify-end">
          <n-link class="ml-auto" to="/">
            <li class="p-2 mr-2 hover:text-black cursor-pointer">Overview</li>
          </n-link>
          <n-link to="/community">
            <li class="p-2 mr-2 hover:text-black cursor-pointer">Community</li>
          </n-link>
          <a href="https://github.com/neutron-creative/capture/wiki">
            <li class="p-2 mr-2 hover:text-black cursor-pointer">Documentation</li>
          </a>
          <n-link to="/pricing">
            <li class="p-2 mr-2 hover:text-black cursor-pointer">Pricing</li>
          </n-link>
          <iframe class="mr-2" style="transform: scale(.9);"
                  src="https://ghbtns.com/github-btn.html?user=Neutron-Creative&repo=capture&type=star&count=true&size=large"
                  frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>
          <a href="https://app.capture.neutron.so/" class="ml-auto">
            <li
              class="p-2 pl-4 pr-4 bg-indigo-600 text-sm uppercase tracking-wide rounded shadow text-white hover:bg-indigo-700 font-medium cursor-pointer">
              Get started
            </li>
          </a>
        </ul>
      </div>
    </nav>
    <Nuxt class="bg-gray-100 flex flex-grow w-full h-auto justify-start flex-col"/>
    <footer class="bg-white border border-gray-200 border-l-0 border-r-0 border-b-0 p-10">
      <ul class="w-full flex flex-row text-gray-600 text-sm items-center justify-center">
        <li class="p-2 mr-2 hover:text-gray-800 cursor-pointer">Overview</li>
        <li class="p-2 mr-2 hover:text-gray-800 cursor-pointer">Documentation</li>
        <li class="p-2 mr-2 hover:text-gray-800 cursor-pointer">Community</li>
        <li class="p-2 mr-2 hover:text-gray-800 cursor-pointer">Github</li>
        <li class="p-2 mr-2 hover:text-gray-800 cursor-pointer">Contact</li>
        <li class="p-2 mr-2 hover:text-gray-800 cursor-pointer">Get started</li>
      </ul>
      <p class="text-gray-600 text-sm text-center p-3 leading-relaxed">
        Built with caffeine, code, and care by the team at <a class="text-indigo-600 hover:underline cursor-pointer"
                                                              href="https://neutroncreative.com">Neutron Creative
        Inc.</a>
        <br/>
        Neutron Capture is open-source software licensed via <a class="text-indigo-600 hover:underline cursor-pointer"
                                                                href="https://www.gnu.org/licenses/gpl-3.0.en.html">GPL
        v3+</a>
      </p>
    </footer>
  </div>
</template>

<style>
html {
  font-family: 'Inter',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  font-size: 16px;
  line-height: 1.45;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
