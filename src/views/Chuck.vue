<template>
  <div class="container">
    <p class="card-text">
     {{randomJoke}}
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import  store  from './../store'

export default {
  name: 'Chuck',
  computed: {
    ...mapGetters({
      randomJoke: 'getRandomJoke'
    })
  },
  methods:{
    ...mapActions(['getRandomJoke']),
  },
  // created() {
  //   this.getRandomJoke()
  // }
  beforeRouteEnter(to, from, next) {
    store.dispatch('getRandomJoke', next);

  }
}
</script>
