<template>
  <div class="flex j-center a-center column vmin100">
    <p><strong>Hello friend, tell me your name...</strong></p>
    <input v-model="friend" type="text" placeholder="Your name here">
    <router-link class="button" :to="{ name: 'Game', params: { friend: this.friend }}">Let's go</router-link>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data: () => ({
    friend: ''
  }),
}
</script>
