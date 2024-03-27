<template>
  <div class="flex flex-col">
    <label-form :title="LabelTextarea" />
    <textarea
      :name="NameTextarea"
      :placeholder="placeholder"
      class="h-48 focus:border-blue-500 border-[0.5px] rounded-lg py-4 px-2 text-md font-normal text-gray-700 opacity-90"
      type="text"
    ></textarea>
    <span class="text-red-300 text-sm py-1">
      {{ ErrorTextarea }}
    </span>
  </div>
</template>

<script>
import LabelForm from '../Labels/labelForm.vue'
export default {
  components: {
    LabelForm
  },
  props: {
    LabelTextarea: String,
    NameTextarea: String,
    ErrorTextarea: String,
    placeholder: String
  },
  data() {
    return {}
  }
}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>
