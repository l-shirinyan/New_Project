<template>
  <div>
    <div class="header">
      <div class="d-flex justify-between align-i-center h-100">
        <div class="header__logo-box cursor-pointer">
          <img
            height="100%"
            @click="goToHome()"
            src="../assets/images/logo.svg"
          />
        </div>
        <div class="header__menu d-flex justify-between align-i-center">
          <a
            class="header__menu-item cursor-pointer font-6 px-4"
            :class="{ 'border-box': i !== 3 }"
            :href="`#${item.hash}`"
            v-for="(item, i) in menuItems"
            :key="i"
            @click="changePage(item.hash)"
          >
            <span>
              {{ item.name }}
            </span>
          </a>
          <a
            class="header__menu-item cursor-pointer font-6 px-4"
            @click="goToLocations"
          >
            <span> Locations </span>
          </a>
        </div>
        <!-- <a
          href="tel:(859) 227-0972"
          class="header__phone-box d-flex align-i-center cursor-pointer"
        >
          <img
            class="mt-1"
            width="19.9px"
            height="19.9px"
            src="../assets/images/icons/phone.svg"
            alt=""
          />
          <div class="header__phone pl-5 font-6">
            <span>(859) 227-0972</span>
          </div>
        </a> -->
        <div
          @click="openMenu()"
          class="responsive-menu mt-1 cursor-pointer d-none"
        >
          <img
            width="100%"
            height="100%"
            src="../assets/images/icons/burger.svg"
            alt=""
          />
        </div>
        <Transition name="fade" mode="out-in">
          <div v-if="showMenu" class="absolute responsive-menu__box">
            <div class="responsive-menu__box-header d-flex justify-between">
              <div class="header__logo-box ml-4 cursor-pointer">
                <img
                  height="100%"
                  @click="goToHome()"
                  src="../assets/images/logo.svg"
                />
              </div>
              <div
                @click="closeMenu()"
                class="responsive-menu__close-btn cursor-pointer"
              >
                <img
                  width="100%"
                  height="100%"
                  src="../assets/images/icons/close.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="header__menu-responsive mt-6 text-align-center">
              <div v-for="(item, i) in menuItems" :key="i" class="mb-5">
                <a
                  class="header__menu-item responsive-item cursor-pointer font-6 px-4"
                  :class="{ 'border-box': i !== 3 }"
                  :href="`#${item.hash}`"
                  @click="changePage(item.hash)"
                >
                  <span>
                    {{ item.name }}
                  </span>
                </a>
              </div>
              <a
                class="header__menu-item responsive-item cursor-pointer font-6 px-4"
                @click="goToLocations"
              >
                <span> Locations </span>
              </a>
              <div class="divider mt-4"></div>
              <a
                style="text-decoration: none"
                href="tel:(859) 227-0972"
                class="justify-center mt-7 mr-2 d-flex align-i-center"
              >
                <img
                  class="mt-1"
                  width="19.9px"
                  height="19.9px"
                  src="../assets/images/icons/phone.svg"
                  alt=""
                />
                <div class="header__phone pl-5 font-6">
                  <span>(859) 227-0972</span>
                </div>
              </a>
            </div>
          </div>
        </Transition>
      </div>
    </div>
    <div v-if="$route.path === '/'" id="home" class="header__slider relative">
      <splide
        :options="{ rewind: true, height: 700, autoplay: true }"
        :isCarousel="true"
        data-splide='{"type":"loop"}'
      >
        <splide-slide v-for="(item, index) of splideItems" :key="index">
          <div class="img-box-1 absolute w-100 h-100"></div>
          <img :src="item.src" alt="" />
          <div class="absolute w-100 h-100 gradient-box"></div>
          <div class="header__slider-box absolute">
            <div class="header__slider-box-title font-7">
              <span>GUEST LAW OFFICE</span>
            </div>
            <div class="header__slider-box-subtitle font-7">
              <span>{{ item.text }}</span>
            </div>
            <div>
              <button class="header__slider-box-btn cursor-pointer mt-7 font-7">
                Learn More
              </button>
            </div>
          </div>
        </splide-slide>
      </splide>
    </div>
    <div
      class="relative header__slider estate"
      v-else-if="$route.path === '/estate'"
      id="/estate"
    >
      <div class="absolute w-100 h-100 gradient-box-1"></div>
      <div class="absolute slider-text-box font-7">
        <span
          >Estate Planning, <br />
          Wills and Trusts</span
        >
      </div>
    </div>
    <div
      class="relative header__slider elder"
      v-else-if="$route.path === '/elder'"
      id="/elder"
    >
      <div class="absolute w-100 h-100 gradient-box-1"></div>
      <div class="absolute slider-text-box font-7">
        <span>Elder law</span>
      </div>
    </div>
    <div
      class="relative header__slider probate"
      v-else-if="$route.path === '/probate'"
      id="/probate"
    >
      <div class="absolute w-100 h-100 gradient-box-1"></div>
      <div class="absolute slider-text-box mr-5 font-7">
        <span
          >PROBATE AND PROBATE<br />
          ADMINISTRATION</span
        >
      </div>
    </div>
    <div
      class="relative header__slider business"
      v-else-if="$route.path === '/business'"
      id="/business"
    >
      <div class="absolute w-100 h-100 gradient-box-1"></div>
      <div class="absolute slider-text-box mr-5 font-7">
        <span>Business Law Services</span>
      </div>
    </div>
    <div
      class="relative header__slider"
      v-else-if="$route.path === '/gun'"
      id="/gun"
    >
      <div class="absolute w-100 h-100 gradient-box-1 gun"></div>
      <div class="absolute slider-text-box mr-5 font-7">
        <span
          >Gun Rights and 2nd <br />
          Amendment</span
        >
      </div>
    </div>
    <div
      class="relative header__slider"
      v-else-if="$route.path === '/bankruptcy'"
      id="/bankruptcy"
    >
      <div class="absolute w-100 h-100 gradient-box-1 bankruptcy"></div>
      <div class="absolute slider-text-box mr-5 font-7">
        <span>Consumer Bankruptcy Law</span>
      </div>
    </div>
    <div
      class="relative header__slider"
      v-else-if="$route.path === '/real-estate'"
      id="/real-estate"
    >
      <div class="absolute w-100 h-100 gradient-box-1 real-estate"></div>
      <div class="absolute slider-text-box mr-5 font-7">
        <span>Real Estate Law</span>
      </div>
    </div>
    <div
      class="relative header__slider"
      v-else-if="$route.path === '/veterans'"
      id="/veterans"
    >
      <div class="absolute w-100 h-100 gradient-box-1 veterans"></div>
      <div class="absolute slider-text-box mr-5 font-7">
        <span>Veterans Law </span>
      </div>
    </div>
    <div
      class="relative header__slider"
      v-else-if="$route.path === '/tax'"
      id="/tax"
    >
      <div class="absolute w-100 h-100 gradient-box-1 tax"></div>
      <div class="absolute slider-text-box mr-5 font-7">
        <span>IRS Tax Audits</span>
      </div>
    </div>
    <div
      class="relative header__slider-locations"
      v-else-if="$route.path === '/locations'"
      id="/locations"
    >
      <div class="absolute w-100 h-100 gradient-box-1 locations"></div>
      <div class="absolute slider-text-box mr-5 font-7"></div>
    </div>
  </div>
</template>

<script>
const MENU_ITEMS = [
  {
    name: "Home",
    hash: "home",
  },
  {
    name: "About Us",
    hash: "about-us",
  },
  {
    name: "Practice Areas",
    hash: "practice-areas",
  },
];

const SPLIDE_ITEMS = [
  {
    src: require("../assets/images/slider-images/slider-1.svg"),
    text: "Lexington Kentucky",
  },
  {
    src: require("../assets/images/slider-images/slider.svg"),
    text: "Louisville",
  },
  {
    src: require("../assets/images/slider-images/slider-2.svg"),
    text: "Northern Kentucky",
  },
];

import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default {
  data() {
    return {
      menuItems: MENU_ITEMS,
      splideItems: SPLIDE_ITEMS,
      isDesktop: true,
      showMenu: false,
    };
  },
  components: {
    Splide,
    SplideSlide,
  },
  methods: {
    openMenu() {
      this.showMenu = true;
    },
    closeMenu() {
      this.showMenu = false;
    },
    changePage(hash) {
      this.showMenu = false;
      if (this.$route.hash !== `#${hash}`) {
        this.$router.push(`/#${hash}`);
      }
    },
    goToLocations() {
      this.showMenu = false;
      if (this.$route.path !== "/locations") {
        this.$router.push("/locations");
      }
    },
    goToHome() {
      if (this.$route.path !== "/") {
        this.$router.push("/#home");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.94);
}

.fade-enter {
  opacity: 0;
  transform: scale(0.94);
}
.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}

.blured {
  filter: blur(4px);
  -webkit-filter: blur(4px);
}
.header {
  width: 100%;
  position: fixed;
  z-index: 9999999;
  height: 60px;
  background-image: linear-gradient(to bottom, #2f4fa1, #012951);
  padding: 0 220px 0 140px;
  &__menu-item {
    color: #fff;
    font-size: 14px;
    line-height: 1.35;
    letter-spacing: 0.9px;
    user-select: none;
    transition: 0.4s;
    text-decoration: none;
  }
  &__menu-item:hover {
    color: $yellow;
  }
  &__logo-box {
    height: 50px;
  }
  &__phone {
    font-size: 14px;
    line-height: 1.35;
    letter-spacing: 0.9px;
    color: #fff;
  }
  &__slider {
    height: 750px;
    padding-top: 60px;
    overflow: hidden;
  }
  &__slider-locations {
    height: 1120px;
    overflow: hidden;
  }
  &__slider-box {
    z-index: 10000;
    top: 220px;
    left: 250px;
  }
  &__slider-box-title {
    color: #000;
    font-size: 37px;
    letter-spacing: 1.8px;
  }
  &__slider-box-subtitle {
    color: $yellow;
    font-size: 55px;
    letter-spacing: 2.7px;
  }
  &__slider-box-btn {
    width: 183px;
    height: 48px;
    background-color: $yellow;
    color: #fff;
    border: solid 1px $yellow;
    transition: 0.4s;
    line-height: 1.33;
    letter-spacing: 0.81px;
    font-size: 18px;
  }
  &__slider-box-btn:hover {
    background-color: #fff;
    color: $yellow;
  }
  &__phone-box {
    user-select: none;
    text-decoration: none !important;
  }
}
.border-box {
  border-right: 1px solid #fff;
}
.gradient-box {
  top: 0;
  z-index: 10000;
  background-image: linear-gradient(
    123deg,
    rgba(35, 35, 35, 0.5) 0%,
    rgba(108, 108, 108, 0) 74%
  );
}
.gradient-box-1 {
  background-color: rgba(35, 35, 35, 0.5);
  top: 100;
  z-index: 10000;
}
.responsive-item {
  border-right: 0 !important;
}
.estate {
  background-image: url("../assets/images/estate.svg");
}
.elder {
  background-image: url("../assets/images/elder.svg");
}
.probate {
  background-image: url("../assets/images/probote.svg");
}
.business {
  background-image: url("../assets/images/business.svg");
}
.gun {
  background-image: url("../assets/images/guns.svg");
}
.bankruptcy {
  background-image: url("../assets/images/bankruptcy.png");
}
.real-estate {
  background-image: url("../assets/images/real-estate.png");
}
.veterans {
  background-image: url("../assets/images/veterans.svg");
}
.tax {
  background-image: url("../assets/images/tax.png");
}
.locations {
  background-color: rgba(211, 211, 211, 0.3);
}
.estate,
.elder,
.probate,
.business,
.gun {
  background-size: cover;
}
.slider-text-box {
  top: 240px;
  left: 270px;
  color: #fff;
  z-index: 10000;
  font-size: 55px;
  line-height: 1.37;
  letter-spacing: 2.7px;
}
::v-deep {
  .splide__pagination {
    display: none;
  }
  .splide__arrow {
    width: 40px !important;
    height: 40px !important;
    background: #fff !important;
    opacity: 1 !important;
  }
}
.responsive-menu {
  width: 30px;
  height: 30px;
  &__line {
    border-bottom: 5px solid $yellow;
    margin-bottom: 10px;
  }
  &__box {
    top: 0;
    left: 0;
    z-index: 100000000000000;
    width: 100%;
    height: 323px;
    background-image: linear-gradient(to bottom, #2f4fa1, #012951);
  }
  &__close-btn {
    width: 25px;
    height: 25px;
    margin: 15px 30px 0 0;
  }
}
.divider {
  width: 100%;
  height: 1px;
  background: $yellow;
}
@media only screen and (max-width: 1585px) {
  .header {
    padding: 0 30px 0 20px;
  }
}
@media only screen and (max-width: 1180px) {
  .header {
    padding: 0 30px 0 20px;

    &__slider-locations {
      height: 1000px;
      overflow: hidden;
    }
    &__slider-box {
      top: 290px;
      left: 80px;
      margin-right: 60px;
    }
  }
  .slider-text-box {
    left: 30px;
    top: 300px;
  }
}
@media only screen and (max-width: 890px) {
  .header {
    &__slider-locations {
      height: 850px;
      overflow: hidden;
    }
    &__menu {
      display: none !important;
    }
    &__phone-box {
      display: none !important;
    }
  }
  .responsive-menu {
    display: block !important;
  }
}
@media only screen and (max-width: 565px) {
  .header {
    &__slider-locations {
      height: 700px;
      overflow: hidden;
    }
    &__menu {
      display: none !important;
    }
    &__phone-box {
      display: none !important;
    }
    &__slider-box {
      left: 30px;
    }
    &__slider-box-subtitle {
      margin-top: 0 !important;
      font-size: 50px;
    }
    &__slider-box-btn {
      margin-top: 20px !important;
    }
  }
  .responsive-menu {
    display: block !important;
  }
  ::v-deep {
    .splide__arrow {
      display: none !important;
    }
  }
}
</style>
