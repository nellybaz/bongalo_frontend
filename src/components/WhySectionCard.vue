<template>
  <div class="why-card">
    <div class="card">
      <img :src="require(`../assets/images/${content.image}`)" alt="" />
      <p class="title">
        {{ content.title }}
      </p>
    </div>
    <p class="desc">
      {{ content.text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "why-card",
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.why-card {
  width: 100%;

  .card {
    padding: 0 30px;
    width: 100%;
    height: 65px;
    background: #ffffff;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    align-self: left;
    display: grid;
    grid-template-columns: 1fr 4fr;

    img {
      align-self: center;
    }

    .title {
      width: 100%;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 20px;
      display: flex;
      align-items: center;
      text-align: justify;
      color: #404040;
    }
  }

  .desc {
    // border:1px solid red;
    margin-top: 30px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: justify;
    color: #6a6a6a;
  }
}
</style>
