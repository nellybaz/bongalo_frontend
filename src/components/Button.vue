<template>
  <button
    v-on:click="$emit('handleClick')"
    :style="style"
    :class="{ fullWidth: isFullWidth, halfWidth: !isFullWidth }"
    class="main-button"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "main-button",
  data: function () {
    return {
      style: "width:" + this.width,
    };
  },
  props: {
    label: {
      type: String,
      required: true,
    },

    isFullWidth: {
      type: Boolean,
      required: true,
    },
    width: {
      type: String,
      required: false,
    },
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

.main-button {
  cursor: pointer;
  height: 50px;
  background: #3a85fc;
  border-radius: 5px;
  border: none;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
}

button:focus {
  outline: none;
}
</style>
