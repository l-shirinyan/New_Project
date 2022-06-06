<template>
  <div class="real-estate">
    <div class="real-estate__section">
      <div class="real-estate__text">
        <div class="mt-8">
          <span>
            Guest Law Office represents buyers, sellers, property owners, and
            tenants in a variety of real estate transactions and disputes. Our
            most frequently handled
          </span>
        </div>
        <div class="mt-8">
          <span class="font-6"> Real Estate Law issues include: </span>
        </div>
      </div>
      <div class="real-estate__list">
        <ul class="ml-5 mt-4">
          <li
            class="real-estate__text mb-1"
            v-for="(item, i) in items"
            :key="i"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const ITEMS = [
  "Foreclosure Defense",
  "Contract Review, Drafting and Negotiation",
  "Representation at Closing",
  "Breach of Contract Disputes",
  "Misrepresentation or Failure to Disclose Defects Claims",
  "Trespass and Nuisance Claims",
  "Code Enforcement Matters",
  "Landlord and Tenant Disputes",
  "Personal and Commercial Evictions",
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
.real-estate {
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
