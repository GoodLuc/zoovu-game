<template>
  <div class="about">
    <h1>Good luck, {{ friend }}</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    friend: ''
  }),
  mounted () {
    if (this.$route.params.friend) {
      this.friend = this.$route.params.friend
    } else {
      this.$router.push('/')
    }
  },
}
</script>
