<template>
  <div
    class="
      flex
      justify-between
      items-center
      gap-8
      w-10/12
      m-auto
      big:w-full
      lg:flex-col
    "
  >
    <div class="lg:w-full w-full" :class="OrderSections">
      <ul class="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-2 gap-12">
        <li v-for="index in list" :key="index._id">
          <div class="relative rounded-lg lg:px-4">
            <div class="flex items-center gap-4 mb-4">
              <div class="flex items-center justify-center">
                <img
                  class="h-9 w-10"
                  v-lazy="`/functionality/${index.iconCard}.png`"
                  src=""
                  alt=""
                />
              </div>
              <span
                class="
                  text-lg
                  font-semibold
                  text-yellow-300
                  w-full
                  cursor-pointer
                "
                >{{ index.title }}</span
              >
            </div>
            <div class="">
              <only-description :title="index.item" :extraclass="'py-4'" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import OnlyDescription from '../Texts/OnlyDescription.vue'
export default {
  components: { OnlyDescription },
  props: {
    imageSection: String,
    list: Array[('_id', 'title', 'item', 'iconCard')],
    OrderImage: String,
    OrderSections: String,
    LazyImage: String,
    contentVisible: Number
  }
}
</script>

<style>
.shadow-wx {
  box-shadow: 0px 0px 20px #f5f5f5;
}
.shadow-yellow {
  box-shadow: 0px 0px 50px #ffebaa;
}
.bg-noible {
  background-color: #182b3a;
}
</style>
