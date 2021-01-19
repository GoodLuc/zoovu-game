<template>
  <div class="flex j-center a-center column vmin100">
    <p><strong>Hello friend, tell me your name...</strong></p>
    <input @keyup.enter="this.$router.push({ name: 'Game', params: { friend: this.friend }})" v-model="friend" type="text" placeholder="Your name here">
    <router-link class="button go" :to="{ name: 'Game', params: { friend: this.friend }}">Let's go</router-link>
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

<style lang="scss">

.button {
  color: #4B1B85;
  background: white; box-shadow: 1px 0px 5px 0px rgba(0,0,0,0.2);
  border-radius: 20px; padding: 10px 20px; text-decoration: none;
  
  &.go {
    background: url('../assets/arrow.svg?data') center right 15px / 17px no-repeat;
    background-color: #f2f2f2;
    padding-right: 40px; fill: #4B1B85;
    &:hover {
      filter: invert(1)
    }
  }
}

input[type=text] {
  font-size: 1em;
  background: none; text-align: center; margin-bottom: 20px;
  padding: 10px; border: none; border-bottom: 2px solid #3b3b3b;
}

</style>
