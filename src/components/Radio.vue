<template>
  <div class="radio">
    <div v-for="item in getOptions()" :key="item.text" class="radio-item">
      <input
        v-on:change="$emit('radioChangeHandler', { data: model, step: step })"
        v-model="model"
        :value="item.value"
        id="1"
        class="radio"
        type="radio"
      />
      <div>
        <p class="title">
          {{ item.text }}
        </p>
        <p class="desc">
          {{ item.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "radio_btn",
  data: function() {
    return {
      model: "",
    };
  },
  props: {
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
    getOptions() {
      let optionsToUse = this.options;
      return optionsToUse;
    },
  },
  updated() {
    const store = this.$store.getters.getListingState;
    let dataInStore = store[this.step];
    if (dataInStore && dataInStore.toString().length > 0) {
       this.model = dataInStore.toString();
    }
  },
  created() {
    const store = this.$store.getters.getListingState;
    let dataInStore = store[this.step];
    if (dataInStore && dataInStore.toString().length > 0) {
       this.model = dataInStore.toString();
    }
  },
};
</script>

<style lang="scss" scoped>
.radio {
  padding: 0 !important;
  width: 100%;
  // border:1px solid red;

  .radio-item {
    // border:1px solid red;
    display: grid;
    grid-template-columns: 1fr 20fr;
    margin-bottom: 30px;

    div {
      position: relative;
      top: -5px;
      .title {
        color: rgba(64, 64, 64, 0.7);
        font-size: 16px;
      }
      .desc {
        color: rgba(64, 64, 64, 0.7);
        font-size: 14px;
      }
    }
  }
}
</style>
