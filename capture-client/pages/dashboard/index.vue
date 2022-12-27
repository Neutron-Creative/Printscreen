<template>
  <div class="flex flex-col w-full h-full">
    <!-- region Current Usage Section -->
    <div
      class="flex flex-row justify-center items-center bg-white border border-gray-200 border-l-0 border-r-0 w-full p-6 pt-4 pb-4">
      <span class="mr-auto text-xl font-semibold">Usage</span>
      <span class="text-gray-700 text-sm">{{ this.getFirstDay }} - {{ this.getLastDay }}</span>
    </div>
    <div class="flex flex-row">
      <!--      Chart -->
      <div class="w-full lg:w-2/3 p-6 border border-gray-200 border-t-0 border-l-0">
        <span class="text-gray-700 text-sm">Captures by day</span>
        <bar-chart ref="capture-chart" chart-id="capture-chart" :chartdata="captureChart.data"
                   :options="captureChart.options"
                   style="height: 225px;" class="mt-2"/>
      </div>

      <!--      Usage Stats-->
      <div class="flex flex-col w-full lg:w-1/3">

        <!--        Pages Captured-->
        <div class="flex flex-col w-full p-6 border border-gray-200 border-t-0 border-l-0 border-r-0">
          <div class="flex flex-row items-center mb-2">
            <span class="text-gray-700 text-sm">Pages captured</span>
            <nuxt-link to="/dashboard/settings" style="outline: none !important;"
                       class="font-medium text-xs text-indigo-600 hover:text-indigo-400 ml-auto cursor-pointer"
                       v-if="planType !== 'Enterprise'"
            >
              Upgrade plan
            </nuxt-link>
          </div>
          <div class="flex flex-row items-center">
            <span class="text-indigo-600 text-2xl mr-auto" v-if="this.maxCaptures > 0">
              {{ this.captures }}/{{ this.maxCaptures }}
            </span>
            <span class="text-indigo-600 text-2xl mr-auto" v-if="this.maxCaptures <= 0">{{ this.captures }}</span>
            <span class="text-gray-600 text-xs" v-if="this.remainingCaptures > 0">{{ this.remainingCaptures * 100 }}% remaining</span>
          </div>
        </div>

        <!--        Subscription-->
        <div class="flex flex-col w-full p-6 border border-gray-200 border-t-0 border-l-0 border-r-0">
          <div class="flex flex-row items-center mb-2">
            <span class="text-gray-700 text-sm">Subscription</span>
            <nuxt-link to="/dashboard/settings" style="outline: none !important;"
                       class="font-medium md:text-base text-indigo-600 hover:text-indigo-400 ml-auto cursor-pointer">
              {{ this.planType }}
            </nuxt-link>
          </div>
          <div class="flex flex-row items-center">
            <span class="text-indigo-600 text-xl mr-auto" v-if="planType!=='Enterprise'">{{ this.planRate }}</span>
            <span class="text-indigo-600 text-s mr-auto" v-if="planType==='Enterprise'">{{ this.planRate }}</span>
            <span v-if="nextPaymentDate && !cancelAtPeriodEnd"
                  class="text-gray-600 text-xs">Next payment on {{ this.nextPaymentDate }}</span>
            <span v-if="nextPaymentDate && cancelAtPeriodEnd" class="text-gray-600 text-xs">
              Cycle ends on {{ this.nextPaymentDate }}<br>
              Subscription ending
            </span>
          </div>
        </div>

        <!--        Billing -->
        <div class="flex flex-col w-full p-6 border border-gray-200 border-t-0 border-l-0 border-r-0">
          <div class="flex flex-row items-center mb-2">
            <span class="text-gray-700 text-sm">Billing (This Month)</span>
            <nuxt-link to="/dashboard/settings" style="outline: none !important;"
                       class="font-medium md:text-base text-indigo-600 hover:text-indigo-400 ml-auto cursor-pointer">
              ${{ this.charge / 100 }}
            </nuxt-link>
          </div>
        </div>

      </div>
    </div>
    <!-- endregion -->

    <div class="flex flex-row">

      <!--      Usage Stats-->
      <div class="flex flex-row w-full">
        <div class="w-full p-6 border border-gray-200 border-t-0 border-l-0">
          <div class="flex flex-row items-center mb-2">
            <span class="text-gray-700 text-sm">Total requests</span>
          </div>
          <div class="flex flex-row items-center">
            <span class="text-indigo-600 text-2xl mr-auto">
              {{ this.statistics.totalRequests }}
            </span>
          </div>
          </div>
          <div class="w-full p-6 border border-gray-200 border-t-0 border-l-0">
          <div class="flex flex-row items-center mb-2">
            <span class="text-gray-700 text-sm">Average captures per day</span>
          </div>
          <div class="flex flex-row items-center">
            <span class="text-indigo-600 text-2xl mr-auto">
              {{ this.averageArray(this.statistics.captureMonthlyData) }}
            </span>
          </div>
        </div>
        <div class="w-full p-6 border border-gray-200 border-t-0 border-l-0">
          <div class="flex flex-row items-center mb-2">
            <span class="text-gray-700 text-sm">Average requests per day</span>
          </div>
          <div class="flex flex-row items-center">
            <span class="text-indigo-600 text-2xl mr-auto">
              {{ this.averageArray(this.statistics.requestMonthlyData) }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <!--    endregion-->

    <!--  region  Request Builder Section-->
    <div
      class="flex flex-row justify-center items-center bg-white border border-gray-200 border-l-0 border-t-0 border-r-0 w-full p-6 pt-4 pb-4">
      <span class="mr-auto text-xl font-semibold">Request builder</span>
      <span class="text-gray-700 text-sm">{{ this.getFirstDay }} - {{ this.getLastDay }}</span>
    </div>

    <!--    region Alert Section-->
    <div v-show="this.requestBuilderAlert && this.requestBuilderAlertWarning" class="flex flex-row p-2 mt-4 mb-2 ml-8 mr-8 bg-orange-200 text-orange-600 rounded justify-center items-center
      text-sm border border-orange-300 shadow-sm ">
      <img style="width: 12px;" src="/caution.svg" alt="error box image">
      <div class="flex flex-col ml-2">
        {{ this.requestBuilderAlert }}
      </div>
    </div>

    <div v-show="this.requestBuilderAlert && !this.requestBuilderAlertWarning" class="flex flex-row p-2 mt-4 mb-2 ml-8 mr-8 bg-green-200 text-green-600 rounded justify-center items-center
      text-sm border border-green-300 shadow-sm ">
      <div class="flex flex-col ml-2">
        {{ this.requestBuilderAlert }}
      </div>
    </div>
    <!--    endregion-->

    <form class="p-6 border border-gray-200 border-t-0 border-l-0 border-r-0 w-full flex flex-col">
      <div class="flex flex-row w-full">
        <div class="flex flex-col w-full p-2">
          <label class="mb-2 text-gray-700 text-sm" for="website-url">Website URL (required)</label>
          <input id="website-url" class="p-2 rounded border border-gray-200 text-sm" type="url"
                 placeholder="e.g. https://capture.neutron.so" v-model.trim="requestBuilder.url"/>
        </div>
        <div class="flex flex-col w-full p-2">
          <label class="mb-2 text-gray-700 text-sm" for="page-resolution">Page Resolution (required)</label>
          <input id="page-resolution" class="p-2 rounded border border-gray-200 text-sm" type="text"
                 placeholder="e.g. 1920x1080" v-model.trim="requestBuilder.resolution"/>
        </div>
      </div>
      <div class="flex flex-row w-full">
        <div class="flex flex-col w-full p-2">
          <label class="mb-2 text-gray-700 text-sm" for="scale">Scale</label>
          <input id="scale" class="p-2 rounded border border-gray-200 text-sm" type="number" placeholder="e.g. .8"
                 v-model.number="requestBuilder.scale"/>
        </div>
        <div class="flex flex-col w-full p-2">
          <label class="mb-2 text-gray-700 text-sm" for="timeout">Timeout</label>
          <input id="timeout" class="p-2 rounded border border-gray-200 text-sm" type="number"
                 placeholder="e.g. 120 seconds" v-model.number="requestBuilder.timeout"/>
        </div>
        <div class="flex flex-col w-full p-2">
          <label class="mb-2 text-gray-700 text-sm" for="delay">Delay</label>
          <input id="delay" class="p-2 rounded border border-gray-200 text-sm" type="number"
                 placeholder="e.g. 30 seconds" v-model.number="requestBuilder.delay"/>
        </div>
      </div>
      <div class="flex flex-row w-full">
        <div class="flex flex-col w-full lg:w-7/12 p-2">
          <label class="mb-2 text-gray-700 text-sm" for="user-agent">User Agent</label>
          <input id="user-agent" class="p-2 rounded border border-gray-200 text-sm" type="text"
                 placeholder="e.g. Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
                 v-model.trim="requestBuilder.userAgent"/>
        </div>
        <div class="flex flex-col w-full lg:w-1/4 p-2">
          <label class="mb-2 text-gray-700 text-sm" for="selector">Selector</label>
          <input id="selector" class="p-2 rounded border border-gray-200 text-sm" type="text"
                 placeholder="e.g. #div-id" v-model.trim="requestBuilder.selector"/>
        </div>
        <div class="flex flex-col w-full lg:w-1/6 p-2">
          <label class="mb-2 text-gray-700 text-sm" for="crop">Crop</label>
          <select id="crop" class="p-2 rounded border border-gray-200 text-sm" v-model.trim="requestBuilder.crop">
            <option>true</option>
            <option>false</option>
          </select>
        </div>
      </div>
      <div class="flex flex-row w-full">
        <div class="flex flex-col w-full lg:w-1/2 p-2">
          <label class="mb-2 text-gray-700 text-sm" for="css-injection">CSS Injection</label>
          <textarea id="css-injection" rows="4"
                    class="p-2 rounded border border-gray-200 text-sm w-full"
                    placeholder="e.g. html { color: red !important; }"
                    v-model.trim="requestBuilder.css"/>

        </div>
        <div class="flex flex-col w-full lg:w-1/2 p-2">
          <label class="mb-2 text-gray-700 text-sm" for="javascript-injection">Javascript Injection</label>
          <textarea id="javascript-injection" rows="4" class="p-2 rounded border border-gray-200 text-sm w-full"
                    placeholder="e.g. document.querySelector('html').innerHTML = 'Hello world';"
                    v-model.trim="requestBuilder.javascript"/>
        </div>
      </div>
      <button type="button"
              class="rounded shadow m-2 mt-4 p-3 pr-4 pl-4 bg-indigo-600 hover:bg-indigo-500 font-medium text-sm uppercase tracking-wide text-white mr-right"
              @click="resetRequest()">
        Clear
      </button>
      <button type="button"
              class="rounded shadow m-2 mt-4 p-3 pr-4 pl-4 bg-indigo-600 hover:bg-indigo-500 font-medium text-sm uppercase tracking-wide text-white mr-right"
              @click="buildRequest()">
        Copy Request to Clipboard
      </button>
    </form>
    <!--    endregion-->

  </div>
</template>

<script>
import Utils from "@/middleware/utils";

let cancelSource;

export default {
  name: 'DashboardIndex',
  layout: 'Dashboard',

  data() {
    return {
      // Data
      intervalHandle: null,
      captures: 0,
      maxCaptures: 1,
      planType: 'Loading',
      planRate: '',
      nextPaymentDate: '',
      cancelAtPeriodEnd: false,
      charge: '',
      chargeRefunded: '',

      // Statistics
      statistics: {
        totalCaptures: 0,
        totalRequests: 0,
        captureMonthlyData: [],
        requestMonthlyData: [],
        date: null
      },

      // Request Builder
      requestBuilder: {
        url: undefined,
        resolution: undefined,
        scale: undefined,
        timeout: undefined,
        delay: undefined,
        userAgent: undefined,
        selector: undefined,
        crop: true,
        css: undefined,
        javascript: undefined
      },

      // Request Builder Alert
      requestBuilderAlert: '',
      requestBuilderAlertWarning: true,

      // Capture Chart
      captureChart: {
        data: {
          labels: [],
          datasets: [
            {
              data: [],
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
          maintainAspectRatio: false,
        }
      },

      // Request Chart
      requestChart: {
        data: {
          labels: [],
          datasets: [
            {
              data: [],
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
          maintainAspectRatio: false,
        }
      },

    };
  },

  computed: {
    getFirstDay() {
      const date = new Date();
      const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      return firstDay.toLocaleDateString();
    },
    getLastDay() {
      const date = new Date();
      const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      return lastDay.toLocaleDateString();
    }
  },

  created() {
    cancelSource = this.$axios.CancelToken.source();
  },

  async mounted() {
    await this.updateData();
    this.intervalHandle = setInterval(() => this.refreshData(), 30000);
  },

  beforeRouteLeave(to, from, next) {
    cancelSource?.cancel();
    next();
  },

  methods: {
    refreshData() {
      this.updateData();
    },

    async updateData() {
      let token = this.$store.getters["auth/get_token"];

      try {

        let statsResponse = await this.$axios.get("/api/v1/stats/user", {
          params: {token: token},
          cancelToken: cancelSource.token
        });
        let subResponse = await this.$axios.post("/api/v1/subscription/info", {token: token}, {cancelToken: cancelSource.token});

        this.captures = subResponse.data["captures"];
        this.maxCaptures = subResponse.data["max"] ?? -1;
        this.planType = subResponse.data["type"];
        this.planRate = subResponse.data["billingDisplay"];
        this.charge = Number.parseFloat(subResponse.data["charge"]);
        this.chargeRefunded = Number.parseFloat(subResponse.data["chargeRefunded"]);

        this.statistics = statsResponse.data;

        let nextPaymentTimestampInSeconds = subResponse.data["nextPayment"];

        if (nextPaymentTimestampInSeconds) {
          const date = new Date(nextPaymentTimestampInSeconds * 1000);
          this.nextPaymentDate = date.toLocaleDateString();
        } else {
          this.nextPaymentDate = '';
        }

        if (subResponse.data["cancelAtPeriodEnd"]) {
          this.cancelAtPeriodEnd = true;
        }

        this.populateChart('capture-chart', this.statistics.captureMonthlyData);
        this.populateChart('request-chart', this.statistics.requestMonthlyData);

      } catch (e) {

        if (this.$axios.isCancel(e)) {
          console.log('Request canceled', e.message);
          return;
        }

        if (e.response?.data) {
          let errMsg = e.response.data.error.toString();
          console.error(`${e} ${errMsg}`);

          if (errMsg.toLowerCase().includes("token was invalid")) {
            clearInterval(this.intervalHandle);
            await this.$router.push('/logout');
          }
        } else {
          console.error(e);
        }

      }
    },

    populateChart(chartRef, monthlyData) {
      if (!this.$refs[chartRef]) return;

      let utcDateString = this.statistics.date;
      let utcDate = new Date(utcDateString);
      let month = utcDate.getUTCMonth();

      let chart = {
        data: {
          labels: [],
          datasets: [
            {
              data: [],
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
          maintainAspectRatio: false,
        }
      };

      for (let i = 0; i < monthlyData.length; i++) {
        chart.data.labels.push(`${month}/${i}`);
        chart.data.datasets[0].data.push(monthlyData[i]);
      }

      this.$refs[chartRef].renderChart(chart.data, chart.options);
    },

    remainingCaptures() {
      return this.maxCaptures > 0 ? Math.round((this.maxCaptures - this.captures) / this.maxCaptures) : -1;
    },

    averageArray(data) {
      let sum = data.reduce((a, b) => a + b, 0);

      if (data.length <= 0) return 0;

      return parseFloat((sum / data.length).toFixed(2));
    },

    async buildRequest() {
      try {

        let token = this.$store.getters["auth/get_token"];
        let subResponse = await this.$axios.post("/api/v1/apikey/list", {token: token}, {cancelToken: cancelSource.token});

        let apiKeys = subResponse.data["apiKeys"];

        if (apiKeys.length > 0) {

          let apiKey = apiKeys[0].apiKey;
          let apiUrl = process.env.apiUrl;

          if (!this.requestBuilder.url) {
            this.requestBuilderAlert = "A url must be provided in order to build a request.";
            this.requestBuilderAlertWarning = true;
            return;
          }

          if (!this.requestBuilder.resolution) {
            this.requestBuilderAlert = "A resolution must be provided in order to build a request.";
            this.requestBuilderAlertWarning = true;
            return;
          }

          let paramValues = {};
          paramValues.apiKey = apiKey;
          paramValues.url = this.requestBuilder.url;
          paramValues.size = this.requestBuilder.resolution;

          if (this.requestBuilder.scale)
            paramValues.scale = this.requestBuilder.scale;

          if (this.requestBuilder.timeout)
            paramValues.timeout = this.requestBuilder.timeout;

          if (this.requestBuilder.delay)
            paramValues.delay = this.requestBuilder.delay;

          if (this.requestBuilder.userAgent)
            paramValues.userAgent = this.requestBuilder.userAgent;

          if (this.requestBuilder.crop)
            paramValues.crop = this.requestBuilder.crop;

          if (this.requestBuilder.css)
            paramValues.css = this.requestBuilder.css;

          if (this.requestBuilder.script)
            paramValues.script = this.requestBuilder.script;

          const params = new URLSearchParams(paramValues);

          let request = `${apiUrl}/api/v1/capture?${params}`;

          Utils.copyToClipboard(request);
          this.requestBuilderAlert = "Request has been copied to your clipboard!";
          this.requestBuilderAlertWarning = false;

        } else {
          this.requestBuilderAlert = "You have no generated API Keys! Go generate one in the settings panel.";
          this.requestBuilderAlertWarning = true;
        }

      } catch (e) {

        if (this.$axios.isCancel(e)) {
          console.log('Request canceled', e.message);
          return;
        }

        console.error(e);

      }
    },

    resetRequest() {
      this.requestBuilder = {
        url: undefined,
        resolution: undefined,
        scale: undefined,
        timeout: undefined,
        delay: undefined,
        userAgent: undefined,
        selector: undefined,
        crop: true,
        css: undefined,
        javascript: undefined
      };
    }
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
