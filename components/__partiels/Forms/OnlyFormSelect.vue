<template>
  <div class="flex flex-col mb-1">
    <label-form :title="LabelInput" />
    <select
      :name="NameSelect"
      :id="NameSelect"
      class="focus:border-blue-500 bg-transparent capitalize border-2 rounded-lg py-4 px-2 text-tiny font-medium text-gray-700 opacity-90"
    >
      <option
        class="text-gray-700 lowercase"
        v-for="item in itemSelect__Data"
        :value="item"
        :key="item"
      >
        {{ item }}
      </option>
    </select>
    <span class="text-red-300 text-sm py-1">
      {{ ErrorInput }}
    </span>
  </div>
</template>

<script>
import labelForm from '../Labels/labelForm.vue'

export default {
  components: { labelForm },
  props: [
    'LabelInput',
    'NameSelect',
    'itemSelect',
    'itemSelect__Data',
    'ErrorInput'
  ],
  data() {
    return {}
  }
}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style scoped>
option:first {
  color: #f3f4f6 !important;
}
</style>
