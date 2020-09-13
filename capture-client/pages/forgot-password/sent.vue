<template>
  <div class="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
    <section class="flex items-center justify-center flex-col mt-auto w-screen">
      <h1 class="font-semibold text-3xl mt-2">Reset email sent!</h1>
      <form class="w-11/12 max-w-sm mt-4 p-6 bg-white rounded-md shadow-md flex-col">
        <div class="mb-4 flex items-center justify-between">
          <div class="text-md leading-5">
            <span class="font-medium text-gray-600 hover:text-gray-700 focus:outline-none focus:underline">
              An email has been sent to that email with a password reset link. It should arrive shortly!
              <br>
              <br>
              <a class="text-indigo-600 hover:text-indigo-700" href="/">Go back</a>
            </span>
          </div>
        </div>
      </form>
    </section>
    <section class="flex text-center text-gray-600 text-sm mt-auto mb-4">All rights reserved.<br>Copyright
      ©{{ new Date().getFullYear() }}
      Neutron Creative Inc.
    </section>
  </div>
</template>
