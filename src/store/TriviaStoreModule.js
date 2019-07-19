import { triviaService } from './../services/TriviaService'

export const TriviaModule = {
    state: {
        randomTrivia:[]
    },
    getters:{
        getRandomTrivia(state) {
            return state.randomTrivia;
        }
    },
    mutations:{
        setRandomTrivia(state,trivia) {
            state.randomTrivia = trivia;
        }
    },
    actions: {
        getRandomTrivia(context) {
            triviaService.getAll()
            .then((randomTrivia)=> {
                context.commit('setRandomTrivia',randomTrivia.data)
                console.log(randomTrivia.data)
            })
        }
    }
}