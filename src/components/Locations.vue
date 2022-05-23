<template>
  <div id="locations" class="locations">
    <div
      class="locations__section relative"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      data-aos-once="true"
    >
      <div class="locations__container h-100 d-flex justify-between">
        <div class="locations__left-col">
          <img
            class="absolute"
            src="../assets/images/locations-img.svg"
            alt=""
          />
        </div>
        <div class="locations__right-col d-flex justify-between">
          <div class="locations__right-col-text-box">
            <div class="locations__icon-box">
              <img
                width="100%"
                height="100%"
                src="../assets/images/icons/left-quote.png"
                alt=""
              />
            </div>
            <div class="locations__text-box font-6">
              <span>
                We are proud members and network attorneys for MetLife Legal
                Plans and ARAG legal insurance. As part of the network, we work
                with the employees of companies ranging from Fortune 500 to
                small businesses on a range of common legal issues. We provide
                members legal guidance and consultation, document review and
                preparation and representation. Attorney fees for most covered
                legal matters are 100% paid-in-full when you work with a Network
                Attorney.
              </span>
            </div>
          </div>
          <div class="locations__right-col-icons-box">
            <div class="locations__logo-box-1">
              <img
                width="100%"
                height="100%"
                src="../assets/images/locations-logo-1.svg"
                alt=""
              />
            </div>
            <div class="locations__logo-box-2">
              <img
                width="100%"
                height="100%"
                src="../assets/images/locations-logo-2.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.locations {
  background-color: rgba(211, 211, 211, 0.3);
  padding: 100px 30px 85px 30px;
  &__section {
    max-width: 950px;
    margin: 0 auto;
  }
  &__container {
    box-shadow: 0 3px 8px 0 rgba(35, 35, 35, 0.3);
    background: #fff;
  }
  &__left-col {
    width: 35%;
    background-color: $blue;
    img {
      top: calc(50% - 168px);
      left: -100px;
    }
  }
  &__right-col {
    width: 65%;
    border-top: 1.5px solid $yellow;
    border-bottom: 1.5px solid $yellow;
    border-right: 1.5px solid $yellow;
    padding: 20px 33px 29px 49px;
  }
  &__icon-box {
    width: 53px;
    height: 47px;
  }
  &__text-box {
    font-size: 14px;
    color: #1e1e1e;
    line-height: 1.79;
    letter-spacing: 0.63px;
  }
  &__right-col-text-box {
    width: calc(100% - 170px);
  }
  &__right-col-icons-box {
    width: 170px;
    margin-top: 47px;
    border-right: 3px solid $yellow;
    border-bottom: 3px solid $yellow;
  }
  &__logo-box-1 {
    margin: 0 auto;
    width: 116px;
    height: 117px;
  }
  &__logo-box-2 {
    width: 138px;
    height: 107px;
    margin: 0 auto;
  }
}
@media only screen and (max-width: 1180px) {
  .locations {
    &__container {
      display: block !important;
    }
    &__left-col {
      width: 100%;
      height: 295px;
      img {
        top: -50px;
        left: 20px;
      }
    }
    &__right-col {
      width: 100%;
      border-top: none;
      border-bottom: 1.5px solid $yellow;
      border-right: 1.5px solid $yellow;
      border-left: 1.5px solid $yellow;
    }
  }
}
@media only screen and (max-width: 580px) {
  .locations {
    &__right-col {
      display: block !important;
    }
    &__left-col {
      height: 190px;
      img {
        width: 280px;
        left: 0;
      }
    }
    &__right-col-text-box {
      width: 100%;
    }
    &__right-col-icons-box {
      width: 100%;
      border-left: 3px solid $yellow;
    }
  }
}
</style>
