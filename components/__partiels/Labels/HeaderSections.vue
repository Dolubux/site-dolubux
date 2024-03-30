<template>
  <div
    class="flex flex-col relative font-sans w-10/12 big:w-full pb-8 m-auto wow animate__animated animate__fadeInDown"
  >
    <span
      class="text-8xl lg:text-7xl md:text-6xl lg:text-gray-200 absolute left-0 top-0 w-full m-auto flex justify-end font-extrabold text-gray-100 opacity-80"
    >
      {{ sub }}
    </span>
    <div class="flex flex-col">
      <span
        id="heading"
        :class="textColor"
        class="text-5xl md:text-[1.6rem] w-6/12 z-20 relative top-5 text-blue-500 font-black md:w-10/12 xl:w-3/5 big:w-6/12"
      >
        />{{ title }}
      </span>
      <span class="md:text-sm text-tiny relative top-6 w-3/12">
        {{ describle }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sub: String,
    title: String,
    textColor: String,
    describle: '',
  },
}
</script>
<style></style>
