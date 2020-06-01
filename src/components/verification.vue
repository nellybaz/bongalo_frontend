<template>
  <div class="verification">
    <div :style="getGivenStyle()" class="confirm-verification">
      <br />
      <h2>
        {{ title }}
      </h2>
      <br />

      <div>
        <img
          style="width: auto; margin: 2rem;"
          src="../assets/images/v-icon.png"
          alt="bongalo-careers"
        />
      </div>
      <p>
        {{ text1 }}

        <strong>
          {{ strongText }} </strong
        ><br />
        {{ text2 }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "verification",
  props: {
    title: {
      required: true,
      type: String,
    },
    text1: {
      required: true,
      type: String,
    },
    text2: {
      required: true,
      type: String,
    },
    strongText: {
      required: true,
      type: String,
    },
    width: {
      type: String,
    },
    height: {
      type: String,
    },
  },
  methods: {
    getGivenStyle() {
      var style = "";
      if (this.width) {
        style += "width:" + this.width + ";";
      }
      return style;
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  * {
    width: auto !important;
  }
  p {
    margin: 10px !important;
  }
}

.verification {
  .confirm-verification {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;
    height: auto;
    padding: 2em 0;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    background: #ffffff;
    margin: 4rem 0rem;

    p {
      font-size: 14px;
      width: 52%;
      text-align: center;
      line-height: 20px;
      color: #404040;
    }

    div {
      background: #50d75e;
      height: 110px;
      width: 110px;
      border-radius: 50%;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}
</style>
