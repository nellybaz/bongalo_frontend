var example_review = [
    {
        id: "review_id",
        giver:"user id",
        review:"message from review 1"

},
{
    id: "review_id2",
    giver:"user id",
    review:"message from review 2"

},
]

import { getReq } from "../../api_handler"


const state = {
    reviews_from_me: [],
    reviews_for_me: []
}

const getters  = {
    getReviewFromMe: (state) => state.reviews_from_me,
    getReviewForMe: (state) => state.reviews_for_me,

}


const actions = {
    // be called from the app
    // fetch the date from backend
    // update the store using the mutations

    async getReviewsForMe({commit}, data){
        return new Promise( async (resolve, reject) => {
            try {
                var res = await getReq('reviews_for_me', data)
                window.console.log("response is below")
                window.console.log(res)
                if(res['responseCode'] == 1){
                    commit('setReviewForMe', res['data'])
                    resolve(1)
                }
            } catch (error) {
                commit('setReviewForMe', example_review)
                window.console.log("error is below")
                window.console.log(error)
                reject(error)
            }
        });
    },

    async getReviewsFromMe({commit}, data){
        return new Promise( async (resolve, reject) => {
            try {
                var res = await getReq('reviews_from_me', data)
                if(res['responseCode'] == 1){
                    commit('setReviewFromMe', res['data'])
                    resolve(1)
                }
            } catch (error) {
                commit('setReviewFromMe', example_review)
                reject(error)
            }
        });
    }



}

const mutations = {
    setReviewForMe: (state, newValue) => state.reviews_for_me = newValue,
    setReviewFromMe: (state, newValue) => state.reviews_from_me = newValue,
}


export default {
    state, 
    getters,
    actions,
    mutations
}