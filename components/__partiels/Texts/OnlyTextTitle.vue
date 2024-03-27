<template>
  <span
    :class="[
      size === 'large' ? 'text-2xl font-bold mb-4 md:text-2xl' : '',
      size === 'middle' ? 'text-xl font-bold' : '',
      size === 'small' ? 'text-lg font-bold' : '',
      extraclass,
      color,
    ]"
  >
    {{ title }}
  </span>
</template>

<script>
export default {
  props: ['title', 'color', 'extraclass', 'size'],
}
</script>

<style></style>
