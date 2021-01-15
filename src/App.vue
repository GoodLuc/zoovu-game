<template>
  <router-view/>
</template>

<style lang="scss" scope="global">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap');

html, body { 
  font-family: 'Source Sans Pro', sans-serif; font-size: 18px; font-weight: 600;
  background: linear-gradient(133deg, rgba(232,229,229,1) 0%, rgba(236,231,190,1) 100%);
}

.button {
  color: #4B1B85;
  background: white; box-shadow: 1px 0px 5px 0px rgba(0,0,0,0.2);
  border-radius: 20px; padding: 10px 20px; text-decoration: none;
}

input[type=text] {
  background: none; text-align: center; margin-bottom: 20px;
  padding: 20px; border: none; border-bottom: 2px solid #3b3b3b;
}

.flex {
  display: flex;
  &.j-center { justify-content: center; }
  &.a-center { align-items: center; }
  &.column { flex-direction: column; }
}
.vmin100 {
  min-height: 100vh;
}
</style>
