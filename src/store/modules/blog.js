import { getReq, postReq } from '../../api_handler';


const state = {
    posts:[],
}

const getters = {
    getAllBlogPost:(state) => state.posts
}

const actions = {
    async getAllBlogPost({commit}) {
        return new Promise( async (resolve, reject) => {
            try {
                var res =  await getReq('all_blog_post', {token:""});
                // window.console.log(res.data)
                commit('setAllBlogPost', res.data)
                resolve(1)
                
            } catch (error) {
                window.console.log(error);
                reject(error.data.message)
            }
        });
    }
}


const mutations = {
    setAllBlogPost:(state, newPosts) => (state.posts = newPosts)
}

export default{
    state, 
    actions,
    getters,
    mutations
}