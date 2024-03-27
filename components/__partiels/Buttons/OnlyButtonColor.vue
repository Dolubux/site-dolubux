<template>
  <div class="">
    <button
      :class="[extraclass]"
      class="wow animate__animated animate__rubberBand font-sans text-white text-sm font-bold uppercase px-7 py-4 rounded-lg z-20 text-center cursor-pointer animate__delay-05s"
      target="_top"
    >
      <span class="text-white text-base font-bold font-sans">
        {{ title }}
      </span>
    </button>
  </div>
</template>

<script>
export default {
  props: ['title', 'extraclass']
}
</script>

<style></style>
