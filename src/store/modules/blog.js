import { getReq, postReq } from '../../api_handler';


const state = {
    posts:[],
    featured:[],
    recent: []
}

const getters = {
    getAllBlogPost:(state) => state.posts,
    getAllFeaturedPost:(state) => state.featured,
    getAllRecentPost:(state) => state.recent
}

const actions = {
    async getAllBlogPost({commit}) {
        return new Promise( async (resolve, reject) => {
            try {
                var res =  await getReq('all_blog_post', {token:""});
                commit('setAllBlogPost', res.data)
                commit('setAllFeaturedPost', res.data)
                commit('setAllRecentPost', res.data)
                resolve(1)
                
            } catch (error) {
                reject(error.data.message)
            }
        });
    },

    async setBlog({commit},data){
        commit('setAllFeaturedPost', data)
    }
}


const mutations = {
    setAllBlogPost:(state, newPosts) => (state.posts = newPosts),
    setAllFeaturedPost:(state, newPosts) => (state.featured = newPosts),
    setAllRecentPost:(state, newPosts) => (state.recent = newPosts),}

export default{
    state, 
    actions,
    getters,
    mutations
}