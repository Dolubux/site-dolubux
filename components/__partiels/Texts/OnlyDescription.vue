<template>
  <span
    class="md:text-tiny font-light font-love_font"
    :class="[
      format === 'deflaut' ? 'text-md font-normal' : '',
      format === 'small' ? 'text-base' : '',
      format === 'medium' ? 'text-lg' : '',
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
