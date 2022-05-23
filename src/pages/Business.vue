<template>
  <div class="business">
    <div class="business__section">
      <div class="business__text">
        <span
          >As a small-business owner, you take risks and make important
          decisions every day. When you face a new opportunity — or confront a
          challenge — the most important decision you can make is whom you
          choose to guide you through and help your business succeed. We have
          over 20 years of experience in advising small businesses in all types
          of legal matters. Our experienced business attorneys can assist you in
          almost any way.
        </span>
      </div>
      <div class="business__text font-6 mt-9">
        <span>Our Business Attorneys can assist you with:</span>
      </div>
      <div class="business__list">
        <ul class="ml-5 mt-6">
          <li class="business__text mb-1" v-for="(item, i) in items" :key="i">
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
.business {
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
