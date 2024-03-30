<template>
  <span
    class=" font-light font-love_font"
    :class="[
      format == 'deflaut' ? 'text-xl md:text-xl font-normal' : format == 'small' ? 'text-lg' : format == 'medium' ? 'text-xl' : '',
      extraclass,
    ]"
  >
    {{ title }}
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    title: String,
    extraclass: String,
    format: String,
  },
  data() {
    return {}
  },
}
</script>

<style></style>
