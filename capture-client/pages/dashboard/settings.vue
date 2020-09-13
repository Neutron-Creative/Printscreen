<template>
  <div class="flex flex-col w-full h-full">

    <!-- region Account settings -->
    <div
      class="flex flex-row justify-center items-center bg-white border border-gray-200 border-l-0 border-t-0 border-r-0 w-full p-6 pt-4 pb-4">
      <span class="mr-auto text-xl font-semibold">Account settings</span>
    </div>

    <!--    region Alert Section-->
    <div v-show="this.alerts.account && this.alerts.accountWarning" class="flex flex-row p-2 mt-4 mb-2 ml-8 mr-8 bg-orange-200 text-orange-600 rounded justify-center items-center
      text-sm border border-orange-300 shadow-sm ">
      <img style="width: 12px;" src="/caution.svg" alt="error box image">
      <div class="flex flex-col ml-2">
        {{ this.alerts.account }}
      </div>
    </div>

    <div v-show="this.alerts.account&& !this.alerts.accountWarning" class="flex flex-row p-2 mt-4 mb-2 ml-8 mr-8 bg-green-200 text-green-600 rounded justify-center items-center
      text-sm border border-green-300 shadow-sm ">
      <div class="flex flex-col ml-2">
        {{ this.alerts.account }}
      </div>
    </div>
    <!--    endregion-->

    <div class="p-6 border border-gray-200 border-t-0 border-l-0 border-r-0 border-b-0 w-full flex flex-col">
      <div class="flex flex-row w-full">
        <div class="flex flex-col w-full p-2">
          <label class="mb-2 text-gray-700 text-sm">Full Name</label>
          <input class="p-2 rounded border border-gray-200 text-sm" type="text" placeholder="e.g. Jane Doe"
                 v-model.trim="details.fullName" @input="dirty.account = true"/>
        </div>
        <div class="flex flex-col w-full p-2">
          <label class="mb-2 text-gray-700 text-sm">Company Name</label>
          <input class="p-2 rounded border border-gray-200 text-sm" type="text"
                 placeholder="e.g. Neutron Creative Inc." v-model.trim="details.companyName"
                 @input="dirty.account = true"/>
        </div>
        <div class="flex flex-col w-full p-2">
          <label class="mb-2 text-gray-700 text-sm">Phone Number</label>
          <input class="p-2 rounded border border-gray-200 text-sm" type="tel" placeholder="e.g. (919) 653-0790"
                 v-model.trim="details.phone" @input="dirty.account = true"/>
        </div>
      </div>
      <div class="flex flex-row w-full">
        <div class="flex flex-col w-full lg:w-2/4 p-2">
          <label class="mb-2 text-gray-700 text-sm ">Address</label>
          <input class="p-2 rounded border border-gray-200 text-sm" type="text" placeholder="e.g. 901 Sheldon Drive"
                 v-model.trim="details.address" @input="dirty.account = true"/>
        </div>
        <div class="flex flex-col w-full lg:w-1/4 p-2">
          <label class="mb-2 text-gray-700 text-sm">City</label>
          <input class="p-2 rounded border border-gray-200 text-sm" type="text" placeholder="e.g. Cary"
                 v-model.trim="details.city" @input="dirty.account = true"/>
        </div>
        <div class="flex flex-col w-full lg:w-1/4 p-2">
          <label class="mb-2 text-gray-700 text-sm">Zip Code</label>
          <input class="p-2 rounded border border-gray-200 text-sm" type="number" placeholder="e.g. 27312"
                 v-model.trim="details.zipcode" @input="dirty.account = true"/>
        </div>
        <div class="flex flex-col w-full lg:w-1/4 p-2">
          <label class="mb-2 text-gray-700 text-sm">Country</label>
          <select class="p-2 rounded border border-gray-200 text-sm" v-model="details.country">
            <option value="United States of America">United States of America</option>
            <option value="Afganistan">Afghanistan</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antigua & Barbuda">Antigua & Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bermuda">Bermuda</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bonaire">Bonaire</option>
            <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
            <option value="Botswana">Botswana</option>
            <option value="Brazil">Brazil</option>
            <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
            <option value="Brunei">Brunei</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Canary Islands">Canary Islands</option>
            <option value="Cape Verde">Cape Verde</option>
            <option value="Cayman Islands">Cayman Islands</option>
            <option value="Central African Republic">Central African Republic</option>
            <option value="Chad">Chad</option>
            <option value="Channel Islands">Channel Islands</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Christmas Island">Christmas Island</option>
            <option value="Cocos Island">Cocos Island</option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo">Congo</option>
            <option value="Cook Islands">Cook Islands</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Cote DIvoire">Cote DIvoire</option>
            <option value="Croatia">Croatia</option>
            <option value="Cuba">Cuba</option>
            <option value="Curaco">Curacao</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="East Timor">East Timor</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Falkland Islands">Falkland Islands</option>
            <option value="Faroe Islands">Faroe Islands</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="French Guiana">French Guiana</option>
            <option value="French Polynesia">French Polynesia</option>
            <option value="French Southern Ter">French Southern Ter</option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Gibraltar">Gibraltar</option>
            <option value="Great Britain">Great Britain</option>
            <option value="Greece">Greece</option>
            <option value="Greenland">Greenland</option>
            <option value="Grenada">Grenada</option>
            <option value="Guadeloupe">Guadeloupe</option>
            <option value="Guam">Guam</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guinea">Guinea</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Honduras">Honduras</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="Indonesia">Indonesia</option>
            <option value="India">India</option>
            <option value="Iran">Iran</option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Isle of Man">Isle of Man</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Korea North">Korea North</option>
            <option value="Korea Sout">Korea South</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Laos">Laos</option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libya">Libya</option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Macau">Macau</option>
            <option value="Macedonia">Macedonia</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Malawi">Malawi</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Martinique">Martinique</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mayotte">Mayotte</option>
            <option value="Mexico">Mexico</option>
            <option value="Midway Islands">Midway Islands</option>
            <option value="Moldova">Moldova</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Nambia">Nambia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherland Antilles">Netherland Antilles</option>
            <option value="Netherlands">Netherlands (Holland, Europe)</option>
            <option value="Nevis">Nevis</option>
            <option value="New Caledonia">New Caledonia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niue">Niue</option>
            <option value="Norfolk Island">Norfolk Island</option>
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Palau Island">Palau Island</option>
            <option value="Palestine">Palestine</option>
            <option value="Panama">Panama</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Phillipines">Philippines</option>
            <option value="Pitcairn Island">Pitcairn Island</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Qatar">Qatar</option>
            <option value="Republic of Montenegro">Republic of Montenegro</option>
            <option value="Republic of Serbia">Republic of Serbia</option>
            <option value="Reunion">Reunion</option>
            <option value="Romania">Romania</option>
            <option value="Russia">Russia</option>
            <option value="Rwanda">Rwanda</option>
            <option value="St Barthelemy">St Barthelemy</option>
            <option value="St Eustatius">St Eustatius</option>
            <option value="St Helena">St Helena</option>
            <option value="St Kitts-Nevis">St Kitts-Nevis</option>
            <option value="St Lucia">St Lucia</option>
            <option value="St Maarten">St Maarten</option>
            <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
            <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
            <option value="Saipan">Saipan</option>
            <option value="Samoa">Samoa</option>
            <option value="Samoa American">Samoa American</option>
            <option value="San Marino">San Marino</option>
            <option value="Sao Tome & Principe">Sao Tome & Principe</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="Singapore">Singapore</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa">South Africa</option>
            <option value="Spain">Spain</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Sudan">Sudan</option>
            <option value="Suriname">Suriname</option>
            <option value="Swaziland">Swaziland</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syria">Syria</option>
            <option value="Tahiti">Tahiti</option>
            <option value="Taiwan">Taiwan</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Thailand">Thailand</option>
            <option value="Togo">Togo</option>
            <option value="Tokelau">Tokelau</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad & Tobago">Trinidad & Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Turks & Caicos Is">Turks & Caicos Is</option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Uganda">Uganda</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Erimates">United Arab Emirates</option>
            <option value="United States of America">United States of America</option>
            <option value="Uraguay">Uruguay</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Vatican City State">Vatican City State</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
            <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
            <option value="Wake Island">Wake Island</option>
            <option value="Wallis & Futana Is">Wallis & Futana Is</option>
            <option value="Yemen">Yemen</option>
            <option value="Zaire">Zaire</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
          </select>
        </div>
      </div>

      <div class="flex flex-col w-full p-2">
        <label class="mb-2 text-gray-700 text-sm">Change Email Address</label>
        <input class="p-2 rounded border border-gray-200 text-sm" type="text"
               placeholder="e.g. jane@neutroncreative.com" v-model.trim="details.email" @input="dirty.account = true"/>
      </div>

      <button :disabled="!dirty.account" type="button"
              class="rounded shadow m-2 mt-4 p-3 pr-4 pl-4 bg-indigo-600 hover:bg-indigo-500 font-medium text-sm uppercase tracking-wide text-white mr-right"
              @click="saveDetails">
        Save Changes
      </button>
    </div>
    <!-- endregion -->

    <!-- region API Keys settings -->
    <div
      class="flex flex-row justify-center items-center bg-white border border-gray-200 border-l-0 border-t-0 border-r-0 w-full p-6 pt-4 pb-4">
      <span class="mr-auto text-xl font-semibold">API Keys</span>
    </div>

    <!--    region Alert Section-->
    <div v-show="this.alerts.apiKey && this.alerts.apiKeyWarning" class="flex flex-row p-2 mt-4 mb-2 ml-8 mr-8 bg-orange-200 text-orange-600 rounded justify-center items-center
      text-sm border border-orange-300 shadow-sm ">
      <img style="width: 12px;" src="/caution.svg" alt="error box image">
      <div class="flex flex-col ml-2">
        {{ this.alerts.account }}
      </div>
    </div>

    <div v-show="this.alerts.apiKey && !this.alerts.apiKeyWarning" class="flex flex-row p-2 mt-4 mb-2 ml-8 mr-8 bg-green-200 text-green-600 rounded justify-center items-center
      text-sm border border-green-300 shadow-sm ">
      <div class="flex flex-col ml-2">
        {{ this.alerts.account }}
      </div>
    </div>
    <!--    endregion-->

    <div class="p-6 border border-gray-200 border-t-0 border-l-0 border-r-0 border-b-0 w-full flex flex-col">
      <button type="button"
              class="rounded shadow m-2 mt-4 p-3 pr-4 pl-4 bg-indigo-600 hover:bg-indigo-500 font-medium text-sm uppercase tracking-wide text-white mr-right"
              @click="showKeys = !showKeys; ">
        {{ showKeys ? "Hide" : "Show" }} Keys
      </button>

      <div v-show="showKeys" id="api-keys">
        <ul id="api-keys-list" class="flex flex-col w-full">
          <li class="flex flex-col w-full p-1" v-for="key in apiKeys">
            <div class="flex flex-row p-2 rounded border border-gray-200 text-lg" type="text">
              <span class="center mt-auto mb-auto mr-auto">{{ key }}</span>
              <button
                class="rounded shadow m-1 mt-2 p-3 pr-4 pl-4 bg-indigo-600 hover:bg-indigo-500 font-medium text-sm uppercase tracking-wide text-white mr-right ml-auto"
                @click="deleteApiKey(key)">
                Delete
              </button>
            </div>
          </li>
        </ul>
      </div>

      <button v-show="showKeys"
              type="button"
              class="rounded shadow m-2 mt-4 p-3 pr-4 pl-4 bg-indigo-600 hover:bg-indigo-500 font-medium text-sm uppercase tracking-wide text-white mr-right"
              @click="generateApiKey">
        Generate API Key
      </button>
    </div>
    <!-- endregion -->

    <!-- region Subscription plan -->
    <div
      class="flex flex-row justify-center items-center bg-white border border-gray-200 border-l-0 border-t-0 border-r-0 w-full p-6 pt-4 pb-4">
      <span class="mr-auto text-xl font-semibold">Subscription plan</span>
    </div>

    <!--    region Alert Section-->
    <div v-show="this.alerts.subscription && this.alerts.subscriptionWarning" class="flex flex-row p-2 mt-4 mb-2 ml-8 mr-8 bg-orange-200 text-orange-600 rounded justify-center items-center
      text-sm border border-orange-300 shadow-sm ">
      <img style="width: 12px;" src="/caution.svg" alt="error box image">
      <div class="flex flex-col ml-2">
        {{ this.alerts.subscription }}
      </div>
    </div>

    <div v-show="this.alerts.subscription && !this.alerts.subscriptionWarning" class="flex flex-row p-2 mt-4 mb-2 ml-8 mr-8 bg-green-200 text-green-600 rounded justify-center items-center
      text-sm border border-green-300 shadow-sm ">
      <div class="flex flex-col ml-2">
        {{ this.alerts.subscription }}
      </div>
    </div>
    <!--    endregion-->

    <div class="p-6 border border-gray-200 border-t-0 border-l-0 border-r-0 border-b-0 w-full flex flex-col">
      <div class="flex flex-row w-full">
        <div class="flex flex-col w-full p-2">
          <label class="mb-2 text-gray-700 text-sm">Current Plan</label>
          <div v-if="!paymentInfo.last4 && selectedPlan.toLowerCase().includes('free')" class="flex flex-row p-2 mt-4 mb-2 ml-8 mr-8 bg-orange-200 text-orange-600 rounded justify-center items-center
      text-sm border border-orange-300 shadow-sm ">
            <img style="width: 12px;" src="/caution.svg" alt="error box image">
            <div class="flex flex-col ml-2">
              You cannot change your current subscription plan without a valid payment method!
            </div>
          </div>
          <select class="p-2 rounded border border-gray-200 text-sm"
                  :disabled="!paymentInfo.last4 && selectedPlan.toLowerCase().includes('free')"
                  @input="selectedPlan = $event.target.options[$event.target.selectedIndex].value; dirty.subscription = true"
                  ref="currentPlanSelect">
            <option>Free ($0/Month) - Up to 100 captures</option>
            <option>Basic ($5/Month) - Up to 1000 captures</option>
            <option>Business ($15/Month) - Up to 10,000 captures</option>
            <option>Enterprise (Starting at $35/Month) - 100,000 Captures, extras are .0035/capture</option>
          </select>

          <span v-show="dirty.subscription"
                class="p-2 mt-6 rounded border bg-orange-200 border-orange-400 border-orange-200 w-full">
            You will be billed <b>immediately</b> if you are starting a new subscription.
            If you are downgrading, your current subscription will last until the end of the billing cycle.
            If you are upgrading, you will be prorated and billed for the difference at the end of the cycle.
          </span>

          <br>
          <div>
            <span v-if="nextPaymentDate && !cancelAtPeriodEnd"
                  class="text-gray-600 text-sm">Next payment on {{ this.nextPaymentDate }}</span>
            <span v-if="nextPaymentDate && cancelAtPeriodEnd" class="text-gray-600 text-sm">
              Cycle ends on {{ this.nextPaymentDate }}<br>
              Subscription ending
          </span>
          </div>

        </div>
      </div>

      <button :disabled="!dirty.subscription" type="button"
              class="rounded shadow m-2 mt-4 p-3 pr-4 pl-4 bg-indigo-600 hover:bg-indigo-500 font-medium text-sm uppercase tracking-wide text-white mr-right"
              @click="updateSubscription">
        Update Subscription
      </button>
    </div>
    <!--    endregion-->

    <!-- region Your payment information -->
    <div
      class="flex flex-row justify-center items-center bg-white border border-gray-200 border-l-0 border-t-0 border-r-0 w-full p-6 pt-4 pb-4">
      <span class="mr-auto text-xl font-semibold">Your payment information</span>
    </div>

    <!--    region Alert Section-->
    <div v-show="this.alerts.payment && this.alerts.paymentWarning" class="flex flex-row p-2 mt-4 mb-2 ml-8 mr-8 bg-orange-200 text-orange-600 rounded justify-center items-center
      text-sm border border-orange-300 shadow-sm ">
      <img style="width: 12px;" src="/caution.svg" alt="error box image">
      <div class="flex flex-col ml-2">
        {{ this.alerts.payment }}
      </div>
    </div>

    <div v-show="this.alerts.payment && !this.alerts.paymentWarning" class="flex flex-row p-2 mt-4 mb-2 ml-8 mr-8 bg-green-200 text-green-600 rounded justify-center items-center
      text-sm border border-green-300 shadow-sm ">
      <div class="flex flex-col ml-2">
        {{ this.alerts.payment }}
      </div>
    </div>
    <!--    endregion-->

    <div class="p-6 border border-gray-200 border-t-0 border-l-0 border-r-0 border-b-0 w-full flex flex-col">
      <div class="flex flex-row w-full">
        <div class="flex flex-col w-full p-2">
          <label class="mb-2 text-gray-700 text-sm">Card Number (No spaces or hyphens)</label>
          <input class="p-2 rounded border border-gray-200 text-sm" type="text" placeholder="e.g. 4242 4242 4242 4242"
                 v-model.trim="creditCard.number" @input="dirty.payment = true"/>
        </div>
        <div class="flex flex-col w-full p-2">
          <label class="mb-2 text-gray-700 text-sm">Expiration Date (MM/YY)</label>
          <input class="p-2 rounded border border-gray-200 text-sm" type="text" placeholder="e.g. MM/YY"
                 v-model.trim="creditCard.expiration" @input="dirty.payment = true"/>
        </div>
        <div class="flex flex-col w-full p-2">
          <label class="mb-2 text-gray-700 text-sm">Security Code (CVC)</label>
          <input class="p-2 rounded border border-gray-200 text-sm" type="number" placeholder="e.g. 841"
                 v-model.number="creditCard.cvc" @input="dirty.payment = true"/>
        </div>
      </div>

      <div class="flex flex-row w-full">

        <div class="flex flex-col w-full p-2" v-if="paymentInfo.last4">
          <label class="mb-2 text-gray-700 text-sm">Saved Card</label>
          <div class="p-4 rounded border border-gray-400 border-darken-4">
            <span class="p-2 rounded text-lg" type="text">
              {{ paymentInfo.brand.toUpperCase() }} <span
              class="p-2 rounded text-lg float-right">...{{ paymentInfo.last4 }}</span>
            </span>
            <br>
            <span class="p-2 rounded text-lg" type="text">
            Exp: {{ paymentInfo.exp_month }}/{{ paymentInfo.exp_year }}
            </span>
            <br>
            <button type="button"
                    class="rounded shadow m-2 mt-4 p-3 pr-4 pl-4 bg-indigo-600 hover:bg-indigo-500 font-medium text-sm uppercase tracking-wide text-white mr-right float-right"
                    @click="deleteCard">
              Delete
            </button>
          </div>
        </div>


        <div class="flex flex-col w-full p-2" v-if="!paymentInfo.last4">
          <label class="mb-2 text-gray-700 text-sm">No payment information saved</label>
        </div>
        <div class="flex flex-col w-full p-2">
        </div>
        <div class="flex flex-col w-full p-2">
        </div>

      </div>

      <button :disabled="!dirty.payment" type="button"
              class="rounded shadow m-2 mt-4 p-3 pr-4 pl-4 bg-indigo-600 hover:bg-indigo-500 font-medium text-sm uppercase tracking-wide text-white mr-right"
              @click="updateCard">
        Update Payment Information
      </button>
    </div>
    <!--    endregion-->

    <!-- region Sensitive-->
    <div
      class="flex flex-row justify-center items-center bg-white border border-gray-200 border-l-0 border-t-0 border-r-0 w-full p-6 pt-4 pb-4">
      <span class="mr-auto text-xl font-semibold">Change password</span>
    </div>

    <!--    region Alert Section-->
    <div v-show="this.alerts.sensitive && this.alerts.sensitiveWarning" class="flex flex-row p-2 mt-4 mb-2 ml-8 mr-8 bg-orange-200 text-orange-600 rounded justify-center items-center
      text-sm border border-orange-300 shadow-sm ">
      <img style="width: 12px;" src="/caution.svg" alt="error box image">
      <div class="flex flex-col ml-2">
        {{ this.alerts.sensitive }}
      </div>
    </div>

    <div v-show="this.alerts.sensitive && !this.alerts.sensitiveWarning" class="flex flex-row p-2 mt-4 mb-2 ml-8 mr-8 bg-green-200 text-green-600 rounded justify-center items-center
      text-sm border border-green-300 shadow-sm ">
      <div class="flex flex-col ml-2">
        {{ this.alerts.sensitive }}
      </div>
    </div>
    <!--    endregion-->

    <div class="p-6 border border-gray-200 border-t-0 border-l-0 border-r-0 border-b-0 w-full flex flex-col">
      <div class="flex flex-col w-full p-2">
        <label class="mb-2 text-gray-700 text-sm">Change Password</label>
        <input class="p-2 rounded border border-gray-200 text-sm" type="password"
               placeholder="e.g. Your strong password" v-model="sensitive.newPassword" @input="dirty.password = true"/>
      </div>
      <div class="flex flex-col w-full p-2">
        <label class="mb-2 text-gray-700 text-sm">Current Password</label>
        <input class="p-2 rounded border border-gray-200 text-sm" type="password"
               placeholder="e.g. Your current password" v-model="sensitive.currentPassword"
               @input="dirty.password = true"/>
      </div>

      <button :disabled="!dirty.password" type="button"
              class="rounded shadow m-2 mt-4 p-3 pr-4 pl-4 bg-indigo-600 hover:bg-indigo-500 font-medium text-sm uppercase tracking-wide text-white mr-right"
              @click="updatePassword">
        Update Password
      </button>
    </div>
    <!-- endregion-->

    <!--    region Delete Account-->
    <div
      class="flex flex-row justify-center items-center bg-white border border-gray-200 border-l-0 border-t-0 border-r-0 w-full p-6 pt-4 pb-4">
      <span class="mr-auto text-xl font-semibold">Other</span>
    </div>

    <div class="p-6 border border-gray-200 border-t-0 border-l-0 border-r-0 border-b-0 w-full flex flex-col">
      <button type="button"
              class="rounded shadow m-2 mt-4 p-3 pr-4 pl-4 bg-red-600 hover:bg-red-500 font-medium text-sm uppercase tracking-wide text-white mr-right"
              @click="deleteAccount">
        Delete Account
      </button>
    </div>
    <!--    endregion-->

  </div>
</template>

<script>
let cancelSource;

export default {
  name: 'DashboardSettings',
  layout: 'Dashboard',

  data() {
    return {
      // Subscription info
      nextPaymentDate: '',
      cancelAtPeriodEnd: false,

      // API Keys
      showKeys: false,
      apiKeys: [],

      // Sensitive information
      sensitive: {
        newPassword: '',
        currentPassword: '',
      },

      // Account details
      details: {
        fullName: '',
        email: '',
        companyName: '',
        phone: '',
        address: '',
        city: '',
        zipcode: '',
        country: ''
      },

      // Credit card info
      creditCard: {
        number: '',
        expiration: '',
        cvc: ''
      },

      // Payment info
      paymentInfo: {
        brand: "",
        checks: {},
        country: "",
        exp_month: 0,
        exp_year: 0,
        fingerprint: "",
        funding: "",
        generated_from: null,
        last4: "",
        networks: {
          available: [],
          preferred: null
        },
        three_d_secure_usage: {
          supported: undefined
        },
        wallet: null
      },

      // Current selected plan
      selectedPlan: 'Free ($0/Month) - Up to 100 captures',

      // Available subscriptions
      subscriptions: [],

      // Request Builder Alert
      alerts: {
        account: '',
        accountWarning: false,
        apiKey: '',
        apiKeyWarning: false,
        subscription: '',
        subscriptionWarning: false,
        sensitive: '',
        sensitiveWarning: false,
        payment: '',
        paymentWarning: false
      },

      // Dirtied forms that need to be saved
      dirty: {
        account: false,
        subscription: false,
        payment: false,
        password: false
      }

    };
  },

  created() {
    cancelSource = this.$axios.CancelToken.source();
  },

  mounted() {
    this.loadData();
  },

  beforeRouteLeave(to, from, next) {
    cancelSource?.cancel();
    next();
  },

  methods: {
    async loadData() {
      let token = this.$store.getters["auth/get_token"];

      try {

        let detailsResponse = await this.$axios.post("/api/v1/account/details", {token: token}, {cancelToken: cancelSource.token});
        let subInfo = await this.$axios.post("/api/v1/subscription/info", {token: token}, {cancelToken: cancelSource.token});
        let paymentInfo = await this.$axios.post("/api/v1/account/get-payment", {token: token}, {cancelToken: cancelSource.token});
        let subs = await this.$axios.post("/api/v1/subscriptions", {cancelToken: cancelSource.token});
        let keys = await this.$axios.post("/api/v1/apikey/list", {token: token}, {cancelToken: cancelSource.token});

        this.details.fullName = detailsResponse.data["fullName"];
        this.details.email = detailsResponse.data["email"];
        this.details.companyName = detailsResponse.data["companyName"];
        this.details.phone = detailsResponse.data["phone"];
        this.details.address = detailsResponse.data["address"];
        this.details.city = detailsResponse.data["city"];
        this.details.zipcode = detailsResponse.data["zipcode"];
        this.details.country = detailsResponse.data["country"];

        this.subscriptions = subs.data;
        this.subscriptions.unshift({
          id: null,
          nickname: "Free"
        });

        let subType = subInfo.data["type"];

        switch (subType.toLowerCase()) {
          case "free":
            this.$refs["currentPlanSelect"].selectedIndex = 0;
            break;
          case "basic":
            this.$refs["currentPlanSelect"].selectedIndex = 1;
            break;
          case "business":
            this.$refs["currentPlanSelect"].selectedIndex = 2;
            break;
          case "enterprise":
            this.$refs["currentPlanSelect"].selectedIndex = 3;
            break;
          default:
            this.$refs["currentPlanSelect"].selectedIndex = 0;
        }

        this.paymentInfo = paymentInfo.data;

        let nextPaymentTimestampInSeconds = subInfo.data["nextPayment"];

        if (nextPaymentTimestampInSeconds) {
          const date = new Date(nextPaymentTimestampInSeconds * 1000);
          this.nextPaymentDate = date.toLocaleDateString();
        } else {
          this.nextPaymentDate = '';
        }

        if (subInfo.data["cancelAtPeriodEnd"]) {
          this.cancelAtPeriodEnd = true;
        }


        this.apiKeys = keys.data.apiKeys ?? [];

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
            return this.$router.push('/logout');
          }
        } else {
          console.error(e);
        }

      }
    },

    async saveDetails() {
      let token = this.$store.getters["auth/get_token"];

      try {

        let payload = {};

        if (this.details.fullName) {
          payload.fullName = this.details.fullName;
        }

        if (this.details.email) {
          payload.email = this.details.email;
        }

        if (this.details.companyName) {
          payload.companyName = this.details.companyName;
        }

        if (this.details.phone) {
          payload.phone = this.details.phone;
        }

        if (this.details.address) {
          payload.address = this.details.address;
        }

        if (this.details.city) {
          payload.city = this.details.city;
        }

        if (this.details.zipcode) {
          payload.zipcode = this.details.zipcode;
        }

        if (this.details.country) {
          payload.country = this.details.country;
        }

        payload.token = token;

        await this.$axios.post("/api/v1/account/update", payload, {cancelToken: cancelSource.token});

        this.alerts.account = "Your account settings have been saved.";
        this.alerts.accountWarning = false;

        this.dirty.account = false;

      } catch (e) {

        if (this.$axios.isCancel(e)) {
          console.log('Request canceled', e.message);
          return;
        }

        if (e.response?.data) {
          let errMsg = e.response.data.error.toString();
          console.error(`${e} ${errMsg}`);

          this.alerts.account = `${e} ${errMsg}`;
          this.alerts.accountWarning = true;

          if (errMsg.toLowerCase().includes("token was invalid")) {
            clearInterval(this.intervalHandle);
            return this.$router.push('/logout');
          }
        } else {
          console.error(e);
        }
      }
    },

    async updateSubscription() {
      let token = this.$store.getters["auth/get_token"];

      try {

        let outputMessage = "";

        let payload = {
          token: token
        };

        if (this.selectedPlan) {

          let find = this.subscriptions.find(x => {
            return this.selectedPlan.toLowerCase().includes(x?.nickname.toLowerCase());
          });

          if (find) {
            payload.priceId = find.id;

            console.log(payload);

            await this.$axios.post("/api/v1/subscription/set", payload, {cancelToken: cancelSource.token});

            outputMessage += "Subscription successfully updated.";

          } else {
            this.alerts.subscription = `Couldn't find subscription!`;
            this.alerts.subscriptionWarning = true;

            return;
          }
        }

        this.alerts.subscription = `${outputMessage} Your account settings have been saved.`;
        this.alerts.subscriptionWarning = false;

        this.dirty.subscription = false;

      } catch (e) {
        if (this.$axios.isCancel(e)) {
          console.log('Request canceled', e.message);
          return;
        }

        if (e.response?.data) {
          let errMsg = e.response.data.error.toString();
          console.error(`${e} ${errMsg}`);

          this.alerts.subscription = `${e} ${errMsg}`;
          this.alerts.subscriptionWarning = true;

          if (errMsg.toLowerCase().includes("token was invalid")) {
            clearInterval(this.intervalHandle);
            return this.$router.push('/logout');
          }
        } else {
          console.error(e);
        }
      }
    },

    async updateCard() {
      let token = this.$store.getters["auth/get_token"];

      try {
        let payload = {
          creditCard: {},
          token: token
        };

        if (!this.creditCard.number ||
          !this.creditCard.expiration ||
          !this.creditCard.cvc) {

          this.alerts.payment = "You are missing information in one of the fields! Please fill it out correctly.";
          this.alerts.paymentWarning = true;

          return;
        }

        payload.creditCard.number = this.creditCard.number;
        payload.creditCard.expiration = this.creditCard.expiration;
        payload.creditCard.cvc = this.creditCard.cvc;

        await this.$axios.post("/api/v1/account/set-payment", payload, {cancelToken: cancelSource.token});

        this.alerts.payment = "Successfully updated your payment information!";
        this.alerts.paymentWarning = false;

        this.creditCard = {
          number: '',
          expiration: '',
          cvc: ''
        };

        await this.loadData();

      } catch (e) {
        if (this.$axios.isCancel(e)) {
          console.log('Request canceled', e.message);
          return;
        }

        if (e.response?.data) {
          let errMsg = e.response.data.error.toString();
          console.error(`${e} ${errMsg}`);

          this.alerts.payment = `${e} ${errMsg}. Make sure your payment information is correct.`;
          this.alerts.paymentWarning = true;

          if (errMsg.toLowerCase().includes("token was invalid")) {
            clearInterval(this.intervalHandle);
            return this.$router.push('/logout');
          }
        } else {
          console.error(e);
        }
      }

      this.dirty.payment = false;
    },

    async deleteCard() {
      let token = this.$store.getters["auth/get_token"];

      try {
        let payload = {
          token: token
        };

        await this.$axios.post("/api/v1/account/set-payment", payload, {cancelToken: cancelSource.token});

        this.alerts.payment = "Successfully deleted your payment information.";
        this.alerts.paymentWarning = false;

        await this.loadData();

      } catch (e) {
        if (this.$axios.isCancel(e)) {
          console.log('Request canceled', e.message);
          return;
        }

        if (e.response?.data) {
          let errMsg = e.response.data.error.toString();
          console.error(`${e} ${errMsg}`);

          this.alerts.payment = `${e} ${errMsg}`;
          this.alerts.paymentWarning = true;

          if (errMsg.toLowerCase().includes("token was invalid")) {
            clearInterval(this.intervalHandle);
            return this.$router.push('/logout');
          }
        } else {
          console.error(e);
        }
      }
    },

    async updatePassword() {
      let token = this.$store.getters["auth/get_token"];

      try {

        let payload = {
          token: token
        };

        if (this.sensitive.currentPassword) {
          payload.password = this.sensitive.currentPassword;

          if (this.sensitive.newPassword) {
            payload.newPassword = this.sensitive.newPassword;
          }
        }

        await this.$axios.post("/api/v1/account/update", payload, {cancelToken: cancelSource.token});

        this.alerts.sensitive = "Your password has been updated.";
        this.alerts.sensitiveWarning = false;

        this.dirty.account = false;

      } catch (e) {

        if (this.$axios.isCancel(e)) {
          console.log('Request canceled', e.message);
          return;
        }

        if (e.response?.data) {
          let errMsg = e.response.data.error.toString();
          console.error(`${e} ${errMsg}`);

          this.alerts.sensitive = `${e} ${errMsg}`;
          this.alerts.sensitiveWarning = true;

          if (errMsg.toLowerCase().includes("token was invalid")) {
            clearInterval(this.intervalHandle);
            return this.$router.push('/logout');
          }
        } else {
          console.error(e);
        }
      }

      this.dirty.password = false;
    },

    async deleteAccount() {
      if (confirm("Are you sure you want to delete your account? There is no undo!")) {
        let token = this.$store.getters["auth/get_token"];

        try {

          let payload = {
            token: token
          };

          await this.$axios.post("/api/v1/account/delete", payload, {cancelToken: cancelSource.token});
          await this.$router.push("/logout");

        } catch (e) {

          if (this.$axios.isCancel(e)) {
            console.log('Request canceled', e.message);
            return;
          }

          if (e.response?.data) {
            let errMsg = e.response.data.error.toString();
            console.error(`${e} ${errMsg}`);

            this.alerts.sensitive = `${e} ${errMsg}`;
            this.alerts.sensitiveWarning = true;

            if (errMsg.toLowerCase().includes("token was invalid")) {
              clearInterval(this.intervalHandle);
              return this.$router.push('/logout');
            }
          } else {
            console.error(e);
          }
        }

        this.dirty.password = false;
      }
    },

    async generateApiKey() {
      let token = this.$store.getters["auth/get_token"];

      try {
        let response = await this.$axios.post("/api/v1/apikey/regenerate", {token: token}, {cancelToken: cancelSource.token});

        if (this.apiKeys)
          this.apiKeys.push(response.data.apiKey);
        else
          this.apiKeys = [response.data.apiKey];

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
            return this.$router.push('/logout');
          }
        } else {
          console.error(e);
        }
      }
    },

    async deleteApiKey(key) {
      let token = this.$store.getters["auth/get_token"];

      try {

        let payload = {
          token: token
        };

        payload.apiKey = key;

        let response = await this.$axios.post("/api/v1/apikey/delete", payload, {cancelToken: cancelSource.token});

        this.apiKeys = this.apiKeys.filter(x => x !== key);

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
            return this.$router.push('/logout');
          }
        } else {
          console.error(e);
        }
      }
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

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

:disabled {
  @apply opacity-50;
  @apply cursor-not-allowed;
}
</style>
