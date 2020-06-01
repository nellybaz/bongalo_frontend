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
      <label for="select-below">UPLOAD YOUR RESUME</label>
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
  methods: {},
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  .file-select {
    margin-top: 60px !important;
    font-size: 12px !important;
    label {
      border: 1px dashed #918f8f;
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
      position: absolute;
    }
  }
  .btn-div {
    button {
      float: left !important;
      // border: 1px solid red !important;
      // margin-bottom: 20px !important;
      // font-size: 10px !important;
    }
  }
}

.apply-section {
  margin-top: 50px;
  margin-bottom: 30px;
  width: 50%;

  .btn-div {
    button {
      float: right;
    }
    position: !important;
  }

  .file-select {
    margin-top: 60px !important;

    label {
      border: 1px dashed #b4b4b4;
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
      position: absolute;
    }
  }
}
</style>
