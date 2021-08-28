<template>
  <div>
    <header class="text-gray-600 body-font">
      <div
        class="
          container
          mx-auto
          flex flex-wrap
          p-5
          flex-col
          md:flex-row
          items-center
        "
      >
        <router-link
          to="/"
          class="
            flex
            title-font
            font-medium
            items-center
            text-gray-900
            mb-4
            md:mb-0
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="
              w-10
              h-10
              text-white
              shadow-lg
              p-2
              bg-indigo-500
              rounded-full
            "
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            ></path>
          </svg>
          <span class="ml-3 text-gray-700 text-xl font-semibold"
            >BIGSOURCE</span
          >
        </router-link>
        <div class="relative flex-grow ml-7">
          <form action="" @submit.prevent="seacrhHandle">
            <input
              :placeholder="
                !toggle
                  ? 'Input your keyword here...'
                  : speaking
                  ? runtimeTranscription
                  : sentences[0]
                  ? sentences[0]
                  : 'Please speech now...'
              "
              v-model="keyword"
              type="text"
              class="
                inline
                w-2/3
                bg-white bg-opacity-50
                rounded-full
                border border-gray-100
                focus:border-indigo-200 focus:bg-transparent
                shadow-md
                focus:ring-2 focus:ring-indigo-300
                text-base
                outline-none
                text-gray-700
                py-1
                px-3
                leading-8
                transition-colors
                duration-200
                ease-in-out
              "
            />
            <div class="inline ml-4">
              <a
                @click.stop="
                  toggle ? endSpeechRecognition() : startSpeechRecognition()
                "
                :class="
                  !toggle
                    ? 'bg-gray-400'
                    : speaking
                    ? 'bg-red-500'
                    : 'bg-red-500'
                "
                class="
                  text-white
                  py-1
                  px-3
                  cursor-pointer
                  shadow-lg
                  hover:hand hover:bg-red-600
                  rounded-full
                  mr-3
                  font-semibold
                "
              >
                <i class="fas fa-microphone"></i>
              </a>
              <button
                type="submit"
                class="
                  text-white
                  bg-indigo-500
                  px-4
                  py-1
                  shadow-xl
                  hover:bg-indigo-700
                  rounded-3xl
                  font-semibold
                  uppercase
                "
              >
                <span class="fas fa-sm fa-search mr-3"> </span>Search
              </button>
            </div>
          </form>
        </div>
        <button
          class="
            inline-flex
            items-center
            bg-gray-100
            border-0
            py-1
            shadow-md
            px-3
            focus:outline-none
            hover:bg-gray-200
            rounded
            text-base
            mt-4
            md:mt-0
          "
        >
          <i class="fas fa-lg fa-language mr-3"> </i>
          Translate
        </button>
      </div>
    </header>
    <hr />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

let SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = SpeechRecognition ? new SpeechRecognition() : false;

export default {
  name: "Navbar",
  props: {
    lang: {
      type: String,
      default: "en-US",
    },
  },
  data() {
    return {
      keyword: "",
      error: false,
      speaking: false,
      toggle: false,
      runtimeTranscription: "",
      sentences: [],
    };
  },
  methods: {
    ...mapState(["page"]),
    ...mapActions(["fetchSearchEngine", "fetchCoronaIndonesia"]),
    seacrhHandle() {
      this.fetchSearchEngine({ keyword: this.keyword, page: this.page });
      this.fetchCoronaIndonesia();
    },
    checkCompatibility() {
      if (!recognition) {
        this.error =
          "Speech Recognition is not available on this browser. Please use Chrome or Firefox";
      }
    },
    endSpeechRecognition() {
      recognition.stop();
      this.toggle = false;
      this.keyword = this.sentences.join(". ");
    },
    startSpeechRecognition() {
      console.log(recognition);
      if (!recognition) {
        this.error =
          "Speech Recognition is not available on this browser. Please use Chrome or Firefox";
        return false;
      }
      this.keyword = "";
      this.sentences = [];
      this.toggle = true;
      recognition.lang = this.lang;
      recognition.interimResults = true;

      recognition.addEventListener("speechstart", () => {
        this.speaking = true;
      });

      recognition.addEventListener("speechend", () => {
        this.speaking = false;
      });

      recognition.addEventListener("result", (event) => {
        const text = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");
        this.runtimeTranscription = text;
      });

      recognition.addEventListener("end", () => {
        if (this.runtimeTranscription !== "") {
          this.sentences.push(
            this.capitalizeFirstLetter(this.runtimeTranscription)
          );
        }
        this.runtimeTranscription = "";
        recognition.stop();
        if (this.toggle) {
          // keep it going.
          // recognition.start();
        }
      });
      recognition.start();
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
  mounted() {
    this.checkCompatibility();
  },
};
</script>

<style></style>
