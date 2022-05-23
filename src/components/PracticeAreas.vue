<template>
  <div id="practice-areas" class="practice">
    <div class="practice__section">
      <div class="practice__title text-align-center font-7">
        <span>Practice Areas</span>
      </div>
      <div class="practice__body d-flex justify-center">
        <div
          @click="changeWithScroll(item)"
          v-for="(item, i) in items"
          :key="i"
          class="practice__body-item"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img width="290px" height="280px" :src="item.img" alt="" />
          <div class="opacity-box cursor-pointer">
            <div class="practice__body-item-descrb font-6 cursor-pointer">
              <div
                class="practice__body-item-icon"
                :style="{
                  width: `${item.iconWidth}px`,
                  height: `${item.iconHeight}px`,
                }"
              >
                <img width="100%" height="100%" :src="item.icon" alt="" />
              </div>
              <div class="practice__body-item-text text-align-center">
                <span> {{ item.title }} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const ITEMS = [
  {
    title: "Estate Planning, Wills AND Trusts",
    icon: require("../assets/images/icons/hand.png"),
    iconWidth: 50,
    iconHeight: 50,
    img: require("../assets/images/practice-1.svg"),
    path: "/estate",
  },
  {
    title: "Elder Law",
    icon: require("../assets/images/icons/law.png"),
    iconWidth: 50,
    iconHeight: 50,
    img: require("../assets/images/practice-2.svg"),
    path: "/elder",
  },
  {
    title: "Probate and Probate Administration",
    icon: require("../assets/images/icons/certificate.png"),
    iconWidth: 50,
    iconHeight: 43,
    img: require("../assets/images/practice-3.svg"),
    path: "/probate",
  },
  {
    title: "Gun Rights and 2nd Amendment",
    icon: require("../assets/images/icons/balance.png"),
    iconWidth: 50,
    iconHeight: 46,
    img: require("../assets/images/practice-4.svg"),
    path: "/gun",
  },
  {
    title: "Business Law Services",
    icon: require("../assets/images/icons/law-stamp.png"),
    iconWidth: 50,
    iconHeight: 51,
    img: require("../assets/images/practice-5.svg"),
    path: "/business",
  },
  {
    title: "Consumer Bankruptcy Law",
    icon: require("../assets/images/icons/bankrupt.png"),
    iconWidth: 28,
    iconHeight: 51,
    img: require("../assets/images/practice-6.svg"),
    path: "/",
  },
];

export default {
  data() {
    return {
      items: ITEMS,
    };
  },
  methods: {
    changeWithScroll(item) {
      if (item.path !== "/") {
        this.$router.push(item.path);
        setTimeout(() => {
          let box = document.getElementById(item.path);
          box.scrollIntoView({ block: "start", behavior: "smooth" });
        }, 100);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.practice {
  background-color: rgba(211, 211, 211, 0.3);
  padding-top: 65px;
  &__section {
    max-width: 1197px;
    margin: 0 auto;
    padding: 0 30px 0 30px;
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
  &__body {
    padding-top: 50px;
    flex-wrap: wrap;
    gap: 40px 72px;
  }
  &__body-item {
    width: 290px;
    height: 280px;
    border-radius: 10px;
    position: relative;
  }
  &__body-item-descrb {
    position: absolute;
    width: 164px;
    height: 109px;
    z-index: 101;
    top: auto;
    bottom: calc(50% - 54.5px);
    left: calc(50% - 82px);
    right: auto;
  }
  &__body-item-icon {
    margin: 0 auto;
    margin-bottom: 15px;
  }
  &__body-item-text {
    font-size: 14px;
    color: #fff;
    line-height: 1.38;
  }
}
.opacity-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(47, 79, 161, 0.6);
  z-index: 100;
  border-radius: 10px;
  transition: 0.4s;
  &:hover {
    background-color: rgba(47, 79, 161, 0.9);
  }
}
</style>
