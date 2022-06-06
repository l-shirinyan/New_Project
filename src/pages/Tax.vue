<template>
  <div class="veterans">
    <div class="veterans__section">
      <div class="veterans__text">
        <div class="mt-8">
          <span>
            When you receive notification of an audit from the IRS, your first
            instinct may be to panic. An audit is a frightening situation; if it
            does not go in your favor, you could be facing tax penalties,
            interest payments and criminal charges. The thought of it can cause
            many sleepless nights. That’s where an IRS tax attorney can help.
          </span>
        </div>
        <div class="mt-8">
          <span>
            When faced with an audit, individuals are often tempted to agree to
            whatever the IRS asks, usually to make the situation disappear. This
            will rarely work out in the taxpayer’s favor.
          </span>
        </div>
        <div class="mt-8">
          <span>
            Individuals should first consult with a tax audit lawyer. A skilled
            IRS tax attorney specializing in audits provides advice to taxpayers
            regarding their rights, ensuring the IRS does not take advantage of
            fear and lack of knowledge about the intricacies of federal tax
            laws.
          </span>
        </div>
        <div class="mt-8">
          <span>
            IRS tax audit attorneys will study the financial and tax situation
            of their clients and utilize it to create a defense strategy. The
            defense in use should be different for an individual taxpayer versus
            a business taxpayer, for example.
          </span>
        </div>
        <div class="mt-8">
          <span class="font-6">
            Our law office can help you in the following areas:
          </span>
        </div>
      </div>
      <div class="veterans__list">
        <ul class="ml-5 mt-4">
          <li class="veterans__text mb-1" v-for="(item, i) in items" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const ITEMS = [
  "Assistance with Tax Compliance, Planning and Controversy Representation",
  "Compliance with New Tax Laws",
  "Minimizing Tax Liability",
  "Legal Representation for a Tax Audit",
  "Negotiating Back Tax Debt",
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
.veterans {
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
