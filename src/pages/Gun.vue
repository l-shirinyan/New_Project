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
      <div class="gun__text font-6 mt-9">
        <span>Our Business Attorneys can assist you with:</span>
      </div>
      <div class="gun__list">
        <ul class="ml-7 mt-6">
          <li class="gun__text mb-1" v-for="(item, i) in items" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const ITEMS = [
  "Formations",
  "Contracts",
  "Consulting",
  "Reorganization",
  "Trademark",
  "Franchising Law",
];
export default {
  data() {
    return {
      items: ITEMS,
    };
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
