<template>
  <router-view :key="$route.params" />
</template>


<style lang="scss" scope="global">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap');

html, body { 
  font-family: 'Source Sans Pro', sans-serif; font-size: 18px; font-weight: 600;
  background: linear-gradient(133deg, rgba(232,229,229,1) 0%, rgba(236,231,190,1) 100%);
}

p {
  color: #6d6d6d;
  strong { font-size: 1.1em; color: #111111; }
}

.t-left { text-align: left; } .t-right { text-align: right; } .t-center { text-align: center; }

.flex {
  display: flex; &.wrap { flex-wrap: wrap; }
  &.j-center { justify-content: center; } &.j-between { justify-content: space-between; }
  &.a-center { align-items: center; }
  &.column { flex-direction: column; }
}

.vmin100 {
  min-height: 100vh;
}

.w100 { width: 100%; }

.container {
  width: 100%;
  max-width: 900px; margin: auto;
}

</style>
