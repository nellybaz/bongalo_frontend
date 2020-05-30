<template>
  <div class="explore-card">
    <img :src="require(`../assets/images/${item.image}`)" alt="" />
    <p>
      {{ item.text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "explore-card",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.explore-card {
  width: 100%;

  cursor: pointer;
  display: grid;
  grid-template-columns: 3fr 5fr;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  img {
    height: 78px;
    width: 100%;
    object-fit: contain;
  }

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    margin-left: 15%;
    color: #404040;
  }
}
</style>
