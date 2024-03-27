<template>
  <div class="flex flex-col">
    <label-form :title="LabelInput" />
    <input
      class="focus:border-blue-500 border-[0.5px] rounded-lg py-4 px-2 text-md font-medium text-gray-700 opacity-90"
      :type="type"
      :name="NameInput"
      :id="'id_' + NameInput"
      :placeholder="PlaceholerInput"
    />
    <span class="text-red-300 text-sm py-1">
      {{ ErrorInput }}
    </span>
  </div>
</template>

<script>
import LabelForm from '../Labels/labelForm.vue'
export default {
  components: { LabelForm },
  props: {
    LabelInput: String,
    NameInput: String,
    PlaceholerInput: String,
    ErrorInput: String,
    type: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {}
  }
}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>
