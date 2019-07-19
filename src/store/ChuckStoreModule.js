import { ChuckService } from './../services/ChuckService'

export const ChuckModule = {
    state: {
        randomJoke: null,
        jokeCategory: null,
        error: null
    },
    getters:{
        getRandomJoke(state) {
            return state.randomJoke;
        }
    },
    mutations:{
        setRandomJoke(state, joke) {
            state.randomJoke = joke;
        },
    },
    actions:{
        getRandomJoke(context,next) {   //obrise se
            ChuckService.getRandomJoke() // gura se store.state.jokeCategory
            .then((joke)=>{
                context.commit('setRandomJoke',joke.value)
                next()
            })
            .catch((error)=> {
                console.log(error)
            })            
        },
        getCategoryJoke(context,category) {   //obrise se
            ChuckService.getNewJoke(category) // gura se store.state.jokeCategory
            .then((joke)=>{
                context.commit('setRandomJoke',joke.value)
                next()
            })
            .catch((error)=> {
                console.log(error)
            })            
        },
    }
}