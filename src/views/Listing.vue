<template>
  <div class="listing">
    <Navigation></Navigation>

    <div class="listing-content-wrapper">
      <modal name="no-image-modal" :height="500">
        <div class="image-modal-wrapper">
          <h2>Profile image is required for listing properties</h2>

          <div class="image-modal">
            <input
              id="profile-imagee-input"
              class="image_select"
              type="file"
              multiple
              @change="onProfileChange"
            />
            <label class="image_select_label" for="profile-imagee-input">
              <div class="div">
                <div>
                  <p>Upload Profile photo</p>
                  <small>or drag it in</small>
                </div>
              </div>
            </label>
            <div v-if="profile_img" class="preview">
              <img :src="profile_img_link" />
            </div>
          </div>
          <button @click="$modal.hide('no-image-modal')">OK</button>
        </div>
      </modal>

      <Paragraph
        :text="title_text()"
        size="20"
        weight="bold"
        color="#404040"
      ></Paragraph>

      <div class="progress-box-wrapper">
        <div :style="style()" class="box-paint"></div>

        <div v-if="step == 1" class="box-content">
          <div v-if="flow == 1">
            <Paragraph
              text="What kind of place are you listing ?"
              size="26"
              weight="bold"
              color="#404040"
            ></Paragraph>

            <br /><br />
            <Paragraph
              text="First let's narrow things down"
              size="16"
              weight="bold"
              color="rgba(64, 64, 64, 0.7)"
            ></Paragraph>
            <Select
              v-on:selectChangeHandler="handleSelect"
              step="listing_type"
              :options="steps.one.listing_type"
              width="300px"
              :model="steps.one.apartmentTypeModel"
            ></Select>
            <br />
            <small
              class="listing-error"
              v-if="showErrors && checkIfShouldShowError('listing_type')"
            >
              *{{ errorList["listing_type"] }}
            </small>

            <br />
            <br />
            <br />

            <div class="commercial-div" v-if="steps.one.showCommercialText">
              <Paragraph
                text="This listing will go through review"
                size="22"
                weight="bold"
                color="rgba(64, 64, 64, 0.7)"
              ></Paragraph>
              <Paragraph
                text="A Boutique Hotel on Airbnb should be a licensed hospitality business and will go through review to make sure it meets our criteria. This helps listings appear in the right searches and lets guests know what to expect."
                size="16"
                weight="normal"
                color="rgba(64, 64, 64, 0.7)"
              ></Paragraph>
              <Paragraph
                text="If that doesn’t sound like this property, change the property type."
                size="16"
                weight="normal"
                color="rgba(64, 64, 64, 0.7)"
              ></Paragraph>
            </div>

            <br />
            <br />

            <div v-if="showWhatWillGuestHave" style="padding: 0 !important;">
              <Paragraph
                text="What will guest have?"
                size="16"
                weight="bold"
                color="rgba(64, 64, 64, 0.7)"
              ></Paragraph>
              <small
                class="listing-error"
                v-if="
                  showErrors && checkIfShouldShowError('what_guest_will_have')
                "
              >
                *{{ errorList["what_guest_will_have"] }}
              </small>
              <br />
              <br />
              <Radio
                v-on:radioChangeHandler="handleRadio"
                step="what_guest_will_have"
                :options="steps.one.what_guest_will_have"
              ></Radio>
            </div>

            <br /><br /><br />

            <div class="action-section" v-if="showWhatWillGuestHave">
              <div></div>
              <Button
                :isFullWidth="false"
                v-on:handleClick="processSteps(1)"
                label="Next"
                width="120px"
              ></Button>
            </div>
          </div>

          <div v-if="flow == 2">
            <Paragraph
              text="How many guest can your place accomodate ?"
              size="26"
              weight="bold"
              color="#404040"
            ></Paragraph>

            <br /><br />
            <Paragraph
              text="Check that you have enough beds to acoomodate all your guests comfortably"
              size="16"
              weight="normal"
              color="rgba(64, 64, 64, 0.7)"
            ></Paragraph>
            <div v-if="shouldShowGuestNumber" style="padding:0 !important">
              <Incrementer
                @incrementerChangeHandler="handleIncrementer"
                step="number_of_guest"
                label="Guest"
              ></Incrementer>
              <small
                class="listing-error"
                v-if="showErrors && checkIfShouldShowError('number_of_guest')"
              >
                *{{ errorList["number_of_guest"] }}
              </small>
            </div>
            <br />
            <br />
            <br />

            <Paragraph
              text="How many total bedrooms available?"
              size="16"
              weight="normal"
              color="rgba(64, 64, 64, 0.7)"
            ></Paragraph>
            <br />
            <Select
              @selectChangeHandler="handleSelect"
              step="number_of_bedroom"
              :options="steps.one.number_of_bedrooms"
              width="300px"
              model="3"
            ></Select>
            <br /><small
              class="listing-error"
              v-if="showErrors && checkIfShouldShowError('number_of_bedroom')"
            >
              *{{ errorList["number_of_bedroom"] }}
            </small>
            <div class="action-section">
              <button class="button" v-on:click="processSteps(0)">
                <i class="fas fa-chevron-left"></i> Back
              </button>
              <Button
                :isFullWidth="false"
                v-on:handleClick="processSteps(1)"
                label="Next"
                width="120px"
              ></Button>
            </div>
          </div>

          <div v-if="flow == 3">
            <Paragraph
              text="How many bathrooms ?"
              size="26"
              weight="bold"
              color="#404040"
            ></Paragraph>

            <br /><br />
            <Paragraph
              text="Check that you have enough bathrooms to acoomodate all your guests comfortably"
              size="16"
              weight=""
              color="rgba(64, 64, 64, 0.7)"
            ></Paragraph>
            <Incrementer
              @incrementerChangeHandler="handleIncrementer"
              step="number_of_bathroom"
              label="Bathrooms"
              :start="1"
            ></Incrementer>

            <br /><small
              class="listing-error"
              v-if="showErrors && checkIfShouldShowError('number_of_bathroom')"
            >
              *{{ errorList["number_of_bathroom"] }}
            </small>
            <br />
            <br />
            <br />
            <div class="action-section">
              <button class="button" v-on:click="processSteps(0)">
                <i class="fas fa-chevron-left"></i> Back
              </button>
              <Button
                :isFullWidth="false"
                v-on:handleClick="processSteps(1)"
                label="Next"
                width="120px"
              ></Button>
            </div>
          </div>

          <div v-if="flow == 4">
            <Paragraph
              text="Where is your place located ?"
              size="26"
              weight="bold"
              color="#404040"
            ></Paragraph>

            <br /><br />
            <Paragraph
              text="Guest will only get your exact location when they have made a reservation"
              size="16"
              weight=""
              color="rgba(64, 64, 64, 0.7)"
            ></Paragraph>

            <br />
            <Paragraph
              text="Country"
              size="16"
              weight=""
              color="rgba(64, 64, 64, 0.7)"
            ></Paragraph>

            <Select
              @selectChangeHandler="handleSelect"
              step="property_country"
              :options="countries"
              width="100%"
              model=""
            ></Select>

            <small
              class="listing-error"
              v-if="showErrors && checkIfShouldShowError('property_country')"
            >
              *{{ errorList["property_country"] }} </small
            ><br />

            <Paragraph
              text="Street address"
              size="16"
              weight=""
              color="rgba(64, 64, 64, 0.7)"
            ></Paragraph>
            <Input
              @inputHandler="handleInput"
              step="property_address"
              :isFullWidth="false"
              type="text"
              class="input"
              hint="KG 7 Ave"
            />
            <small
              class="listing-error"
              v-if="showErrors && checkIfShouldShowError('property_address')"
            >
              *{{ errorList["property_address"] }}
            </small>

            <br />
            <div v-if="countryIsSelected" class="state-city">
              <div>
                <Paragraph
                  text="City"
                  size="16"
                  weight=""
                  color="rgba(64, 64, 64, 0.7)"
                ></Paragraph>
                <Select
                  @selectChangeHandler="handleSelect"
                  step="property_city"
                  :options="cities"
                  width="100%"
                  model=""
                ></Select>
                <small
                  class="listing-error"
                  v-if="showErrors && checkIfShouldShowError('property_city')"
                >
                  *{{ errorList["property_city"] }}
                </small>
              </div>
            </div>

            <div class="action-section">
              <button class="button" v-on:click="processSteps(0)">
                <i class="fas fa-chevron-left"></i> Back
              </button>
              <Button
                :isFullWidth="false"
                v-on:handleClick="processSteps(1)"
                label="Next"
                width="120px"
              ></Button>
            </div>
          </div>

          <div v-if="flow == 5">
            <Paragraph
              text="What amenities do you offer?"
              size="26"
              weight="bold"
              color="#404040"
            ></Paragraph>

            <br /><br />
            <Paragraph
              text="These are just the amenities that guest usually expect, you can add more after you have published "
              size="16"
              weight=""
              color="rgba(64, 64, 64, 0.7)"
            ></Paragraph>

            <small
              class="listing-error"
              v-if="showErrors && checkIfShouldShowError('amenities')"
            >
              *{{ errorList["amenities"] }}
            </small>
            <br />

            <CheckBox
              @checkBoxHandler="handleCheckBox"
              step="amenities"
              class="checkbox-item"
              :model="steps.one.amenitiesValue"
              :item="steps.one.amenities"
            />

            <div class="action-section">
              <button class="button" v-on:click="processSteps(0)">
                <i class="fas fa-chevron-left"></i> Back
              </button>
              <Button
                :isFullWidth="false"
                v-on:handleClick="processSteps(1)"
                label="Next"
                width="120px"
              ></Button>
            </div>
          </div>

          <div v-if="flow == 6">
            <Paragraph
              text="What extras do you offer?"
              size="26"
              weight="bold"
              color="#404040"
            ></Paragraph>

            <br /><br />
            <Paragraph
              text="These are just the extra amenities/spaces you can offer your guest"
              size="16"
              weight=""
              color="rgba(64, 64, 64, 0.7)"
            ></Paragraph>
            <br />

            <CheckBox
              @checkBoxHandler="handleCheckBox"
              step="extras"
              class="checkbox-item"
              :model="steps.one.extrasValue"
              :item="steps.one.extras"
            />

            <div class="action-section">
              <button class="button" v-on:click="processSteps(0)">
                <i class="fas fa-chevron-left"></i> Back
              </button>
              <Button
                :isFullWidth="false"
                v-on:handleClick="processSteps(1)"
                label="Next"
                width="120px"
              ></Button>
            </div>
          </div>

          <div v-if="flow == 7">
            <Paragraph
              text="What house rules do have ?"
              size="26"
              weight="bold"
              color="#404040"
            ></Paragraph>
            <br /><br />
            <Paragraph
              text="Guest will be informed before hand of these rules "
              size="16"
              weight=""
              color="rgba(64, 64, 64, 0.7)"
            ></Paragraph>

            <small
              class="listing-error"
              v-if="showErrors && checkIfShouldShowError('rules')"
            >
              *{{ errorList["rules"] }} </small
            ><br />

            <CheckBox
              @checkBoxHandler="handleCheckBox"
              step="rules"
              class="checkbox-item"
              :model="steps.one.rulesValue"
              :item="steps.one.houseRules"
            />

            <div class="action-section">
              <button class="button" v-on:click="processSteps(0)">
                <i class="fas fa-chevron-left"></i> Back
              </button>
              <Button
                :isFullWidth="false"
                v-on:handleClick="processSteps(1)"
                label="Next"
                width="120px"
              ></Button>
            </div>
          </div>

          <div v-if="flow == 8">
            <h1>
              Great progress.. <br />
              Continue
            </h1>

            <div class="action-section">
              <button class="button" v-on:click="processSteps(0)">
                <i class="fas fa-chevron-left"></i> Back
              </button>
              <Button
                :isFullWidth="false"
                v-on:handleClick="processSteps(1)"
                label="Next"
                width="120px"
              ></Button>
            </div>
          </div>
        </div>

        <div v-else-if="step == 2" class="box-content">
          <div v-if="flow == 1">
            <Paragraph
              text="Add photos to your listing"
              size="26"
              weight="bold"
              color="#404040"
            ></Paragraph>

            <br />
            <Paragraph
              text="Photos help your guest imagine staying at your place. You can add minimum five and maximum ten photos"
              size="16"
              weight=""
              color="rgba(64, 64, 64, 0.7)"
            ></Paragraph>
            <br />
            <small
              class="listing-error"
              v-if="showErrors && checkIfShouldShowError('photos')"
            >
              *{{ errorList["photos"] }}
            </small>
            <small
              class="listing-error"
              v-else-if="showErrors && checkIfShouldShowError('photosMin')"
            >
              *{{ errorList["photosMin"] }}
            </small>
            <small
              class="listing-error"
              v-else-if="showErrors && checkIfShouldShowError('photosMax')"
            >
              *{{ errorList["photosMax"] }}
            </small>
            <br />

            <input
              id="property-images-input"
              class="image_select"
              type="file"
              multiple
              @change="onFileChange"
            />
            <label class="image_select_label" for="property-images-input">
              <div class="div" @dragover.prevent @drop="onFileChange">
                <div>
                  <p>Upload photos</p>
                  <small>or drag them in</small>
                </div>
              </div>
            </label>

            <div v-if="urls" class="mainImageView">
              <!-- <div v-for="url in urls" :key="url" class=""></div>-->
              <img :src="mainUrl[0]" />
            </div>

            <div v-if="urls" class="preview">
              <div v-for="(url, index) in urls" :key="url" class="preview-item">
                <em @click="removeImage(index)">remove</em>
                <em class="swap-main-img" @click="setMainImage(index)"
                  >Make main Image</em
                >
                <img :src="url" />
              </div>
            </div>

            <div class="action-section">
              <button class="button" v-on:click="processSteps(0)">
                <i class="fas fa-chevron-left"></i> Back
              </button>
              <Button
                :isFullWidth="false"
                v-on:handleClick="processSteps(1)"
                label="Next"
                width="120px"
              ></Button>
            </div>
          </div>

          <div v-if="flow == 2">
            <Paragraph
              text="Describe your place to guests"
              size="26"
              weight="bold"
              color="#404040"
            ></Paragraph>

            <br />
            <Paragraph
              text="Write a quick summary of your place. You can highlight what’s special about your space, the neighborhood, and how you’ll interact with guests."
              size="16"
              weight=""
              color="rgba(64, 64, 64, 0.7)"
            ></Paragraph>
            <small
              class="listing-error"
              v-if="showErrors && checkIfShouldShowError('description')"
            >
              *{{ errorList["description"] }}
            </small>
            <br />

            <textarea
              @change="
                handleInput({
                  data: steps.two.description,
                  step: 'description',
                })
              "
              class="textarea"
              cols="60"
              rows="10"
              v-model="steps.two.description"
              placeholder="Describe the decor, light, what’s nearby etc.."
            >
            </textarea>

            <div class="action-section">
              <button class="button" v-on:click="processSteps(0)">
                <i class="fas fa-chevron-left"></i> Back
              </button>
              <Button
                :isFullWidth="false"
                v-on:handleClick="processSteps(1)"
                label="Next"
                width="120px"
              ></Button>
            </div>
          </div>

          <div v-if="flow == 3">
            <Paragraph
              text="Name your place"
              size="26"
              weight="bold"
              color="#404040"
            ></Paragraph>

            <br />
            <Paragraph
              text="Attract guests with a listing title that highlights what makes your place special."
              size="16"
              weight=""
              color="rgba(64, 64, 64, 0.7)"
            ></Paragraph>
            <small
              class="listing-error"
              v-if="showErrors && checkIfShouldShowError('title')"
            >
              *{{ errorList["title"] }}
            </small>
            <small
              class="listing-error"
              v-else-if="showErrors && checkIfShouldShowError('titleLength')"
            >
              *{{ errorList["titleLength"] }}
            </small>
            <br />

            <input
              @change="handleInput({ data: steps.two.title, step: 'title' })"
              v-model="steps.two.title"
              class="listing-name"
              type="text"
              placeholder="Best room in Arts Gallery, Kigali"
            />

            <div class="action-section">
              <button class="button" v-on:click="processSteps(0)">
                <i class="fas fa-chevron-left"></i> Back
              </button>
              <Button
                :isFullWidth="false"
                v-on:handleClick="processSteps(1)"
                label="Next"
                width="120px"
              ></Button>
            </div>
          </div>
          <div v-if="flow == 4">
            <h1>
              Great progress... <br />
              Continue
            </h1>

            <div class="action-section">
              <button class="button" v-on:click="processSteps(0)">
                <i class="fas fa-chevron-left"></i> Back
              </button>
              <Button
                :isFullWidth="false"
                v-on:handleClick="processSteps(1)"
                label="Next"
                width="120px"
              ></Button>
            </div>
          </div>
        </div>

        <div v-else-if="step == 3" class="box-content">
          <div v-if="flow == 1">
            <Paragraph
              text="Successful hosting starts with an accurate calendar"
              size="26"
              weight="bold"
              color="#404040"
            ></Paragraph>

            <br />
            <Paragraph
              text="Guests will book available days instantly. Only get booked when you can host by keeping your calendar and availability settings up-to-date."
              size="16"
              weight="normal"
              color="rgba(64, 64, 64, 0.7)"
            ></Paragraph>

            <Paragraph
              text="Canceling disrupts guests’ plans. If you cancel because your calendar is inaccurate, you’ll be charged a penalty fee and the dates won’t be available for anyone else to book."
              size="16"
              weight="normal"
              color="rgba(64, 64, 64, 0.7)"
            ></Paragraph>
            <small
              class="listing-error"
              v-if="
                showErrors &&
                  checkIfShouldShowError('will_update_calender_checkbox')
              "
            >
              *{{ errorList["will_update_calender_checkbox"] }}
            </small>
            <br />

            <CheckBox
              @checkBoxHandler="handleCheckBox"
              step="will_update_calender_checkbox"
              class="checkbox-item"
              :item="steps.three.update_calendar"
            />

            <div class="action-section">
              <button class="button" v-on:click="processSteps(0)">
                <i class="fas fa-chevron-left"></i> Back
              </button>
              <Button
                :isFullWidth="false"
                v-on:handleClick="processSteps(1)"
                label="Next"
                width="120px"
              ></Button>
            </div>
          </div>

          <div v-if="flow == 2">
            <Paragraph
              text="When can guest check in ?"
              size="26"
              weight="bold"
              color="#404040"
            ></Paragraph>

            <br />
            <br />

            <div class="checkin-div">
              <div>
                <Paragraph
                  text="From"
                  size="16"
                  weight="normal"
                  color="#404040"
                ></Paragraph>
                <Select
                  @selectChangeHandler="handleSelect"
                  step="checkin"
                  :options="steps.three.checkin_times"
                  width="200px"
                  model="Flexible"
                ></Select>
              </div>
              <div>
                <Paragraph
                  text="To"
                  size="16"
                  weight="normal"
                  color="#404040"
                ></Paragraph>
                <Select
                  @selectChangeHandler="handleSelect"
                  step="checkout"
                  :options="steps.three.checkin_times"
                  width="200px"
                  model="Flexible"
                ></Select>
              </div>
            </div>

            <div class="action-section">
              <button class="button" v-on:click="processSteps(0)">
                <i class="fas fa-chevron-left"></i> Back
              </button>
              <Button
                :isFullWidth="false"
                v-on:handleClick="processSteps(1)"
                label="Next"
                width="120px"
              ></Button>
            </div>
          </div>

          <div v-if="flow == 3">
            <Paragraph
              text="How long can guest stay ?"
              size="26"
              weight="bold"
              color="#404040"
            ></Paragraph>

            <br />
            <br />

            <Incrementer
              @incrementerChangeHandler="handleIncrementer"
              step="min_nights"
              label="Nights min"
              :start="1"
              :stop="30"
            ></Incrementer>
            <br />
            <Incrementer
              @incrementerChangeHandler="handleIncrementer"
              step="max_nights"
              label="Nights max"
              :start="30"
              :stop="30"
            ></Incrementer>

            <div class="action-section">
              <button class="button" v-on:click="processSteps(0)">
                <i class="fas fa-chevron-left"></i> Back
              </button>
              <Button
                :isFullWidth="false"
                v-on:handleClick="processSteps(1)"
                label="Next"
                width="120px"
              ></Button>
            </div>
          </div>

          <div v-if="flow == 4">
            <Paragraph
              text="Update your calendar"
              size="16"
              weight="bold"
              color="#404040"
            ></Paragraph>
            <Paragraph
              text="Select unavailable dates to block for this listing"
              size="16"
              weight="normal"
              color="#404040"
            ></Paragraph>

            <br />
            <br />

            <vc-date-picker
              mode="range"
              :value="null"
              color="blue"
              is-dark
              is-inline
            />

            <div class="action-section">
              <button class="button" v-on:click="processSteps(0)">
                <i class="fas fa-chevron-left"></i> Back
              </button>
              <Button
                :isFullWidth="false"
                v-on:handleClick="processSteps(1)"
                label="Next"
                width="120px"
              ></Button>
            </div>
          </div>

          <div v-if="flow == 5">
            <Paragraph
              text="Price Your Space"
              size="16"
              weight="bold"
              color="#404040"
            ></Paragraph>
            <Paragraph
              text="Increase your chances of getting booked"
              size="16"
              weight="normal"
              color="#404040"
            ></Paragraph>

            <small
              class="listing-error"
              v-if="showErrors && checkIfShouldShowError('price')"
            >
              *{{ errorList["price"] }}
            </small>
            <br />
            <br />

            <input
              @change="handleInput({ step: 'price', data: steps.three.price })"
              v-model="steps.three.price"
              class="listing-name"
              type="number"
              placeholder="$23"
            />

            <div class="action-section">
              <button class="button" v-on:click="processSteps(0)">
                <i class="fas fa-chevron-left"></i> Back
              </button>
              <Button
                :isFullWidth="false"
                v-on:handleClick="processSteps(1)"
                label="Next"
                width="120px"
              ></Button>
            </div>
          </div>

          <div v-if="flow == 6">
            <h1 v-if="!isUploading">
              You've come this far<br />
              Now upload your listing
            </h1>
            <h1 v-else>
              Stay put <br />
              We are uploading your listing.
            </h1>

            <div class="action-section">
              <button class="button" v-on:click="processSteps(0)">
                <i class="fas fa-chevron-left"></i> Back
              </button>
              <Button
                v-if="!isUploading"
                :isFullWidth="false"
                v-on:handleClick="handlePropertyUpload"
                label="Upload"
                width="120px"
              ></Button>
              <pulse-loader
                class="loader"
                v-else
                :loading="loading"
                color="#3A85FC"
                :size="size"
              ></pulse-loader>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Blog/Navigation";
import Paragraph from "../components/Paragraph";
import Select from "../components/Select";
import Radio from "../components/Radio";
import Button from "../components/Button";
import Incrementer from "../components/Incrementer";
import Input from "../components/TextInput";
import CheckBox from "../components/CheckBox";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import countryData from "country-region-data";

//External imports
import Vue from "vue";
import VCalendar from "v-calendar";

import { mapActions, mapGetters } from "vuex";

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: "vc", // Use <vc-calendar /> instead of <v-calendar />
});

export default {
  name: "listing_page",
  components: {
    Navigation,
    Paragraph,
    Select,
    Radio,
    Button,
    Incrementer,
    Input,
    CheckBox,
    PulseLoader,
  },

  data: function() {
    return {
      mainUrl: [],
      shouldShowGuestNumber: true,
      showWhatWillGuestHave: false,
      countries: [],
      countryIsSelected: false,
      cities: [],
      errorsToShow: [],
      showErrors: false,
      errorList: {
        listing_type: "This field is required",
        what_guest_will_have: "You need to select what guest will have",
        number_of_guest: "Number of guest required",
        number_of_bedroom: "Number of bedroom required",
        number_of_bathroom: "Number of bathroom required",
        property_country: "Country is required",
        property_address: "Address is required",
        property_city: "City is required",
        property_state: "",
        amenities: "Choose amenities",
        extras: "",
        description: "Write a description",
        title: "This field is required",
        mobile_number: "Enter mobile number",
        checkin: "",
        will_update_calender_checkbox: "Agree to keep your calendar up to date",
        checkout: "",
        min_nights: 0,
        max_nights: 0,
        blocked_dates: [],
        price: "Please set a price",
        userListing: [],
        photos: "Photos are required",
        photosMin: "You need a minimum of 6 photos",
        photosMax: "You need a maximum of 25 photos",
        titleLength: "Only 50 Characters are allowed",
      },
      stageItems: {
        "11": ["listing_type", "what_guest_will_have"],
        "12": ["number_of_guest", "number_of_bedroom"],
        "13": ["number_of_bathroom"],
        "14": [
          "property_country",
          "property_address",
          "property_city",
          //  "property_province",
        ],
        "15": ["amenities"],
        //  "17": [
        //      "rules"
        //  ],
        "21": ["photos", "photosMin", "photosMax"],
        "22": ["description"],
        "23": ["title", "titleLength"],
        "31": ["will_update_calender_checkbox"],
        "35": ["price"],
      },
      isUploading: false,
      profile_img: null,
      files: [],
      urls: null,
      total: 7,
      checkout: "",
      checkin: "",
      monthMap: {
        Jan: 1,
        Feb: 2,
        Mar: 3,
        Apr: 4,
        May: 5,
        Jun: 6,
        Jul: 7,
        Aug: 8,
        Sep: 9,
        Oct: 10,
        Nov: 11,
        Dec: 12,
      },
      flow_percentage: 0,

      stepsText: {
        "1": " Start with the basics",
        "2": "Set the scene",
        "3": "Get ready for guests",
      },
      step: 1,
      flow: 1,
      steps: {
        one: {
          apartmentTypeModel: "Apartment",
          showCommercialText: false,
          total: 7,
          listing_type: [
            {
              text: "Apartment",
              value: "A",
            },
            {
              text: "Guest Lodge",
              value: "C",
            },
            {
              text: "House",
              value: "R",
            },
          ],
          what_guest_will_have: [
            {
              text: "Full place",
              value: "full_place",
              desc:
                "Guests have the whole place to themselves. This usually includes a bedroom, a bathroom, and a kitchen.",
            },
            {
              text: "Private room",
              value: "private_room",
              desc:
                "Guests have their own private room for sleeping. Other areas could be shared.",
            },
          ],
          number_of_bedrooms: [
            {
              text: "1 bedroom",
              value: "1",
            },
            {
              text: "2 bedrooms",
              value: "2",
            },
            {
              text: "3 bedrooms",
              value: "3",
            },
            {
              text: "4 bedrooms",
              value: "4",
            },
            {
              text: "5 bedrooms",
              value: "5",
            },
            {
              text: "6 bedrooms",
              value: "6",
            },
            {
              text: "7 bedrooms",
              value: "7",
            },
            {
              text: "8 bedrooms",
              value: "8",
            },
          ],

          amenities: [
            {
              value: "air_conditioner",
              text: "Air conditioner",
            },
            {
              value: "closet",
              text: "Closet/drawer",
            },
            {
              value: "iron",
              text: "Iron",
            },
            {
              value: "tv",
              text: "Tv",
            },
            {
              value: "wifi",
              text: "Wifi",
            },
            {
              value: "lock_bedroom",
              text: "Look on bedroom",
            },
            {
              value: "desk",
              text: "Desk/workspace",
            },
          ],
          amenitiesValue: [],
          rulesValue: [],
          houseRules: [
            {
              value: "No Smoking",
              text: "No Smoking",
            },
            {
              value: "No Eating",
              text: "No Eating",
            },
            {
              value: "No Kids",
              text: "No Kids",
            },
            {
              value: "No Party",
              text: "No Party",
            },
            {
              value: "No Pets",
              text: "No Pets",
            },
          ],
          extrasValue: [],
          extras: [
            {
              value: "gym",
              text: "Gym",
            },
            {
              value: "pool",
              text: "Swimming pool",
            },
            {
              value: "basketball",
              text: "Basket Ball Pitch",
            },
            {
              value: "washer",
              text: "Laundry Washer",
            },
          ],
        },
        two: {
          title: "",
          description: "",
          mobile_number: "",
        },
        three: {
          price: "",
          update_calendar: [
            {
              value: "yes",
              text: "Got it! I’ll keep my calendar up to date.",
            },
          ],
          checkin_times: [
            {
              value: "Flexible",
              text: "Flexible",
            },
            {
              value: "06:00 AM",
              text: "06:00 AM",
            },
            {
              value: "07:00 AM",
              text: "07:00 AM",
            },
            {
              value: "08:00 AM",
              text: "08:00 AM",
            },
            {
              value: "09:00 AM",
              text: "09:00 AM",
            },
            {
              value: "10:00 AM",
              text: "10:00 AM",
            },
            {
              value: "11:00 AM",
              text: "11:00 AM",
            },
            {
              value: "12:00 PM",
              text: "12:00 PM",
            },
            {
              value: "01:00 PM",
              text: "01:00 PM",
            },
            {
              value: "02:00 PM",
              text: "02:00 PM",
            },
            {
              value: "03:00 PM",
              text: "03:00 PM",
            },
            {
              value: "04:00 PM",
              text: "04:00 PM",
            },
            {
              value: "05:00 PM",
              text: "05:00 PM",
            },
            {
              value: "06:00 PM",
              text: "06:00 PM",
            },
            {
              value: "07:00 PM",
              text: "07:00 PM",
            },
          ],
        },
      },
      title: "",
      numberOfRooms: 0,
      numberOfBathRoom: 0,
    };
  },

  methods: {
    checkIfShouldShowError(errorKey) {
      let ans = false;
      for (let i = 0; i < this.errorsToShow.length; i++) {
        let error = this.errorsToShow[i];
        if (error == errorKey) {
          ans = true;
        }
      }
      return ans;
    },
    validate(stageCode) {
      let itemsInStage = this.stageItems[stageCode];
      for (let i = 0; i < itemsInStage.length; i++) {
        let item = itemsInStage[i];
        let stateValue = this.getListingState();
        let itemStateValue = stateValue[item];

        if (
          stateValue["title"] != null &&
          item == "titleLength" &&
          stateValue["title"].length > 50
        ) {
          this.errorsToShow.push(item);
        } else if (
          itemStateValue != null &&
          (itemStateValue == "" || itemStateValue == 0 || itemStateValue == [])
        ) {
          this.errorsToShow.push(item);
        } else if (
          item == "photosMin" &&
          this.urls != null &&
          this.urls.length < 6
        ) {
          this.errorsToShow.push(item);
        } else if (
          item == "photosMax" &&
          this.urls != null &&
          this.urls.length > 25
        ) {
          this.errorsToShow.push(item);
        }
      }

      return this.errorsToShow.length <= 0;
    },

    ...mapGetters(["getListingState", "getToken", "getUuid"]),
    handleSelect(val) {
      // Handling what guest will have for the seperate listing types
      if (val.step == "listing_type" && val.data == "C") {
        this.shouldShowGuestNumber = false;
        this.steps.one.what_guest_will_have = [
          {
            text: "Private Room",
            value: "private_room",
            desc: "Guests will have their own room, self contained",
          },
          {
            text: "Shared room",
            value: "shared_room",
            desc: "Guests will have a shared room",
          },
        ];
      } else {
        this.steps.one.what_guest_will_have = [
          {
            text: "Full place",
            value: "full_place",
            desc:
              "Guests have the whole place to themselves. This usually includes a bedroom, a bathroom, and a kitchen.",
          },
          {
            text: "Private room",
            value: "private_room",
            desc:
              "Guests have their own private room for sleeping. Other areas could be shared.",
          },
        ];
      }

      this.showWhatWillGuestHave = true;
      // Get cities after country is selected
      if (val.step == "property_country") {
        for (let i = 0; i < countryData.length; i++) {
          if (countryData[i]["countryName"] == val.data) {
            this.cities = [];
            let selectedCities = countryData[i]["regions"];
            for (let j = 0; j < selectedCities.length; j++) {
              this.cities.push({
                value: selectedCities[j]["name"],
                text: selectedCities[j]["name"],
              });
            }
            this.countryIsSelected = true;
            break;
          }
        }
      }
      let d = {
        key: val.step,
        value: val.data,
      };

      this.$store.dispatch("setValue", d);

      if (val.data == "C") {
        this.steps.one.showCommercialText = true;
      } else {
        this.steps.one.showCommercialText = false;
      }
    },

    handleRadio(val) {
      // Set the state
      let d = {
        key: val.step,
        value: val.data,
      };
      this.$store.dispatch("setValue", d);
    },

    handleCheckBox(val) {
      let d = {
        key: val.step,
        value: val.data,
      };
      this.$store.dispatch("setValue", d);
    },

    handleInput(val) {
      let d = {
        key: val.step,
        value: val.data,
      };
      this.$store.dispatch("setValue", d);
    },

    handleIncrementer(val) {
      let d = {
        key: val.step,
        value: val.data,
      };
      this.$store.dispatch("setValue", d);
    },
    getDateFormat(date) {
      if (date) {
        let splitted = date.split(" ");

        let new_date =
          splitted[2] + "/" + this.monthMap[splitted[1]] + "/" + splitted[3];
        return new_date;
      }
      return "";
    },
    handlePropertyUpload() {
      this.urls = this.mainUrl + this.urls;
      let d = {
        key: "photos",
        value: this.urls,
      };

      this.$store.dispatch("setValue", d);

      if (window.localStorage.getItem("profile_image") || this.profile_img) {
        this.isUploading = true;
        //Upload image after listing sucess
        let data = {
          uuid: this.getUuid(),
          token: this.getToken(),
          imageObject: this.profile_img,
        };
        this.$store.dispatch("updateImage", data);

        this.$store
          .dispatch("uploadProperty", {
            images: this.files,
            token: this.getToken(),
            uuid: this.getUuid(),
            info: this.getListingState(),
          })
          .then((res) => {
            if (res == 1) {
              this.$router.push("/profile");
            } else {
              this.isUploading = false;
              this.$notify({
                group: "general",
                title: "Info !!",
                text:
                  "Error ocurred while uploading your apartment, please retry!",
                type: "error",
              });
            }
          })
          .catch((err) => {
            this.isUploading = false;
            this.$notify({
              group: "general",
              title: "Info !!",
              text:
                "Error ocurred while uploading your apartment, please retry!",
              type: "error",
            });
          });
      } else {
        this.$modal.show("no-image-modal");
      }
    },

    removeImage(index) {
      var existingPhotos = this.$store.getters.getListingState.photos;
      var removedImage = existingPhotos.splice(index, 1);
      window.console.log(removedImage);

      this.urls = existingPhotos;

      let d = {
        key: "photos",
        value: this.urls,
      };

      this.$store.dispatch("setValue", d);
    },

    setMainImage(index) {
      var currentClickedImage = this.urls[index];
      this.urls.splice(index, 1, this.mainUrl[0]);
      this.mainUrl[0] = currentClickedImage;
    },

    onFileChange(e) {
      e.stopPropagation();
      e.preventDefault();
      var existingPhotos = this.$store.getters.getListingState.photos;
      this.files = e.target.files || e.dataTransfer.files;
      let tmpUrl = [];
      for (let i = 0; i < this.files.length; i++) {
        tmpUrl.push(URL.createObjectURL(this.files[i]));
      }

      this.urls = tmpUrl.concat(existingPhotos);
      if (this.mainUrl.length == 0) {
        this.mainUrl = [this.urls[this.urls.length - 1]];
        var slicedUrls = this.urls.slice(0, this.urls.length - 1);
        this.urls = slicedUrls;
      }
      let d = {
        key: "photos",
        value: this.urls,
      };
      this.$store.dispatch("setValue", d);
    },

    onProfileChange(e) {
      this.profile_img = e.target.files[0];
      this.profile_img_link = URL.createObjectURL(e.target.files[0]);
    },
    style() {
      return "width:" + this.flow_percentage + "%";
    },
    title_text() {
      return "Step " + this.step + ": " + this.stepsText[this.step];
    },
    processSteps(motive) {
      this.errorsToShow = [];
      this.showErrors = false;
      if (motive == 1) {
        let stageValidationCode = this.step + "" + this.flow;
        let validation = false;
        try {
          validation = this.validate(stageValidationCode);
        } catch (error) {
          validation = true;
        }
        if (!validation) {
          this.showErrors = true;
          window.scrollTo(0, 0);
        } else {
          this.flow += 1;
          if (this.flow > this.total) {
            if (this.step < 3) {
              this.step += 1;
            }
            this.flow = 1;
            if (this.step == 2) {
              this.total = 4;
            }
            if (this.step == 3) {
              this.total = 6;
            }
          }
        }
      } else {
        this.flow -= 1;
        if (this.flow < 1) {
          if (this.step > 1) {
            this.step -= 1;
          }
          this.flow = 1;
        }
      }

      this.flow_percentage = (this.flow / this.total) * 100;
    },
  },
  created() {
    this.flow_percentage = (this.flow / this.total) * 100;
    for (let i = 0; i < countryData.length; i++) {
      let country = countryData[i];
      this.countries.push({
        value: country["countryName"],
        text: country["countryName"],
      });
    }

    // this.$store.dispatch('clearListingData');
  },
};
</script>

<style lang="scss" scoped>
//  Styles for selestmainImageViewing main image
.mainImageView {
  width: 100%;
  padding: 0 !important;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  border: 1px dashed grey;
  height: 200px;
  margin-top: 20px;
}

.listing-error {
  color: red;
  font-size: 12px;
}
.input {
  padding: 0 !important;
  // border: 1px solid red;
}

.preview {
  .swap-main-img {
    margin-left: 90px;
  }

  // display: flex;
  width: 500px;
  .preview-item {
    // max-width: 50%;
    // height: auto;
    padding: 0 !important;

    em {
      position: absolute;
      padding: 0.2em;
      border: 2px solid #3a85fc;
      // box-shadow: black;
      border-radius: 5px;
      background: white;
      font-weight: 400;
      font-size: 15px;
      cursor: pointer;
    }

    img {
      max-width: 96%;
      margin-left: 5px;
      border-radius: 5px;
    }
  }
}
.listing {
  width: 100%;

  .listing-content-wrapper {
    margin-top: 80px;
    width: 100%;
    padding: 0 20%;

    .image_select {
      display: absolute;
      width: 0.1px;
      height: 0.1px;
    }

    .image_select_label {
      .div {
        width: 100%;
        height: 250px;
        padding: 20px;
        border: 1px dashed grey;
        div {
          background: rgba(196, 196, 196, 0.2);
          width: 100%;
          height: 100%;

          border-radius: 3px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          p {
            background-color: #3a85fc;
            padding: 10px 20px;
            color: #fff;
            border-radius: 3px;
            margin-bottom: 10px;
          }
        }
      }
    }

    .image-modal-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 40px 20px;

      button {
        border: none;
        background-color: #3a85fc;
        color: #fff;
        width: 120px;
        height: 30px;
        border-radius: 3px;
        cursor: pointer;
      }
    }

    .image-modal {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      padding: 30px;

      .preview {
        width: 40%;
        margin-left: 20px;
        em {
          // position: absolute;
          top: 10px;
          // border: 1px solid red;
        }

        img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
      }
    }

    .progress-box-wrapper {
      border-radius: 10px 10px 0 0;
      margin-top: 30px;
      width: 100%;
      background: #e7eef6;
      overflow-y: scroll;
      box-shadow: 0px 4px 70px rgba(104, 104, 104, 0.1);

      .box-paint {
        border-radius: 10px 10px 0 0;
        height: 20px;
        background: #3a85fc;
      }

      .box-content {
        border-radius: 10px 10px 0 0;
        width: 100%;
        position: relative;
        // height: 600px;
        top: -12px;
        background: #fff;
        padding: 0 20%;

        div {
          padding: 50px 0;
          width: 100%;
          // height: 100%;

          .action-section {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: row;

            .loader {
              margin-left: 70%;
            }
            .button {
              border: none;
              cursor: pointer;
              color: #3a85fc;
              background-color: #fff;
              font-weight: bold;
              font-size: 16px;
            }
            button:focus {
              outline: none;
            }
          }
        }

        .state-city {
          div {
            padding: 0 !important;
          }
          padding: 0 !important;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px;
        }

        .checkbox-item {
          padding: 10px;
        }

        .textarea {
          font-family: "Inter", sans-serif;
          border: 1px solid rgba(196, 196, 196, 0.7);
          border-radius: 3px;
          padding: 20px;
          color: rgb(107, 106, 106);
          font-size: 15px;
        }
        ::-webkit-textarea-placeholder {
          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 15px;
          color: rgb(107, 106, 106);
        }

        .listing-name {
          border: 1px solid rgba(196, 196, 196, 0.7);
          border-radius: 3px;
          height: 45px;
          color: rgb(107, 106, 106);
          padding: 10px 10px;
          width: 100%;
          font-size: 15px;
        }

        .checkin-div {
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: px;
          div {
            padding: 0;
          }
        }
        .commercial-div {
          padding: 0;
        }
      }
    }
  }
}
</style>
