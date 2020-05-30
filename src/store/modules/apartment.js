import { getReq, postReq } from "../../api_handler";

const state = {
  featuredApartment: [],
  apartmentImages: [],
  currentApartment: {},
  searchedApartment: [],
};

const getters = {
  getFeatured: (state) => state.featuredApartment,
  getApartmentImages: (state) => state.apartmentImages,
  getCurrentApartment: (state) => state.currentApartment,
  getSearchedApartment: (state) => state.searchedApartment,
};

const actions = {
  async getApartmentDetails({ commit }, data) {
    return new Promise(async (resolve, reject) => {
      try {
        var res = await getReq("apartment_get", {
          token: data.token,
          url: "apartment/get?uuid=" + data.apartment,
        });
        window.console.log(res)
        commit("setCurrentApartment", res.data);
        resolve(1);
      } catch (error) {
        reject(-1);
      }
    });
  },

  async getFeaturedApartments({ commit }, data) {
    return new Promise(async (resolve, reject) => {
      try {
        var res = await getReq("apartment_all", { token: "" });
        commit("setFeaturedApartments", res.results);
        resolve(1);
      } catch (error) {
        reject(-1);
      }
    });
  },

  async fetchApartmentImages({ commit }, data) {
    return new Promise(async (resolve, reject) => {
      try {
        var res = await getReq("apartment_images", {
          token: "",
          url: "apartment/images/get?apartment=" + data.apartmentUuid,
        });
        commit("setApartmentImages", res.data);
        resolve(1);
      } catch (error) {
        reject(-1);
      }
    });
  },

  async setCurrentApartment({ commit }, data) {
    return new Promise((resolve, reject) => {
      commit("setCurrentApartment", data.apartment);
      resolve(1);
    });
  },

  async searchApartment({ commit }, data) {
    //
    return new Promise(async (resolve, reject) => {
      try {
        var res = await getReq("search_apartment", {
          token: "",
          url: data.url,
        });
        commit("setSearchedApartment", res.results);
        resolve(1);
      } catch (error) {
        reject(-1);
      }
    });
  },

  async bookApartment({ commit }, data) {
    return new Promise(async (resolve, reject) => {
      try {
        let res = await postReq("book_apartment", data);
        if(res.responseCode == 1){
          resolve(res)
        }
        else{
          resolve(0);
        }
        
      } catch (error) {
        reject(error);
      }
    });
  },

  async confirmBooking({ commit }, data) {
    return new Promise(async (resolve, reject) => {
      try {
        let res = await postReq("confirm_booking", data);
        resolve(res);
      } catch (error) {
        reject(0);
      }
    });
  },
};

const mutations = {
  setFeaturedApartments: (state, newFeatured) =>
    (state.featuredApartment = newFeatured),
  setApartmentImages: (state, images) => (state.apartmentImages = images),
  setCurrentApartment: (state, apartment) =>
    (state.currentApartment = apartment),
  setSearchedApartment: (state, apartments) =>
    (state.searchedApartment = apartments),
};

export default {
  state,
  actions,
  getters,
  mutations,
};
