<template>
  <div class="elder">
    <div class="elder__section">
      <div class="elder__text">
        <span
          >Guest Law Office is a legal practice which addresses the planning and
          implementation issues of becoming elderly, dealing with disability,
          and handling death transfers. Our goal is to address the needs of
          seniors and aid their families in accomplishing their goals. Our focus
          is on the financial security and the necessary end of life property
          transitions of our clients and their families. Each client is unique
          and our services are tailored to meet the client's individual needs.
        </span>
      </div>
      <div class="elder__text font-6 mt-9">
        <span>Our Elder Law services include:</span>
      </div>
      <div class="elder__list">
        <ul class="ml-5 mt-6">
          <li class="elder__text mb-1" v-for="(item, i) in items" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const ITEMS = [
  "Asset Preservation",
  "Medicaid Eligibility",
  "Guardianship",
  "Special Needs Planning",
  "VA Benefits Planning",
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
.elder {
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
