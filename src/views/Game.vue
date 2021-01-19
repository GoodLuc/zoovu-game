<template>
  <div class="container flex wrap j-center a-center vmin100" @drop.prevent>

    <div class="flex j-between w100">
      <div>
        <p><strong>Good luck, {{ friend }}!</strong></p>
        <p>Pick up the right cards</p>
      </div>
      <div class="t-right">
        <p class="score flex a-center">
          <img src="@/assets/timer.svg" alt="Timer"> <strong>Your score: {{ score }} seconds</strong></p>
        <p>The faster the better!</p>
      </div>
    </div>

    <!-- Card zone 1 -->
    <div v-if="!won" id="zone1" class="zone flex j-between w100">
      <div class="slot" v-for="card in zone1" :key="card.pos" draggable="true" @dragStart="drag($event, 'zone1', card.pos)">
       <figure v-if="card.content != ''">
          <img :src="require('@/assets/zoovu-'+card.content+'.svg')" alt="Card">
       </figure>
      </div>
    </div>

    <!-- Won message -->
    <div id="won" v-else class="flex w100 j-center a-center t-center">
      <p><strong>Congratulations!</strong><br>You won.<br>Score: {{ score }}</p>
    </div>

    <!-- Drop slots (zone 2) -->
    <p v-if="!won" class="t-left w100">...and drop them here to make the logo great again!</p>
    <div id="zone2" class="zone flex j-between w100">
      <div class="slot" v-for="card in zone2" :key="card.pos" draggable="true" @dragStart="drag($event, 'zone2', card.pos)" :id="card.pos" @drop="drop($event)" @dragenter.prevent @dragover.prevent>
        <figure v-if="card.content != ''">
          <img :src="require('@/assets/zoovu-'+card.content+'.svg')" alt="Card">
        </figure>
      </div>
    </div>
    <p v-if="wins > 0" class="t-center">{{ wins }} wins</p>
  </div>

</template>

<script>

export default {
  data: () => ({
    friend: '',
    won: false,
    wins: 0,
    score: 0,
    timer: null,
    dragfrom: "zone1",
    dragcard: null,
    zone1: [
      { pos: 1, content: "z" },
      { pos: 2, content: "o" },
      { pos: 3, content: "o" },
      { pos: 4, content: "v" },
      { pos: 5, content: "u" },
    ],
    zone2: [
      { pos: 1, content: "" },
      { pos: 2, content: "" },
      { pos: 3, content: "" },
      { pos: 4, content: "" },
      { pos: 5, content: "" },
    ],
    solution: ['z','o','o','v','u']
  }),

  mounted () {
    // Set friend name, or go back
    if (this.$route.params.friend) {
      this.friend = this.$route.params.friend
    } else {
      this.$router.push('/')
    }
  
    // Save wins
    if (this.$route.params.wins) {
      this.wins = this.$route.params.wins
    }
  
    // Set the timer
    this.timer = setInterval(this.doTime, 1000)
    
    // Randomize the initial card positions
    let arr = this.shuffleArray(['z','o','o','v','u']);
    this.zone1[0].content = arr[0]
    this.zone1[1].content = arr[1]
    this.zone1[2].content = arr[2]
    this.zone1[3].content = arr[3]
    this.zone1[4].content = arr[4]
  },

  methods: {
  
  // Does what is says on the box
    shuffleArray(array) {
      let original_array = [...array];
      let curId = array.length;
      while (0 !== curId) {
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        let tmp = array[curId];
        array[curId] = array[randId];
        array[randId] = tmp;
      }
      if (original_array != array) {
        return array;
      }
    },
  
    doTime() {
      this.score += 1
    },
    
    drag(ev, zone, card) {
      this.dragfrom = zone
      this.dragcard = card
    },
    
    // Where everything happens
    drop(ev) {

      // Check the target drop slot
      let target_id;
      if (ev.target.id != '') { target_id = ev.target.id } 
      else { target_id = event.target.closest('div').id }

      // If dragging from zone 1
      if (this.dragfrom == "zone1") {

        // If target slot is empty
        if (this.zone2[this.zone2.findIndex(item => item.pos == target_id)].content == '') {
          // Set the card in the slot
          this.zone2[this.zone2.findIndex(item => item.pos == target_id)].content = this.zone1[this.zone1.findIndex(item => item.pos == this.dragcard)].content
          // Remove card from zone 1
          this.zone1[this.zone1.findIndex(item => item.pos == this.dragcard)].content = ''
        }

      // If dragging from zone 2 into another zone 2 slot, switch card places
      } else if (this.dragfrom == "zone2") {
        let move_content = this.zone2[this.zone2.findIndex(item => item.pos == target_id)].content
        this.zone2[this.zone2.findIndex(item => item.pos == target_id)].content = this.zone2[this.zone2.findIndex(item => item.pos == this.dragcard)].content
        this.zone2[this.zone2.findIndex(item => item.pos == this.dragcard)].content = move_content
      }

      // If dragged into wrong slot, add 10 seconds to score
      if (this.zone2[this.zone2.findIndex(item => item.pos == target_id)].content != this.solution[target_id-1]) {
        this.score = this.score + 10
      
      // Checks if you won
      } else if (this.zone2[0].content == "z" && this.zone2[1].content == "o" && this.zone2[2].content == "o" && this.zone2[3].content == "v" && this.zone2[4].content == "u") {
        clearInterval(this.timer)
        this.won = true
        this.wins = parseInt(this.wins)+1
        let self = this
        // Reload route with a win count parameter
        setTimeout(function() { self.$router.push({ name: 'Game', params: { friend: self.friend, wins: self.wins }}) }, 10000)
      }

    }

  }
}
</script>

<style lang="scss">
body { padding-bottom: 80px; }

figure { margin: 0; }

.score {
  strong { color: #518dd3; }
  img { width: 25px; margin-right: 7px; }
} 

.zone {
  position: relative;

  .slot {
    width: 150px; height: 150px; position: relative;

    figure {
      cursor: move;
      border-radius: 15px; box-sizing: border-box;
      width: 100%; height: 100%;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      padding: 10px; background: white;
      display: flex; justify-content: center; align-items: center;
      transition: all .23s ease 0s;

      img { max-width: calc(100% - 10px); max-height: calc(100% - 10px); }

      &:hover { 
        transform: perspective(100px) rotateY(20deg);
        box-shadow: rgba(0, 0, 0, 0.54) 0px 5px 8px;
      }
    }
  }
}

#zone1 { margin-bottom: 100px; }

#zone2 {
  .slot {
    border: 2px dashed #4B1B85; border-radius: 15px;
    transition: all .2s ease;
    &:hover { box-shadow: 0px 4px 15px -1px #4B1B85; }
  }
}

#won {
  animation: wow 1s infinite; margin-bottom: 2em;
  strong { color: #518dd3; font-size: 1.5em; }
}
@keyframes wow {
  0% { transform: scale(1); }
  75% { transform: scale(1.3); }
  100% { transform: scale(1); }
}

</style>