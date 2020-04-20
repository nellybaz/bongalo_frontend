<template>
  <div class="apply-section">
    <StyledInput type="text" placeholder="Enter your full name" label="NAME" />

    <br />
    <StyledInput
      type="text"
      placeholder="Enter your email address"
      label="EMAIL"
    />
    <br />

    <StyledInput
      type="text"
      placeholder="Enter your phone number"
      label="PHONE NUMBER"
    />

    <br />

    <div class="file-select">
      <label for="select-below"
        >UPLOAD YOUR RESUME</label
      >
      <br />
      <br />
      <input ref="input_select_ref" type="file" id="select-below" />
    </div>

    <br />
    <br />

    <StyledInput
      :isTextArea="true"
      type="text"
      placeholder=""
      label="MESSAGE"
    />

    <br />

    <div class="btn-div">
        <Button label="SUBMIT APPLICATION"></Button>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";
import StyledInput from "../components/StyledInput";

export default {
  name: "apply-section",
  components: {
    Button,
    StyledInput,
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.apply-section {
  margin-top: 50px;
  margin-bottom: 30px;
  width: 50%;

  .btn-div{
      button{
          float:right;
      }
  }

  .file-select {
      margin-top: 60px;
    label {
      border: 1px dashed #B4B4B4;
      font-style: normal;
      font-weight: normal;
      border-radius: 3px;
      color: #3a85fc;
      cursor: pointer;
      padding: 3em 1em;
    }

    input {
      height: 0.1px !important;
      width: 0.1px !important;
      //   display: none;
      position: absolute;
    }
  }
}
</style>
