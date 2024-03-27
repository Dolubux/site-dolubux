<template>
  <div class="">
    <a :href="emit">
      <button
        :class="[
          extraclass,
          bg === true ? 'bg-blue-500 ring-4 ring-blue-200' : '',
        ]"
        class="wow animate__animated animate__rubberBand font-sans z-50 text-white text-sm font-bold uppercase px-7 py-4 rounded-lg text-center cursor-pointer animate__delay-05s"
        target="_blank"
      >
        <span class="text-white text-base font-bold font-sans xs:text-tiny">
          {{ title }}
        </span>
        <span class="text-white ml-2">&#10230;</span>
      </button></a
    >
  </div>
</template>

<script>
export default {
  props: ['title', 'bg', 'emit', 'extraclass'],
}
</script>

<style></style>
