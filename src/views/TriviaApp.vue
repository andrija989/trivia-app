<template>
  <div>
    <ul>
      <li v-for="(randomT,index) in randomTrivia" :key="index">
        {{randomT.question}}
        <button @click="showStuff()">Show answer</button>
        <div>
          <p class="par" id="answer" style.visibility="hidden">{{randomT.answer}}</p>
        </div>
      </li>
    </ul>
    
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'

export default {
 name: 'Trivia',
  computed: {
    ...mapGetters({
      randomTrivia: 'getRandomTrivia'
    })
  },
  methods:{
    ...mapActions(['getRandomTrivia']),
    showStuff() {
    document.getElementById("answer").style.visibility = "visible"
}
  },
  created() {
    this.getRandomTrivia()
  }
}
</script>
<style>
.par {
  visibility: hidden;
}
</style>
