<template>
  <div class="flex flex-col">
    <label-form :title="LabelInput" />
    <div class="flex gap-1">
      <select
        name="phoneIndicator"
        class="w-3/12 md:w-4/12 bg-transparent focus:border-blue-700 border-2 rounded-lg py-4 px-2 text-tiny font-medium text-gray-700 opacity-90"
        type="number"
      >
        <option selected value="+225">+225</option>
        <option value="+224">+224</option>
        <option value="+223">+223</option>
        <option value="+226">+226</option>
        <option value="+33">+33</option>
      </select>
      <input
        class="w-full focus:border-blue-500 border-2 rounded-lg py-4 px-2 text-tiny font-medium text-gray-700 opacity-90"
        type="text"
        :name="NameInput"
        :id="'id_' + NameInput"
        :placeholder="PlaceholerInput"
      />
    </div>
    <span class="text-red-300 text-sm py-1">
      {{ ErrorInput }}
    </span>
  </div>
</template>

<script>
import labelForm from '../Labels/labelForm.vue'
export default {
  components: { labelForm },
  name: 'OnlyFormPhone',
  props: {
    LabelInput: String,
    NameInput: String,
    PlaceholerInput: String,
    ErrorInput: String
  },
  data() {
    return {}
  }
}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>
