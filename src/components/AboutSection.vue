<template>
  <div id="about-us" class="about">
    <div class="about__section">
      <div class="about__title text-align-center font-7">
        <span>About Us</span>
      </div>
      <div class="about__body">
        <div class="about__body-container d-flex justify-between">
          <div
            class="about__body-images-box w-50 px-7 relative"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <img
              class="about__body-img absolute"
              src="../assets/images/about-section-img.svg"
              alt=""
            />
            <img
              class="about__body-img-1 absolute"
              src="../assets/images/about-section-img.svg"
              alt=""
            />
          </div>
          <div
            class="about__body-text-box w-50 px-7 pt-3 mt-4"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div class="about__body-container-title font-7">
              <span>Who We Are</span>
            </div>
            <div class="about__body-container-text pt-5">
              <span
                >Guest Law Office is a full-service law firm serving Lexington,
                Louisville, Northern Kentucky, and surrounding counties, founded
                on strength in advocacy, and focused on our clients' best
                interests. We are also staunch defenders of the Second Amendment
                and your one stop shop for all your firearm legal needs.
              </span>
            </div>
          </div>
        </div>
        <div class="about__body-container margin-box d-flex justify-between">
          <div
            class="about__body-text-box w-50 px-7 pt-3"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div class="about__body-container-title font-7">
              <span>Our Goal</span>
            </div>
            <div class="about__body-container-text pt-5">
              <span
                >We routinely represent clients in state and federal courts
                throughout Kentucky and offer a wide range of legal services to
                meet your needs. With offices in Lexington, Louisville and
                Northern Kentucky, we have over 20 years of experience and are
                always monitoring recent legal developments and business trends,
                helping our clients seek new opportunities and minimize risk.
                Superior client service is what we strive for—providing
                creative, practical solutions and proven results.
              </span>
            </div>
          </div>
          <div
            class="about__body-images-box w-50 px-7 mt-9 relative"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <img
              class="about__body-img-2 absolute"
              src="../assets/images/about-section-img-1.svg"
              alt=""
            />
            <img
              class="about__body-img-3 absolute"
              src="../assets/images/about-section-img-1.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.about {
  padding-top: 65px;
  background-color: rgba(211, 211, 211, 0.3);
  &__body {
    padding-top: 50px;
    padding-bottom: 120px;
  }
  &__section {
    max-width: 1197px;
    margin: 0 auto;
  }
  &__title {
    color: $blue;
    margin: 0 auto;
    font-size: 33px;
    line-height: 1.34;
    letter-spacing: 1.58px;
    span {
      padding-bottom: 5px;
      border-bottom: 1px solid $yellow;
    }
  }
  &__body-container-title {
    color: $blue;
    font-size: 22px;
    line-height: 1.38;
    letter-spacing: 1.08px;
    span {
      padding-bottom: 5px;
      border-bottom: 1px solid $yellow;
    }
  }
  &__body-container-text {
    color: $black;
    font-size: 15px;
    line-height: 1.6;
  }
  &__body-img {
    top: 0;
    left: 25px;
    width: calc(100% - 70px);
    z-index: 1;
    box-shadow: 0 0 20px 0 rgba(35, 35, 35, 0.48);
  }
  &__body-img-1 {
    top: 30px;
    left: 55px;
    width: calc(100% - 70px);
    z-index: 0;
    opacity: 0.5;
  }
  &__body-img-2 {
    top: 0;
    left: 55px;
    width: calc(100% - 70px);
    z-index: 1;
    box-shadow: 0 0 20px 0 rgba(35, 35, 35, 0.48);
  }
  &__body-img-3 {
    top: 30px;
    left: 25px;
    width: calc(100% - 70px);
    z-index: 0;
    opacity: 0.5;
  }
}
.margin-box {
  margin-top: 150px;
}
@media only screen and (max-width: 990px) {
  .about {
    &__body {
      padding-bottom: 80px;
    }
    &__body-container {
      display: block !important;
    }
    &__body-text-box {
      width: 100% !important;
    }
    &__body-images-box {
      height: 200px;
      width: 430px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .margin-box {
    margin-top: 60px;
  }
}
@media only screen and (max-width: 450px) {
  .about {
    &__body-container {
      display: block !important;
    }
    &__body-text-box {
      width: 100% !important;
    }
    &__body-images-box {
      height: 200px;
      width: 330px;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
