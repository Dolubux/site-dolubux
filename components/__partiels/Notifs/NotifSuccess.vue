<template>
  <div
    v-if="Notif_SucessSendForm === true"
    class="z-50 bg-yellow-300 w-full py-2 font-extralight text-tiny flex justify-center text-center items-center text-white animate__animated animate__backInDown"
  >
    Succès. consulte vos mails Svp. Merci!
  </div>
</template>

<script>
export default {
  computed: {
    Notif_SucessSendForm() {
      return this.$store.state.FormContactSend
    }
  }
}
</script>

<style></style>
