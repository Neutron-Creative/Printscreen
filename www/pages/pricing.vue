<template>
	<div>
		<section class="flex flex-col items-center justify-center py-16">
			<div class="w-full max-w-6xl px-16 space-y-4 text-white flex flex-col items-center justify-center text-center">
				<h1 class="font-extrabold text-6xl leading-tight">Pricing & plans</h1>
				<p class="mx-auto max-w-2xl text-gray-500 text-lg font-medium pb-4">
					Compare our features &amp; pricing to find the best plan for your business.
				</p>
				<p>How many screenshots do you need each month?</p>
				<input v-model="screenshots" type="range" min="1" max="20000" class="w-full max-w-xl"/>
				<p class="font-semibold text-2xl">{{ screenshots }} screenshots</p>
				<div class="flex flex-col lg:flex-row bg-gray-900 items-center justify-center w-full rounded-lg overflow-hidden" style="margin-top:2em">
					<div class="flex flex-col p-10 bg-gray-800 h-full w-full space-y-4 lg:w-1/2 justify-start text-left">
						<span>- Full API Access</span>
						<span>- HTML &amp; CSS Injection</span>
						<span>- Full page &amp; mobile screenshots</span>
						<span>- Access to query builder &amp; admin interface</span>
						<span>- Soft limits, only $.0035/additional screenshot</span>
						<span>- Up to {{ limit }} screenshots included</span>
					</div>
					<div class="flex flex-col p-10 h-full w-full space-y-5 lg:w-1/2 items-center justify-center text-center">
						<div class="flex flex-row items-end justify-center">
							<span class="text-5xl font-bold leading-tight">${{cost}}</span>
							<span class="text-2xl text-gray-400">/mo</span>
						</div>
						<a href="https://app.capture.neutron.so/create-account" class="bg-indigo-600 text-white rounded py-3 px-8 font-semibold hover:bg-indigo-500">Get started for free</a>
						<span class="text-gray-500">No credit card required.</span>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			screenshots: 100
		};
	},
	computed: {
		cost: function() {
			if(this.screenshots <= 100) return 0;
			if(this.screenshots <= 1000) return 5;
			if(this.screenshots <= 10000) return 15;
			if(this.screenshots <= 20000) return 35;
			return 0;
		},
		limit: function() {
			if(this.screenshots <= 100) return 100;
			if(this.screenshots <= 1000) return 1000;
			if(this.screenshots <= 10000) return 10000;
			if(this.screenshots <= 20000) return 100000;
			return 100;
		}
	}
};
</script>
