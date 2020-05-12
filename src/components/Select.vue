<template>
  <select
    :style="style"
    v-on:change="$emit('selectChangeHandler', { step: step, data: data })"
    class="select"
    v-model="data"
  >
    <option v-for="item in getOptions()" :key="item.value" :value="item.value">
      {{ item.text }}
    </option>
  </select>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "",
  data: function() {
    return {
      data: "any",
      style: "width:" + this.width,
    };
  },
  props: {
    model: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
    step: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapGetters(["getListingState"]),
    generateList(start, end) {
      var list = [];

      for (var i = start; i <= end; i++) {
        list.push({
          text: i + " bedroom",
          value: "" + i,
        });
      }

      return list;
    },
    getOptions() {
      let selectOptions = this.options;

      const storeData = this.$store.getters.getListingState;

      if (
        this.step == "number_of_bedroom" &&
        storeData["listing_type"] &&
        storeData["listing_type"] == "C"
      ) {
        let newSelectOptions = this.generateList(10, 50);
        selectOptions = newSelectOptions;
      } else if (
        this.step == "number_of_bedroom" &&
        storeData["what_guest_will_have"] &&
        storeData["what_guest_will_have"] == "full_place"
      ) {
        let newSelectOptions = this.options.slice(3, this.options.length);
        selectOptions = newSelectOptions;
      }
      return selectOptions;
    },
  },
  created() {
    let dataInStore = this.$store.getters.getListingState[this.step];
    if (dataInStore) {
      if (dataInStore.length > 1) {
        this.data = dataInStore;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.select {
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  height: 40px;
  font-size: 16px;
  color: #404040;
  opacity: 0.7;

  /* for Firefox */
  // -moz-appearance: none;
  // /* for Chrome */
  // -webkit-appearance: none;
}

.select:focus {
  outline: none;
}
</style>
