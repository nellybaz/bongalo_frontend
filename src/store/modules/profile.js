var example_review = [
  {
    id: "review_id",
    giver: "user id",
    review: "message from review 1",
  },
  {
    id: "review_id2",
    giver: "user id",
    review: "message from review 2",
  },
  {
    bank: "Equity Bank",
  },
  {
    account_name: "Musa Kanneh",
  },
];

import { getReq } from "../../api_handler";

const state = {
  reviews_from_me: [],
  reviews_for_me: [],

  // bank info
  bank_names: null,
  bank_account_names: null,
  bank_account_number: null,
  swift_code: null,

  // mobile wallet
  wallet_account_name: null,
  wallet_account_number: null,
};

const getters = {
  getReviewFromMe: (state) => state.reviews_from_me,
  getReviewForMe: (state) => state.reviews_for_me,

  getBankName: (state) => state.bank_names,
  getBankAccountName: (state) => state.bank_account_names,
  getBankAccountNumber: (state) => state.bank_account_number,
  getSwiftCode: (state) => state.swift_code,

  getWalletAccountName: (state) => state.wallet_account_name,
  getWalletAccountNUmber: (state) => state.wallet_account_number,
};

const actions = {
  // be called from the app
  // fetch the date from backend
  // update the store using the mutations
  async getReviewsForMe({ commit }, data) {
    return new Promise(async (resolve, reject) => {
      try {
        var res = await getReq("reviews_for_me", data);
        window.console.log("response is below");
        window.console.log(res);
        if (res["responseCode"] == 1) {
          commit("setReviewForMe", res["data"]);
          resolve(1);
        }
      } catch (error) {
        commit("setReviewForMe", example_review);
        reject(error);
      }
    });
  },

  async getReviewsFromMe({ commit }, data) {
    return new Promise(async (resolve, reject) => {
      try {
        var res = await getReq("reviews_from_me", data);
        if (res["responseCode"] == 1) {
          commit("setReviewFromMe", res["data"]);
          resolve(1);
        }
      } catch (error) {
        commit("setReviewFromMe", example_review);
        reject(error);
      }
    });
  },

  //   actions for geeting bank details
  async getBankNames({ commit }, data) {
    return new Promise(async (resolve, reject) => {
      try {
        var res = await getReq("bank_names", data);
        if (res["responseCode"] == 1) {
          commit("setBankName", res["data"]);
          resolve(1);
        }
      } catch (error) {
        commit("setBankName", example_review);
        reject(error);
      }
    });
  },

  async getBankAccountNames({ commit }, data) {
    return new Promise(async (resolve, reject) => {
      try {
        var res = await getReq("bank_account_names", data);
        if (res["responseCode"] == 1) {
          commit("setBankAccountName", res["data"]);
          resolve(1);
        }
      } catch (error) {
        commit("setBankAccountName", example_review);
        reject(error);
      }
    });
  },
};

const mutations = {
  setReviewForMe: (state, newValue) => (state.reviews_for_me = newValue),
  setReviewFromMe: (state, newValue) => (state.reviews_from_me = newValue),

  setBankName: (state, newValue) => (state.bank_names = newValue),
  setBankAccountName: (state, newValue) =>
    (state.bank_account_names = newValue),
  setBankAccountNumber: (state, newValue) =>
    (state.bank_account_number = newValue),
  setSwiftCode: (state, newValue) => (state.swift_code = newValue),

  setWalletAccountName: (state, newValue) =>
    (state.wallet_account_name = newValue),
  setWalletAccountNumber: (staet, newValue) =>
    (state.wallet_account_number = newValue),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
