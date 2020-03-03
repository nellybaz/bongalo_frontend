
// const mutation_keys = {
//     listing_type,

// }

const state = {
    listing_type:"Apartment",
    what_guest_will_have:"",
}

const getters = {
    getListingType:(state) => state.listing_type,
}

const actions = {
    setValue({commit}, data){
        commit('setValue', data);
        window.console.log(data);
    }
}

const mutations = {
    setValue:(state, newData) => (state[newData['key']] = newData['value']),
}

export default {
    state,
    actions,
    getters,
    mutations
}