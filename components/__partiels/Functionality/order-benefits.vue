<template>
  <section class="flex flex-col gap-32 md:gap-16">
    <section v-for="(item, index) in lists" :key="item.id">
      <div
        class="flex justify-between gap-y-4 items-center w-10/12 big:w-8/12 m-auto md:m-auto lg:items-start lg:gap-x-8 md:flex-col"
      >
        <div class="w-4/12 lg:w-full md:order-last" :class="index % 2 === 0 ? 'order-0' : 'order-last' " >
          <div class="flex flex-col gap-4 w-11/12 3xl:w-full">
            <figure class="flex w-10 h-10 rounded-md justify-center items-center ">
              <img v-lazy="item.icone" src="" alt="" class="h-full w-full opacity-80" />
            </figure>

            <span class="text-4xl font-bold md:text-2xl">
              {{ item.title_EXTRA }}
            </span>

            <only-description :title="item.describle" format="deflaut" />
          </div>
        </div>
        <div class="w-6/12 md:w-full lg:w-10/12 lg:order-0">
          <img
            class="rounded-lg object-cover w-full 3xl:hidden lg:hidden xl:flex big:hidden "
            style="height: 24em"
            v-lazy="item.image"
            src=""
            :alt="item.title_EXTRA"
          />
          <img
            class="rounded-lg object-cover w-full xl:hidden 3xl:flex"
            style="height: 28em"
            v-lazy="item.image"
            src=""
            :alt="item.title_EXTRA"
          />
          <img
            class="rounded-lg object-cover 3xl:hidden big:hidden w-full h-full lg:flex"
            v-lazy="item.image"
            src=""
            :alt="item.title_EXTRA"
          />
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import OnlyButton from "../Buttons/OnlyButton.vue";
import OnlyDescription from "../Texts/OnlyDescription.vue";
import Functionality from "~/components/SectionPages/Functionality.vue";
export default {
  components: { OnlyButton, OnlyDescription, Functionality },
  name: "OrderBanner",
  props: {
    lists: Array,
  },
  data() {
    return {
      showService: false,
    };
  },
  methods: {
    openModalForm({ bool, custom }) {
      this.$store.commit("modalForm", { bool, custom });
    },
  },
};
</script>

<style></style>
