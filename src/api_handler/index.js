import axios from "axios";

const BASE_URL = process.env.VUE_APP_BASE_URL;
const API_URL = BASE_URL + "api/v1/";
const URLS = {
  register: "auth/register",
  login: "auth/login",
  add_apartment: "apartment/add",
  social_auth: "auth/social/auth",
  apartment_all: "apartment/all",
  apartment_images: "apartment/images/get?apartment=",
  search_apartment: "",
  update_image: "auth/user/update-profile-image",
  get_user_listing: "",
  delete_user_listing: "apartment/show-listing",
  update_user_listing: "apartment/update-listing",
  get_user_payment: "",
  add_user_payment: "auth/user/update-payment",
  get_user_info: "auth/user/profile",
  update_user_info: "auth/update",
  verify_email: "auth/verify-email",
  all_blog_post: "blog/posts/all",
  resend_pin: "auth/verification-pin/resend",
  forget_password_request: "auth/user/reset-password",
  reset_password: "user/reset-password-confirm",
  apartment_get: "",
  book_apartment: "apartment/book",
  confirm_booking: "payment/pay/confirm",
  reviews_for_me: "auth/user/review-on-my-apartment",
  reviews_from_me: "auth/user/review-by-me",
};

const getReq = async function(urlKey, data) {
  const CONFIG = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + data.token,
    },
  };

  return new Promise((resolve, reject) => {
    let url = API_URL;
    if (data.url == null) {
      url += URLS[urlKey];
    } else {
      url += data.url;
    }

    axios
      .get(url, CONFIG)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

const postReq = async function(urlKey, data) {
  let url = "";
  let CONFIG = {};

  if (urlKey == "reset_password") {
    CONFIG = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + data.tokenToSend,
      },
    };
    url = BASE_URL + URLS[urlKey] + "/" + data.message + "/";
  } else {
    CONFIG = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + data.token,
      },
    };
    url = API_URL + URLS[urlKey];
  }

  return new Promise((resolve, reject) => {
    axios
      .post(url, data, CONFIG)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

const putReq = async function(urlKey, data) {
  const CONFIG = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + data.token,
    },
  };
  return new Promise((resolve, reject) => {
    let url = API_URL + URLS[urlKey];

    axios
      .put(url, data, CONFIG)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

const deleteReq = async function(urlKey, data) {
  const CONFIG = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + data.token,
    },
  };
  return new Promise((resolve, reject) => {
    let url = API_URL;
    if (data.url == null) {
      url += URLS[urlKey];
    } else {
      url += data.url;
    }

    axios
      .delete(url, CONFIG)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

export { postReq, getReq, deleteReq, putReq };
