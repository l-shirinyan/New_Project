<template>
  <div class="estate">
    <div class="estate__section">
      <div class="estate__text">
        <span
          >We provide a wide variety of estate planning services. From wills to
          trusts, we will help you plan for the future needs of your families
          and businesses based on your desires. We can help you plan ahead and
          prepare the appropriate documents. Most decisions regarding your
          assets, family and individual wishes can be addressed while you are
          still living, making decisions easier for your survivors. We want to
          help you find security in knowing that your wishes are carried out
          after your death.</span
        >
      </div>
      <div class="estate__list">
        <ul class="ml-5 mt-6">
          <li class="estate__text mb-1" v-for="(item, i) in items" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const ITEMS = [
  "Wills",
  "Trusts",
  "Power of Attorney (Durable, Springing, Healthcare)",
  "Advanced Healthcare Directives/Living Wills",
  "Charitable Planning",
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
.estate {
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
}
</style>
