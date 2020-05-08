import { getReq, postReq, putReq } from "../../api_handler";
import firebase from "firebase";

const setRegisteredUserData = function(responseData, { commit }) {
  //set window data
  if (responseData.data.isLogOut) {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("uuid");
    window.localStorage.removeItem("first_name");
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("profile_image");
  } else {
    responseData.data["token"]
      ? window.localStorage.setItem("token", responseData.data["token"])
      : "";
    responseData.data["uuid"]
      ? window.localStorage.setItem("uuid", responseData.data["uuid"])
      : "";
    responseData.data["first_name"]
      ? window.localStorage.setItem(
          "first_name",
          responseData.data["first_name"]
        )
      : "";
    responseData.data["email"]
      ? window.localStorage.setItem("email", responseData.data["email"])
      : "";

    if (
      responseData.data["profile_image"] &&
      responseData.data["profile_image"].length > 0
    ) {
      window.localStorage.setItem(
        "profile_image",
        responseData.data["profile_image"]
      );
    }
  }

  // set app data

  responseData.data.token ? commit("setToken", responseData.data.token) : "";
  responseData.data.uuid ? commit("setUuid", responseData.data.uuid) : "";
  responseData.data.first_name
    ? commit("setFirstName", responseData.data.first_name)
    : "";
  responseData.data.email ? commit("setEmail", responseData.data.email) : "";
};

const uploadImage = async function(image, uuid) {
  let res = await firebase
    .storage()
    .ref(
      "property/images/--bongalo_img--" +
        uuid +
        "_" +
        Date.now() +
        "-bongalo_img-"
    );
  let snapshot = await res.put(image);
  let downloadedUrl = await snapshot.ref.getDownloadURL();
  return downloadedUrl;
};

const state = {
  token: window.localStorage.getItem("token") || null,
  uuid: window.localStorage.getItem("uuid") || null,
  firstName: window.localStorage.getItem("first_name") || null,
  email: window.localStorage.getItem("email") || null,
  userPaymentNumber: null,
  userInfo: null,
};

const getters = {
  isLoggedIn: (state) => state.token && state.token != null,
  getToken: (state) => state.token,
  getUuid: (state) => state.uuid,
  getFirstName: (state) => state.firstName,
  getUserPaymentNumber: (state) => state.userPaymentNumber,
  getUserInfo: (state) => state.userInfo,
};

const actions = {
  async isAuthenticated() {
    // firebase.auth.
  },
  async updateImage({ commit }, data) {
    return new Promise(async (resolve, reject) => {
      // Data should have uuid, token and image object
      let imageUrl = await uploadImage(data.imageObject, data.uuid);
      let newData = {
        ...data,
        image: imageUrl,
      };
      try {
        var res = await postReq("update_image", newData);
        if (res.responseCode == 1) {
          window.localStorage.setItem("profile_image", imageUrl);
          resolve(1);
        }
      } catch (error) {
        reject(0);
      }
    });
  },
  async socialSignin({ commit }, data) {
    return new Promise((resolve, reject) => {
      if (data.provider == "google") {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase
          .auth()
          .signInWithPopup(provider)
          .then(async function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            const userData = {
              username: user.email,
              email: user.email,
              first_name: user.displayName.split(" ")[0],
              last_name: user.displayName.split(" ")[1] || "",
              password: "social",
              is_admin: false,
              is_active: true,
              isLogOut: false,
            };

            try {
              var res = await postReq("social_auth", userData);
              if (res.responseCode == 1) {
                setRegisteredUserData(res, { commit });
                resolve(1);
              }
            } catch (error) {
              reject(-1);
            }
            // setRegisteredUserData(userData, {commit});
            // resolve(1);
            // ...
          })
          .catch(function(error) {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // // The email of the user's account used.
            // var email = error.email;
            // // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // // ...
            reject(0);
          });
      }
    });
  },
  async register({ commit }, data) {
    return new Promise(async (resolve, reject) => {
      try {
        var res = await postReq("register", data);
        if (res.responseCode == 1) {
          firebase
            .auth()
            .createUserWithEmailAndPassword(data.email, data.password);
          resolve(1);
        }
      } catch (error) {
        reject(error);
      }
    });
  },

  async logout({ commit }, data) {
    let logoutData = {
      data: {
        token: null,
        uuid: null,
        first_name: null,
        email: null,
        isLogOut: true,
      },
    };
    return new Promise((resolve, reject) => {
      setRegisteredUserData(logoutData, { commit });
      resolve(1);
    });
  },

  async getPaymentMethod({ commit }, data) {
    let dataToSend = {
      ...data,
      url: "auth/user/get-payment?user=" + data.uuid,
    };
    return new Promise(async (resolve, reject) => {
      try {
        var res = await getReq("get_user_payment", dataToSend);
        if (res.responseCode == 1) {
          commit("setUserPaymentNumber", res.data);
          resolve(1);
        }
      } catch (error) {
        reject(0);
      }
    });
  },

  async addPaymentMethod({ commit }, data) {
    let dataToSend = {
      ...data,
    };
    return new Promise(async (resolve, reject) => {
      try {
        var res = await postReq("add_user_payment", dataToSend);
        if (res.responseCode == 1) {
          commit("setUserPaymentNumber", res.data);
          resolve(1);
        }
      } catch (error) {
        reject(0);
      }
    });
  },

  async getUserInfo({ commit }, data) {
    let dataToSend = {
      ...data,
      url: "auth/user/profile?user=" + data.uuid,
    };
    return new Promise(async (resolve, reject) => {
      try {
        var res = await getReq("get_user_info", dataToSend);
        if (res.responseCode == 1) {
          commit("setUserInfo", res.data);
          resolve(1);
        }
      } catch (error) {
        reject(0);
      }
    });
  },

  async updateUserInfo({ commit }, data) {
    let dataToSend = {
      ...data,
    };
    return new Promise(async (resolve, reject) => {
      try {
        var res = await putReq("update_user_info", dataToSend);
        if (res.responseCode == 1) {
          setRegisteredUserData(
            { data: { ...data, isLogOut: false } },
            { commit }
          );
          resolve(1);
        }
      } catch (error) {
        reject(0);
      }
    });
  },

  async verifyEmail({ commit }, data) {
    return new Promise(async (resolve, reject) => {
      try {
        var res = await postReq("verify_email", data);
        if (res.responseCode == 1) {
          setRegisteredUserData(res, { commit });
          resolve(1);
        } else {
          reject(res.message);
        }
      } catch (error) {
        reject(error);
      }
    });
  },
  async login({ commit }, data) {
    return new Promise(async (resolve, reject) => {
      try {
        var res = await postReq("login", data);
        if (res.responseCode == 1) {
          setRegisteredUserData(res, { commit });
          resolve(1);
        } else {
          reject(res.message);
        }
      } catch (error) {
        reject(error);
      }
    });
  },

  async resendVerificationPin({ commit }, data) {
    return new Promise(async (resolve, reject) => {
      try {
        var res = await postReq("resend_pin", data);
        if (res.responseCode == 1) {
          resolve(1);
        } else {
          reject(res.message);
        }
      } catch (error) {
        reject(error);
      }
    });
  },

  async sendForgetPasswordLink({ commit }, data) {
    return new Promise(async (resolve, reject) => {
      try {
        var res = await postReq("forget_password_request", data);
        if (res.responseCode == 1) {
          resolve(res);
        } else {
          reject(res.message);
        }
      } catch (error) {
        reject(error);
      }
    });
  },

  async resetPassword({ commit }, data) {
    return new Promise(async (resolve, reject) => {
      try {
        var res = await postReq("reset_password", data);
        if (res.responseCode == 1) {
          resolve(1);
        } else {
          reject(res.message);
        }
      } catch (error) {
        reject(error);
      }
    });
  },
};

const mutations = {
  setToken: (state, newToken) => (state.token = newToken),
  setUuid: (state, newUuid) => (state.uuid = newUuid),
  setFirstName: (state, newFirstName) => (state.firstName = newFirstName),
  setEmail: (state, newEmail) => (state.email = newEmail),
  setUserPaymentNumber: (state, newPaymentNumber) =>
    (state.userPaymentNumber = newPaymentNumber),
  setUserInfo: (state, newUserInfo) => (state.userInfo = newUserInfo),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
