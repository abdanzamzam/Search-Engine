<template>
  <div>
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-20 mx-auto">
        <div class="flex flex-wrap -m-12">
          <div class="md:w-2/3 flex flex-col items-start pl-60 pr-10">
            <result-search
              v-for="data in searchResult"
              :key="data.id"
              :data="data"
            >
            </result-search>
          </div>
          <div class="md:w-1/3 flex flex-col items-start pr-10">
            <card-corona
              v-if="coronaViruses.length !== 0 && searchResult.length !== 0"
              :coronaViruses="coronaViruses"
            ></card-corona>
          </div>
        </div>
        <pagination
          v-if="searchResult.length !== 0"
          :search_information="search_information"
          :page="page"
          :totalPage="totalPage"
          :lastKeyword="lastKeyword"
        ></pagination>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ResultSearch from "../components/ResultSearch.vue";
import CardCorona from "../components/CardCorona.vue";
import Pagination from "../components/Pagination.vue";

export default {
  name: "Home",
  components: { ResultSearch, CardCorona, Pagination },
  computed: {
    ...mapState([
      "searchResult",
      "coronaViruses",
      "page",
      "totalPage",
      "lastKeyword",
      "search_information",
    ]),
  },
};
</script>
