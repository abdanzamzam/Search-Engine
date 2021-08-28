<template>
  <div>
    <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mb-4">
      Coronaviruses in Indonesia
    </h2>
    <p class="leading-relaxed mb-8">
      Indonesia Coronavirus update with statistics and graphs: total and new
      cases, deaths per day, mortality and recovery rates, current active cases
    </p>
    <div class="flex justify-between w-full mr-10">
      <div
        class="
          w-full
          inline-block
          mr-1
          shadow-lg
          rounded-lg
          bg-red-500
          tracking-widest
        "
      >
        <div class="py-5 px-5 text-white flex">
          <div class="mr-2">
            <i class="far text-4xl fa-sad-tear"> </i>
          </div>
          <div>
            <h1 class="text-xs font-normal">TOTAL POSITIVE</h1>
            <h1 class="text-md font-bold">{{ coronaViruses.positif }}</h1>
          </div>
        </div>
      </div>
      <div
        class="
          w-full
          inline-block
          ml-1
          shadow-lg
          rounded-lg
          bg-green-500
          tracking-widest
        "
      >
        <div class="py-5 px-5 text-white flex">
          <div class="mr-2">
            <i class="far text-4xl fa-smile-beam"> </i>
          </div>
          <div>
            <h1 class="text-xs font-normal">TOTAL CURE</h1>
            <h1 class="text-md font-bold">{{ coronaViruses.sembuh }}</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between w-full mr-10 mt-2">
      <div
        class="
          w-full
          inline-block
          mr-1
          shadow-lg
          rounded-lg
          bg-indigo-500
          tracking-widest
        "
      >
        <div class="py-5 px-5 text-white flex">
          <div class="mr-2">
            <i class="far text-4xl fa-sad-cry"> </i>
          </div>
          <div>
            <h1 class="text-xs font-normal">TOTAL DIED</h1>
            <h1 class="text-md font-bold">{{ coronaViruses.meninggal }}</h1>
          </div>
        </div>
      </div>
      <div
        class="
          w-full
          inline-block
          ml-1
          shadow-lg
          rounded-lg
          bg-yellow-500
          tracking-widest
        "
      >
        <div class="py-5 px-5 text-white flex">
          <div class="mr-2">
            <i class="far text-4xl fa-frown-open"></i>
          </div>
          <div>
            <h1 class="text-xs font-normal">TOTAL TREATED</h1>
            <h1 class="text-md font-bold">{{ coronaViruses.dirawat }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCorona",
  props: ["coronaViruses"],
};
</script>

<style></style>
