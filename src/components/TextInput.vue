<template>
  <div
    @click="showOutline = true"
    @mouseleave="showOutline = false"
    class="textinput"
    :style="getClass()"
  >
    <input
      ref="inputRef"
      @keyup="$emit('inputHandler', { data: model, step: step })"
      v-model="model"
      :class="{ fullWidth: isFullWidth, halfWidth: !isFullWidth }"
      :type="type"
      :placeholder="hint"
    />
    <i v-if="icon" :class="icon"></i>
  </div>
</template>

<script>
export default {
  name: "text_input",
  data: function() {
    return {
      showOutline: false,
      model: this.value ? this.value : "",
      // getClass: ""
    };
  },
  methods: {
    getClass() {
      //   var inputRef = this.$refs.inputRef
      // if(inputRef){
      // }
      return this.showOutline ? "border: 1px solid #3A85FC !important;" : "";
    },
  },

  props: {
    value: {
      type: String,
      required: false,
    },
    icon: {
      required: false,
      type: String,
    },
    hint: {
      type: String,
      required: true,
    },
    isFullWidth: {
      type: Boolean,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    step: {
      type: String,
      required: true,
    },
  },
  updated() {
    // const store = this.$store.getters.getListingState;
    // let dataInStore = store[this.step];
    // if (dataInStore && dataInStore.toString().length > 0) {
    //   this.model = dataInStore.toString();
    // }
  },
  created() {
    const store = this.$store.getters.getListingState;
    let dataInStore = store[this.step];
    window.console.log(`input created called for ${this.step}`)
    if (dataInStore && dataInStore.toString().length > 0) {
      this.model = dataInStore.toString();
    }
  },
};
</script>

<style lang="scss" scoped>
.fullWidth {
  width: 100%;
}

.halfWidth {
  width: 50%;
}

.textinput {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  input {
    width: 92%;
    height: 40px;
    padding: 10px 10px;
    border: none;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: rgba(106, 106, 106, 0.7);
    border-radius: 5px 0 0 5px;
  }

  i {
    font-size: 20px !important;
    padding: 0 10px;
    color: #3a85fc;
  }
  input:focus {
    outline: none;
  }

  ::-webkit-input-placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: rgba(106, 106, 106, 0.7);
  }
}
.border {
  border: 1px solid #3a85fc !important;
}
</style>
