<template>
  <div class="checkbox">
    <label v-for="value in item" :key="value.text" class="container">
      {{
          value.text
      }}
      <input @change="$emit('checkBoxHandler', {step:step, data:model})" type="checkbox" v-model="model" :value="value.value"/>
      <span class="checkmark"></span>
    </label>
  </div>
</template>


<script>
export default {
  name: "checkbox",
  props: {
    item: {
      type: Array,
      required: true
    },
    // model: {
    //   type: Array,
    //   required: true
    // },
    step: {
      type: String,
      required: true
    },
    
  },
  data: function() {
    return {
      model: ""
    };
  },
  created(){
    let dataInStore = this.$store.getters.getListingState[this.step];
         if(dataInStore || dataInStore.length > 1 ){
             this.model = dataInStore;
         }
  }
};
</script>


<style lang='scss' scoped>
.checkbox {
  width: 100%;

  /* The container */
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 15px;
    cursor: pointer;
    font-size: 14px;
    color: rgba(64, 64, 64, 0.7);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    border:1px solid #3A85FC;
    background-color: #fff;
    border-radius: 3px;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #3A85FC;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 4px;
    top: 0px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
</style>