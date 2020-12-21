<template>
  <div class='leading-relaxed'>
	<a href="https://neutroncreative.com" class="flex flex-row items-center justify-center p-4 md:p-2 bg-black text-white">
		<span class="flex flex-row text-xs font-medium text-center items-center justify-center">
			<!-- If exciting -->
			<!-- <span class="flex mr-2 md:hidden">🎉</span> -->
			Capture is provided free in our mission to make the world open-source.
			<!-- If exciting -->
			<!-- <span class="flex md:hidden ml-2">🎉</span> -->
		</span>
		<span class="hidden md:flex mx-4 text-xs text-gray-400">|</span>
		<span class="hidden md:flex text-xs font-semibold">Learn more 👉</span>
	</a>
	<nav style="backdrop-filter:saturate(180%) blur(5px); background:rgba(5,5,5,.85); border-bottom: solid 1px #050505;" class="z-20 flex flex-row shadow-lg items-center justify-center w-full sticky top-0 left-0 right-0 mt-2 h-auto">
		<div class="flex flex-row items-center justify-center px-10 py-6 w-full max-w-6xl text-white h-auto">
			<n-link to="/" class="font-extrabold text-lg mr-4 brand" style="letter-spacing:.25px;">Capture</n-link>
			<div class="flex flex-row lg:hidden px-4 py-1 text-sm text-black bg-white rounded ml-auto">Open menu</div>
			<div class="hidden lg:flex items-center justify-center nav-links ml-auto text-sm font-medium text-gray-300 space-x-12">
				<n-link class="brand" to="/">Overview</n-link>
				<a href="https://neutroncreative.com/community" class="brand">Community</a>
				<n-link class="brand" to="/pricing">Pricing</n-link>
				<a class="brand" href="https://app.capture.neutron.so">Login</a>
				<a href="https://app.capture.neutron.so/create-account" style="font-size:15px; margin-left:4em;" class="text-black font-semibold bg-white rounded px-8 py-3 no-hover hover:bg-gray-200">
					Get started
				</a>
			</div>
		</div>
	</nav>
    <Nuxt />
	<a class="hidden lg:flex fixed z-10" style="left:20px;bottom:20px;box-shadow:0 5px 15px rgba(0,0,0,.25);" href="https://www.producthunt.com/posts/capture-by-neutron-creative?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-capture-by-neutron-creative" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=278025&theme=light" alt="Capture by Neutron Creative - Web screenshots via API, made easy & open-source. | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
	<footer class="bg-black w-full flex flex-col items-center justify-center text-white">
		<div class="flex flex-col items-center justify-center w-full max-w-6xl px-8 py-8 pb-20 text-center lg:text-left">
			<div class="flex flex-col space-y-4 lg:space-y-0 lg:flex-row w-full border border-l-0 border-t-0 border-r-0 border-gray-900 pb-16 mb-8">
				<div class="flex flex-col items-center lg:items-start space-y-2 justify-start w-full lg:w-1/3">
					<n-link class="font-bold brand text-lg" to="/">Capture</n-link>
					<p class="text-sm text-gray-300">The better free screenshot API</p>
				</div>
				<div class="flex flex-col lg:flex-row items-center justify-center w-full lg:w-2/3">
					<div class="flex flex-col mb-4 lg:mb-0 w-full lg:w-1/3 items-center lg:items-start justify-center">
						<span class="uppercase tracking-wider text-sm font-semibold mb-4">Product</span>
						<div class="nav-links text-sm text-gray-200 space-y-4 flex flex-col items-center lg:items-start justify-center w-full">
							<a href="#">Overview</a>
							<a href="#">Pricing</a>
							<a href="#">Github</a>
							<a href="#">Documentation</a>
						</div>
					</div>
					<div class="flex flex-col mb-4 lg:mb-0 w-full lg:w-1/3 items-center lg:items-start justify-center">
						<span class="uppercase tracking-wider text-sm font-semibold mb-4">Application</span>
						<div class="nav-links text-sm text-gray-200 space-y-4 flex flex-col items-center lg:items-start justify-center w-full">
							<a href="#">Login</a>
							<a href="#">Get started</a>
							<a href="#">Contact support</a>
							<a href="#">Account</a>
						</div>
					</div>
					<div class="flex flex-col mb-4 lg:mb-0 w-full lg:w-1/3 items-center lg:items-start justify-center">
						<span class="uppercase tracking-wider text-sm font-semibold mb-4">Related</span>
						<div class="nav-links text-sm text-gray-200 space-y-4 flex flex-col items-center lg:items-start justify-center w-full">
							<a href="#">Singlelink</a>
							<a href="#">Neutron</a>
							<a href="#">WordPress Together</a>
							<a href="#">Beautiful FOSS</a>
						</div>
					</div>
				</div>
			</div>
			<div class="flex flex-col lg:flex-row w-full items-center justify-center">
				<div class="flex flex-col space-y-2 items-start justify-center text-xs">
					<div class="flex flex-col lg:flex-row items-center justify-center space-x-4 w-full lg:w-auto space-y-2 lg:space-y-0">
						<span>© 2020 Neutron Creative Inc.</span>
						<a href="#">Privacy Policy</a>
						<a href="#">Terms of Service</a>
					</div>
					<span class="text-gray-600">All product and company names are trademarks or registered trademarks of their respective holders.</span>
				</div>
				<div class="flex flex-row items-center justify-center space-x-4 ml-auto icon w-full lg:w-auto my-4 lg:my-0">
					<a href="https://github.com/Neutron-Creative/Capture" class="w-4 h-auto">
						<img src="https://neutroncreative.com/github-mark.svg"/>
					</a>
					<a href="https://discord.gg/3pBM4Px" class="w-4 h-auto">
						<img src="https://neutroncreative.com/discord-mark.svg"/>
					</a>
					<a href="https://twitter.com/neutroncreative" class="w-4 h-auto">
						<img src="https://neutroncreative.com/twitter-mark.svg"/>
					</a>
				</div>
			</div>
		</div>
	</footer>

	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
  
  </div>
</template>

<style>
.nav-links *:hover {
	color:#FFF;
}

.nav-links .no-hover:hover {
	color: #000 !important;
}

.icon a {
	filter: invert(1);
	opacity: .7;
}

.icon a:hover {
	opacity:1;
}

.bg-black { background: #050505 !important; }

@import url('https://rsms.me/inter/inter.css');

.brand {
	font-family:
		'Poppins',
		Poppins,
		'POPPINS',
		'Inter',
		'Source Sans Pro',
		-apple-system,
		BlinkMacSystemFont,
		'Segoe UI',
		Roboto,
		'Helvetica Neue',
		Arial,
		sans-serif !important;
}
html {
  background:#050505;
  font-family:
  	'Inter',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
/*@supports (font-variation-settings: normal) {
	html {
		font-family:
		'Inter var',
		'Source Sans Pro',
		-apple-system,
		BlinkMacSystemFont,
		'Segoe UI',
		Roboto,
		'Helvetica Neue',
		Arial,
		sans-serif;
	}
}*/
</style>
