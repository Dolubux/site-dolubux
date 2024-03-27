<template>
  <div class="flex items-center gap-2">
    <input
      class="focus:border-blue-500 border-2 h-4 w-4 rounded-lg py-4 px-2 text-tiny font-medium text-gray-700 opacity-90"
      type="checkbox"
      :name="NameInput"
      :value="NameInput"
      :id="'id_' + NameInput"
    />
    <label class="text-tiny" :for="'id_' + NameInput"> {{ LabelInput }} </label>
  </div>
</template>

<script>
import LabelForm from '../Labels/labelForm.vue'
export default {
  components: { LabelForm },
  props: {
    LabelInput: String,
    NameInput: String
  },
  data() {
    return {}
  }
}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>
