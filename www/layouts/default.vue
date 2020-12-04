<template>
  <div class='leading-relaxed'>
	<nav style="backdrop-filter:saturate(180%) blur(5px); background:rgba(5,5,5,.85); border-bottom: solid 1px #050505;" class="z-20 flex flex-row shadow-lg items-center justify-center w-full sticky top-0 left-0 right-0 mt-12 h-auto">
		<div class="flex flex-row items-center justify-center px-10 py-6 w-full max-w-6xl text-white h-auto">
			<n-link to="/" class="font-extrabold text-lg mr-4 brand" style="letter-spacing:.25px;">Capture</n-link>
			<div class="nav-links ml-auto text-sm font-medium text-gray-300 space-x-12">
				<n-link class="brand" to="/">Overview</n-link>
				<n-link class="brand" to="/pricing">Pricing</n-link>
				<a class="brand" href="https://app.capture.neutron.so">Login</a>
				<a href="https://app.capture.neutron.so/create-account" style="font-size:15px; margin-left:4em;" class="text-black font-semibold bg-white rounded px-8 py-3 no-hover hover:bg-gray-200">
					Get started
				</a>
			</div>
		</div>
	</nav>
    <Nuxt />
	<footer class="bg-black w-full flex flex-col items-center justify-center text-white">
		<div class="flex flex-col items-center justify-center w-full max-w-6xl px-8 py-8">
			<div class="flex flex-col lg:flex-row w-full border border-l-0 border-t-0 border-r-0 border-gray-900 pb-16 mb-8">
				<div class="flex flex-col items-start justify-start w-full lg:w-1/3">
					<n-link class="font-bold brand text-lg" to="/">Capture</n-link>
					<p class="text-sm text-gray-300">The better free screenshot API</p>
				</div>
				<div class="flex flex-col lg:flex-row items-center justify-center w-full lg:w-2/3">
					<div class="flex flex-col mb-4 lg:mb-0 w-full lg:w-1/3 items-start justify-center">
						<span class="uppercase tracking-wider text-sm font-semibold mb-4">Product</span>
						<div class="nav-links text-sm text-gray-200 space-y-4 flex flex-col items-start justify-center w-full">
							<a href="#">Overview</a>
							<a href="#">Pricing</a>
							<a href="#">Github</a>
							<a href="#">Documentation</a>
						</div>
					</div>
					<div class="flex flex-col mb-4 lg:mb-0 w-full lg:w-1/3 items-start justify-center">
						<span class="uppercase tracking-wider text-sm font-semibold mb-4">Application</span>
						<div class="nav-links text-sm text-gray-200 space-y-4 flex flex-col items-start justify-center w-full">
							<a href="#">Login</a>
							<a href="#">Get started</a>
							<a href="#">Contact support</a>
							<a href="#">Account</a>
						</div>
					</div>
					<div class="flex flex-col mb-4 lg:mb-0 w-full lg:w-1/3 items-start justify-center">
						<span class="uppercase tracking-wider text-sm font-semibold mb-4">Related</span>
						<div class="nav-links text-sm text-gray-200 space-y-4 flex flex-col items-start justify-center w-full">
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
					<div class="flex flex-col lg:flex-row items-center justify-center space-x-4">
						<span>© 2020 Neutron Creative Inc.</span>
						<a href="#">Privacy Policy</a>
						<a href="#">Terms of Service</a>
					</div>
					<span class="text-gray-600">All product and company names are trademarks or registered trademarks of their respective holders.</span>
				</div>
				<div class="flex flex-row items-center justify-center space-x-4 ml-auto icon">
					<a href="#" class="w-4 h-auto">
						<img src="https://neutroncreative.com/github-mark.svg"/>
					</a>
					<a href="#" class="w-4 h-auto">
						<img src="https://neutroncreative.com/discord-mark.svg"/>
					</a>
					<a href="#" class="w-4 h-auto">
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
