import firebase from "firebase";
import { getReq, postReq, deleteReq, putReq } from "../../api_handler";

const state = {
  uploadedImageSofar:0,
  isUpdate: false,
  apartmentId: "",
  listing_type: "",
  what_guest_will_have: "",
  number_of_guest: 1,
  number_of_bedroom: 0,
  number_of_bathroom: 1,
  property_country: "",
  property_address: "",
  property_city: "",
  property_province: "",
  amenities: [],
  extras: [],
  rules: [],
  photos: [],
  description: "",
  title: "",
  mobile_number: "",
  will_update_calender_checkbox: "",
  checkin: "Flexible",
  checkout: "Flexible",
  min_nights: 1,
  max_nights: 30,
  blocked_dates: [],
  price: 0,
  userListing: [],
};

const getters = {
  getListingType: (state) => state.listing_type,
  getListingState: (state) => state,
  getUserListing: (state) => state.userListing,
};

const actions = {

  async uploadImages({commit}, data) {
    const images = data['images']
    const uuid = data['uuid']
    return new Promise(async (resolve, reject) => {
      try {
        const downloadedImages = [];
        for (let i = 0; i < images.length; i++) {
          let res = await firebase
            .storage()
            .ref(
              "property/images/--bongalo_img--" +
                uuid +
                "_" +
                Date.now() +
                "-bongalo_img-"
            );
          let snapshot = await res.put(images[i]);
          let downloadedUrl = await snapshot.ref.getDownloadURL();
          downloadedImages.push(downloadedUrl);
          window.console.log(` ${(i+1).toString()} of ${images.length} uploaded`)
          commit("setValue", {key:"uploadedImageSofar", value:(i+1).toString()})
        }
        resolve(downloadedImages);
      } catch (error) {
        reject(error);
      }
    });
  },

  setValue({ commit }, data) {
    commit("setValue", data);
  },

  async clearListingData({ commit }) {
    let initialState = {
      listing_type: "Apartment",
      what_guest_will_have: "",
      number_of_guest: 4,
      number_of_bedroom: 0,
      number_of_bathroom: 1,
      property_country: "",
      property_address: "",
      property_city: "",
      property_province: "",
      amenities: [],
      extras: [],
      rules: [],
      photos: [],
      description: "",
      title: "",
      mobile_number: "",
      will_update_calender_checkbox: "",
      checkin: "Flexible",
      checkout: "Flexible",
      min_nights: 1,
      max_nights: 30,
      blocked_dates: [],
      price: 0,
      userListing: [],
    };
    commit("resetState", initialState);
  },

  async uploadProperty({ commit }, data) {
    return new Promise(async (resolve, reject) => {
      let imageUploadRes;
     try {
      imageUploadRes = await actions.uploadImages({commit}, {images:data.images, uuid:data.uuid});
      window.console.log("Images uploaded")
      if (imageUploadRes == 0) {
        reject({data:{message:"Image uploaded list is empty"}});
      }
     } catch (error) {
      window.console.log("Images uploaded error")
      window.console.log(error)
       reject(error)
     }

      // Create amenties comma seperated string
      let amenitiesToSend = "";
      for (let x = 0; x < data.info.amenities.length; x++) {
        amenitiesToSend += data.info.amenities[x];
        if (x < data.info.amenities.length - 1) {
          amenitiesToSend += ",";
        }
      }

      let extrasToSend = "";
      for (let x = amenitiesToSend.split(",").length; x < data.info.extras.length; x++) {
        extrasToSend += data.info.extras[x];
        if (x < data.info.extras.length - 1) {
          extrasToSend += ",";
        }
      }

      let rulesToSend = "";
      for (let x = ((amenitiesToSend.split(",").length)+(extrasToSend.split(",").length)); x < data.info.rules.length; x++) {
        rulesToSend += data.info.rules[x];
        if (x < data.info.rules.length - 1) {
          rulesToSend += ",";
        }
      }

      
      window.console.log("Amenities and other strings generated")

      const dataToUpload = {
        owner: data.uuid,
        token: data.token,
        title: data.info.title,
        description: data.info.description,
        price: data.info.price,
        main_image: imageUploadRes[data["mainImageIndex"]],
        available_rooms: data.info.number_of_bedroom,
        number_of_bathrooms: data.info.number_of_bathroom,
        max_guest_number: data.info.number_of_guest,
        is_active: true,
        is_verified: false,
        space: data.info.what_guest_will_have,
        country: data.info.property_country,
        city: data.info.property_city,
        address: data.info.property_address,
        type: data.info.listing_type,
        discount: 0.2,
        amenities: amenitiesToSend,
        rules: rulesToSend,
        extras: extrasToSend,
        unavailable_from: "1020-01-08",
        unavailable_to: "1020-02-08",
        check_in: data.info.checkin,
        check_out: data.info.checkout,
        min_nights: data.info.min_nights,
        max_nights: data.info.max_nights,
        images: imageUploadRes.slice(1, imageUploadRes.length),
      };

      try {
        window.console.log("Start posting apartment")
        var res = await postReq("add_apartment", dataToUpload);
        window.console.log("done posting apartment")

        if (res.responseCode == 1) {
          resolve(1);
        }
      } catch (error) {
        reject(error);
      }
    });
  },
  async updateListing({ commit }, data) {
    return new Promise(async (resolve, reject) => {
      // Create amenties comma seperated string
      // Create amenties comma seperated string
      let amenitiesToSend = "";
      for (let x = 0; x < data.info.amenities.length; x++) {
        amenitiesToSend += data.info.amenities[x];
        if (x < data.info.amenities.length - 1) {
          amenitiesToSend += ",";
        }
      }

      let extrasToSend = "";
      for (let x = amenitiesToSend.split(",").length; x < data.info.extras.length; x++) {
        extrasToSend += data.info.extras[x];
        if (x < data.info.extras.length - 1) {
          extrasToSend += ",";
        }
      }

      let rulesToSend = "";
      for (let x = ((amenitiesToSend.split(",").length)+(extrasToSend.split(",").length)); x < data.info.rules.length; x++) {
        rulesToSend += data.info.rules[x];
        if (x < data.info.rules.length - 1) {
          rulesToSend += ",";
        }
      }

      const dataToUpload = {
        apartment: data.info.apartmentId,
        owner: data.uuid,
        token: data.token,
        title: data.info.title,
        description: data.info.description,
        price: data.info.price,
        available_rooms: data.info.number_of_bedroom,
        number_of_bathrooms: data.info.number_of_bathroom,
        max_guest_number: data.info.number_of_guest,
        space: data.info.what_guest_will_have,
        country: data.info.property_country,
        city: data.info.property_city,
        address: data.info.property_address,
        type: data.info.listing_type,
        discount: 0.2,
        is_active: true,
        is_verified: false,
        amenities: amenitiesToSend,
        rules: rulesToSend,
        extras: extrasToSend,
        unavailable_from: "1020-01-08",
        unavailable_to: "1020-02-08",
        check_in: data.info.checkin,
        check_out: data.info.checkout,
        min_nights: data.info.min_nights,
        max_nights: data.info.max_nights,
        main_image: "main_url",
        images: [],
      };

      try {
        var res = await putReq("update_user_listing", dataToUpload);
        if (res.responseCode == 1) {
          resolve(1);
        } else {
          resolve(0);
        }
      } catch (error) {
        window.console.log(error)
        reject(error);
      }
    });
  },

  async getUserListing({ commit }, data) {
    // Data must have uuid, token
    let dataToSend = {
      ...data,
      url: "apartment/show-listing?user=" + data.uuid,
    };
    return new Promise(async (resolve, reject) => {
      try {
        var res = await getReq("get_user_listing", dataToSend);
        if (res.responseCode == 1) {
          commit("setUserListing", res.data);
          resolve(1);
        }
      } catch (error) {
        reject(0);
      }
    });
  },

  async deleteUserListing({ commit }, data) {
    // Data must have uuid, token, apartment
    let dataToSend = {
      ...data,
      url:
        "apartment/show-listing?user=" +
        data.user +
        "&apartment=" +
        data.apartment,
    };
    return new Promise(async (resolve, reject) => {
      try {
        var res = await deleteReq("delete_user_listing", dataToSend);
        if (res.responseCode == 1) {
          // commit('setUserListing', res.data)
          resolve(1);
        }
      } catch (error) {
        reject(0);
      }
    });
  },

  async updateUserListing({ commit }, data) {
    // Data must have uuid, token, apartment
    let dataToSend = {
      ...data,
    };
    return new Promise(async (resolve, reject) => {
      try {
        var res = await putReq("update_user_listing", dataToSend);
        if (res.responseCode == 1) {
          // commit('setUserListing', res.data)
          resolve(1);
        }
      } catch (error) {
        reject(0);
      }
    });
  },

  // async updateListing({commit}, data){
  //   commit("resetState", data);
  // }
};

const mutations = {
  setValue: (state, newData) => (state[newData["key"]] = newData["value"]),
  resetState: (state, newState) => (state = newState),
  setUserListing: (state, newUserListing) =>
    (state.userListing = newUserListing),
};

export default {
  state,
  actions,
  getters,
  mutations,
};
