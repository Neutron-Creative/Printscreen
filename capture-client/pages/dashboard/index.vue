<template>
  <div class="flex flex-col w-full h-full">
    <div
      class="flex flex-row justify-center items-center bg-white border border-gray-200 border-l-0 border-r-0 w-full p-6 pt-4 pb-4">
      <span class="mr-auto text-xl font-semibold">Current usage</span>
      <span class="text-gray-700 text-sm">08/01/2020 - 08/31/2020</span>
    </div>
    <div class="flex flex-row">
      <div class="w-full lg:w-2/3 p-6 border border-gray-200 border-t-0 border-l-0">
        <span class="text-gray-700 text-sm">API requests by day</span>
        <bar-chart :chartdata="chart.data" :options="chart.options" style="height: 150px;" class="mt-2"/>
      </div>
      <div class="flex flex-col w-full lg:w-1/3">
        <div class="flex flex-col w-full p-6 border border-gray-200 border-t-0 border-l-0 border-r-0">
          <div class="flex flex-row items-center mb-2">
            <span class="text-gray-700 text-sm">Pages captured</span>
            <button style="outline: none !important;"
                    class="font-medium text-xs text-indigo-600 hover:text-indigo-400 ml-auto cursor-pointer">Upgrade
              plan
            </button>
          </div>
          <div class="flex flex-row items-center">
            <span class="text-indigo-600 text-2xl mr-auto">849/1000</span>
            <span class="text-gray-600 text-xs">15% Remaining</span>
          </div>
        </div>
        <div class="flex flex-col w-full p-6 border border-gray-200 border-t-0 border-l-0 border-r-0">
          <div class="flex flex-row items-center mb-2">
            <span class="text-gray-700 text-sm">Billing period</span>
            <button style="outline: none !important;"
                    class="font-medium text-xs text-indigo-600 hover:text-indigo-400 ml-auto cursor-pointer">Upgrade
              plan
            </button>
          </div>
          <div class="flex flex-row items-center">
            <span class="text-indigo-600 text-2xl mr-auto">$5/Month</span>
            <span class="text-gray-600 text-xs">Next payment on September 1st</span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-row justify-center items-center bg-white border border-gray-200 border-l-0 border-t-0 border-r-0 w-full p-6 pt-4 pb-4">
      <span class="mr-auto text-xl font-semibold">Request builder</span>
      <span class="text-gray-700 text-sm">08/01/2020 - 08/31/2020</span>
    </div>
    <form class="p-6 border border-gray-200 border-t-0 border-l-0 border-r-0 w-full flex flex-col">
      <div class="flex flex-row w-full">
        <div class="flex flex-col w-full p-2">
          <label class="mb-2 text-gray-700 text-sm">Website URL</label>
          <input class="p-2 rounded border border-gray-200 text-sm" type="url"
                 placeholder="e.g. https://capture.neutron.so"/>
        </div>
        <div class="flex flex-col w-full p-2">
          <label class="mb-2 text-gray-700 text-sm">Page Resolution</label>
          <input class="p-2 rounded border border-gray-200 text-sm" type="text" placeholder="e.g. 1920x1080"/>
        </div>
      </div>
      <div class="flex flex-row w-full">
        <div class="flex flex-col w-full p-2">
          <label class="mb-2 text-gray-700 text-sm">Scale</label>
          <input class="p-2 rounded border border-gray-200 text-sm" type="number" placeholder="e.g. .8"/>
        </div>
        <div class="flex flex-col w-full p-2">
          <label class="mb-2 text-gray-700 text-sm">Timeout</label>
          <input class="p-2 rounded border border-gray-200 text-sm" type="number" placeholder="e.g. 120 seconds"/>
        </div>
        <div class="flex flex-col w-full p-2">
          <label class="mb-2 text-gray-700 text-sm">Delay</label>
          <input class="p-2 rounded border border-gray-200 text-sm" type="number" placeholder="e.g. 30 seconds"/>
        </div>
      </div>
      <div class="flex flex-row w-full">
        <div class="flex flex-col w-full lg:w-7/12 p-2">
          <label class="mb-2 text-gray-700 text-sm">User Agent</label>
          <input class="p-2 rounded border border-gray-200 text-sm" type="text"
                 placeholder="e.g. Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"/>
        </div>
        <div class="flex flex-col w-full lg:w-1/4 p-2">
          <label class="mb-2 text-gray-700 text-sm">Selector</label>
          <input class="p-2 rounded border border-gray-200 text-sm" type="text" placeholder="e.g. #div-id"/>
        </div>
        <div class="flex flex-col w-full lg:w-1/6 p-2">
          <label class="mb-2 text-gray-700 text-sm">Crop</label>
          <select class="p-2 rounded border border-gray-200 text-sm">
            <option>True</option>
            <option>False</option>
          </select>
        </div>
      </div>
      <div class="flex flex-row w-full">
        <div class="flex flex-col w-full lg:w-1/2 p-2">
          <label class="mb-2 text-gray-700 text-sm">CSS Injection</label>
          <textarea rows="4" class="p-2 rounded border border-gray-200 text-sm w-full" type="text"
                    placeholder="e.g. html { color: red !important; }"/>
        </div>
        <div class="flex flex-col w-full lg:w-1/2 p-2">
          <label class="mb-2 text-gray-700 text-sm">Javascript Injection</label>
          <textarea rows="4" class="p-2 rounded border border-gray-200 text-sm w-full" type="text"
                    placeholder="e.g. document.querySelector('html').innerHTML = 'Hello world';"/>
        </div>
      </div>
      <button type="button"
              class="rounded shadow m-2 mt-4 p-3 pr-4 pl-4 bg-indigo-600 hover:bg-indigo-500 font-medium text-sm uppercase tracking-wide text-white mr-right">
        Copy Request to Clipboard
      </button>
    </form>
  </div>
</template>

<script>

export default {
  layout: 'dashboard',
  mounted() {

  },
  data: function () {
    return {
      chart: {
        data: {
          labels: ['8/20', '8/21', '8/22', '8/23', '8/24', '8/25', '8/26'],
          datasets: [
            {
              data: [29, 21, 32, 18, 38, 39, 23],
              backgroundColor: 'rgba(83,83,236,0.35)',
              borderColor: 'rgba(83,83,236,.5)',
            },
          ]
        },
        options: {
          legend: {
            display: false
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    };
  }
};

</script>

<style scoped>
.toggle__dot {
  transition: all 0.3s ease-in-out;
}

input:checked ~ .toggle__dot {
  transform: translateX(100%);
  @apply bg-indigo-600;
}
</style>
