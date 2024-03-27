<template>
  <div class="flex flex-col pb-4" :class="extraclass">
    <span :class="['text-xl font-ligth ']"> {{ title }} : </span>

    <!--  -->
    <!--  -->
    <!--  -->
    <a v-if="type === 'deflaut'" :class="[valueclass]">
      {{ value }}
    </a>

    <!--  -->
    <!--  -->
    <!--  -->
    <a v-if="type === 'email'" :class="[valueclass]" :href="'email:' + value">
      {{ value }}
    </a>

    <!--  -->
    <!--  -->
    <!--  -->
    <a v-if="type === 'tel'" :class="[valueclass]" :href="'tel:' + value">
      {{ value }}
    </a>
  </div>
</template>

<script>
export default {
  props: ['type', 'title', 'value', 'extraclass'],
  data() {
    return {
      valueclass: 'text-2xl font-bold'
    }
  }
}
</script>

<style></style>
