<template>
  <div>
    <div class="footer">
      <div class="footer__section">
        <div class="footer__section-content d-flex justify-between pb-3">
          <div class="footer__social-section">
            <div class="footer__social-section-logo-box">
              <img src="../assets/images/icons/logo.png" alt="" />
            </div>
            <div class="footer__social-section-icons">
              <div class="mt-8">
                <img src="../assets/images/icons/get-in-touch.png" alt="" />
              </div>
              <div class="footer__social-section-media-icons mt-5">
                <img
                  class="cursor-pointer"
                  src="../assets/images/icons/facebook.svg"
                  alt=""
                />
                <img
                  class="ml-4 cursor-pointer"
                  src="../assets/images/icons/linkedin.svg"
                  alt=""
                />
                <img
                  class="ml-4 cursor-pointer"
                  src="../assets/images/icons/youtube.svg"
                  alt=""
                />
                <img
                  class="ml-4 cursor-pointer"
                  src="../assets/images/icons/whatsapp.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="footer__locations-section d-flex justify-between pt-2">
            <div
              v-for="(location, i) in locations"
              :key="i"
              class="footer__locations-item ml-7"
            >
              <div
                class="footer__locations-item-title font-7"
                :class="{ 'hidden-title': i === 2 }"
              >
                <span> {{ location.title }} </span>
              </div>
              <div
                :class="{ 'footer__locations-item-content': i !== 3 }"
                class="mt-4 pr-7"
              >
                <div class="footer__locations-item-text">
                  {{ location.text1 }}
                </div>
                <div class="footer__locations-item-text pt-4">
                  {{ location.text2 }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__divider w-100"></div>
        <div class="mt-5 d-flex w-100 justify-center">
          <div class="footer__locations-item-text">
            <span> Copyright © 2021 Guestlaw.us All Rights Reserved. </span>
          </div>
          <div class="pl-8 footer__locations-item-text">
            <span>
              Contact - Terms and Conditions - Privacy Policy - Sitemap
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const LOCATIONS = [
  {
    title: "Lexington",
    text1: "710 East Main Street Lexington, KY",
    text2: "Paragon Center 2333 Alexandria Drive Lexington, KY",
  },
  {
    title: "Louisville ",
    text1:
      "Ormsby III Forest Green 10200 Forest Green Boulevard, Lyndon, Suite 112 Louisville, KY",
    text2:
      "MET Building 312 South Fourth Street, Downtown, Suite 700 Louisville, KY",
  },
  {
    title: "<>",
    text1:
      "Brownsboro Business Center 4965 US Hwy 42 Suite 1000 Louisville, Kentucky ",
    text2: "Brownsboro Crossing 9850 Von Allmen Court Suite 201 Louisville, KY",
  },
  {
    title: "Northern, Kentucky",
    text1: "7310 Turfway Road Suite 550 Florence, KY 41042 United States",
    text2: "",
  },
];
export default {
  data() {
    return {
      locations: LOCATIONS,
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background-image: linear-gradient(to bottom, #2f4fa1, $blue 66%, $blue);
  &__section {
    max-width: 1197px;
    margin: 0 auto;
    padding: 35px 20px 25px 20px;
  }
  &__divider {
    background-color: $dark-yellow;
    height: 1px;
  }
  &__social-section {
    width: 40%;
  }
  &__locations-item-content {
    border-right: solid 1px rgba(255, 255, 255, 0.4);
  }
  &__locations-item-title {
    color: $dark-yellow;
    font-size: 16px;
    line-height: 1.38;
    letter-spacing: 0.72px;
  }
  &__locations-item-text {
    color: #fff;
    font-size: 13px;
    line-height: 1.38;
    letter-spacing: 0.59px;
  }
}
.hidden-title {
  visibility: hidden;
}
@media only screen and (max-width: 1024px) {
  .footer {
    &__section-content {
      display: block !important;
    }
    &__social-section {
      margin-bottom: 30px;
      width: 200px;
    }
  }
}
@media only screen and (max-width: 750px) {
  .footer {
    &__section-content {
      display: block !important;
    }
    &__social-section {
      margin-bottom: 20px;
      display: flex;
      width: 100%;
    }
    &__social-section-icons {
      margin-top: 25px;
      margin-left: 20px;
    }
    &__locations-section {
      display: block !important;
    }
    &__locations-item {
      margin-bottom: 20px;
      margin-left: 5px !important;
    }
    &__locations-item-content {
      border-right: none;
      margin-top: 5px !important;
    }
    &__locations-item-text {
      padding-top: 0px !important;
    }
    &__social-section-logo-box {
      height: 120px;
      img {
        height: 100%;
      }
    }
    &__social-section-media-icons {
      margin-top: 10px !important;
    }
  }
}
</style>
