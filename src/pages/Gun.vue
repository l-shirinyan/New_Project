<template>
  <div class="gun">
    <div class="gun__section">
      <div class="gun__title font-6 mb-10">
        <span>Why Might You Need a Kentucky Gun Lawyer?</span>
      </div>
      <div class="gun__section-top d-flex justify-between">
        <div class="gun__img-box relative">
          <img
            width="100%"
            class="absolute"
            src="../assets/images/gun-logo.svg"
            alt=""
          />
        </div>

        <div class="pl-8 gun__text-box">
          <div class="gun__text">
            <span
              >In the past and recently, there has been much talk about guns in
              Kentucky. There are also many questions too. A conversation about
              gun laws usually includes disagreement and high tension. Most know
              this can be highly unappealing. We can answer these gun
              law-related questions easily.
            </span>
          </div>
          <div class="gun__text mt-8">
            <span
              >Discussing gun laws with a gun rights attorney can help you
              understand the differing opinions on the topic. Most importantly,
              it can help with the laws that clarify, regulate, or prohibit gun
              use. Having a gun attorney can help if you have been charged with
              a gun-related crime. It can also help if you are a victim of gun
              violence, or wish to own a restricted gun.
            </span>
          </div>
        </div>
      </div>
      <div class="gun__text mt-8">
        <span
          >Gun laws can be hard to navigate because, apart from the federal gun
          laws, each and every state has its own set of gun laws.When comparing
          these state gun laws to their Federal counterparts, they reveal some
          shocking differences.
        </span>
      </div>
      <div class="gun__text mt-8">
        <span>
          Operating a business in the firearms industry begins with a Federal Firearms License (or an “FFL”). 
          Our expert attorneys can provide FFL license and Legal Services to get you started. Beyond the FFL,
          we assist firearm licensees with their broader NFA / SOT and Import / Export licensing needs. 
          We can create your own personalized Gun Trust and facilitate the transfer of weapons into that trust.
        </span>
      </div>
      <div class="gun__text mt-4">
        <span>
          We can guide businesses through the process of obtaining FFL licenses to begin firearm operations, 
          and subsequent licenses and permits necessary to expand their manufacturing operations or sales reach.
        </span>
      </div>
      <div class="gun__text mt-4">
        <span>
          We understand that for some your FFL is your livelihood - we help protect your operation and stay compliant.
          Our service is simple, yet powerful and is designed to teach, guide, audit and monitor your FFL throughout the year.
        </span>
      </div>
      <div class="gun__text mt-4">
        <span>
          Mastering firearm laws can be a challenge, especially when buying, shipping and selling across state line.
          We can help limit your risk and provide easy and affordable access to firearm legal services.
        </span>
      </div>
      <div class="gun__text mt-4">
        <span>
          We help firearm business owners get licensed, apply for ATF variances, understand ATF recording keeping 
          and pass ATF inspections. Speak with usy regarding FFL formation through closure matters.
        </span>
      </div>
      <div class="gun__text mt-8">
        <span class="font-6">Firearm Retail / Range -</span>
        <span>
          We help retail and range operators understand laws related to GCA / NFA firearm transfers. 
          We’re experts in 4473 forms, NFA forms, FBI NICS background checks and state laws.
        </span>
      </div>
      <div class="gun__text mt-8">
        <span class="font-6">Firearm Manufacturing -</span>
        <span>
          We help manufacturers understand aspects of the law beginning with subcontracting, product marketing
          and classification, manufacturing, state registration and the sale and distribution across the globe.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.gun {
  &__title {
    color: $black;
    font-size: 30px;
    line-height: 1.37;
  }
  background-color: rgba(211, 211, 211, 0.3);
  padding: 60px 20px 100px 20px;
  &__section {
    max-width: 1197px;
    margin: 0 auto;
  }
  &__text {
    color: $black;
    font-size: 16px;
    line-height: 1.38;
  }
  &__text::marker {
    color: $blue;
  }
  &__img-box {
    width: 320px;
    height: 320px;
  }
  &__text-box {
    width: calc(100% - 325px);
  }
}
@media only screen and (max-width: 990px) {
  .gun {
    &__section-top {
      display: block !important;
    }
    &__text-box {
      width: 100%;
      margin-top: 30px;
      padding-left: 0 !important;
    }
    &__img-box {
      width: 290px;
      height: 290px;
      margin: 0 auto;
    }
  }
}
</style>
