import { ChuckService } from './../services/ChuckService'

export const ChuckModule = {
    state: {
        randomJoke: null,
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
        }
    },
    actions:{
        getRandomJoke(context,next) {
            ChuckService.getRandomJoke()
            .then((joke)=>{
                context.commit('setRandomJoke',joke.value)
                next()
            })
            .catch((error)=> {
                console.log(error)
            })            
        }
    }
}