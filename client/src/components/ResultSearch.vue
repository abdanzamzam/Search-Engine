<template>
  <div>
    <div
      class="
        flex
        w-full
        border-2
        rounded-lg
        hover:bg-gray-100
        border-gray-300 border-opacity-50
        p-5
        mb-3
        shadow-sm
      "
    >
      <div class="flex-grow">
        <a
          :href="data.link"
          class="text-gray-700 inline-flex items-center text-sm"
          >{{ data.displayed_link }}
        </a>
        <a :href="data.link">
          <h2 class="text-indigo-600 text-xl title-font font-semibold mb-1">
            {{ data.title }}
          </h2>
        </a>
        <p class="leading-relaxed font-normal text-sm">
          {{ data.snippet }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultSearch",
  props: ["data"],
};
</script>

<style></style>
