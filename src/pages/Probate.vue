<template>
  <div class="probate">
    <div class="probate__section">
      <div class="probate__text">
        <span
          >Probate is the process of settling the estate of a deceased person.
          It involves probating the will and other assets to ensure that the
          wishes of the deceased are followed according to estate planning
          documentation. At Guest Law Office we are experienced in the
          administration of the estate including the probate process, advising
          executors and trustees, as well as representing our clients in probate
          litigation.
        </span>
      </div>
      <div class="probate__text mt-8">
        <span
          >We are experienced in all aspects of probate and litigation and have
          the experience to ensure the proper filing and completion of all
          information, paperwork, deeds, forms and returns associated with the
          probate process. We handle all aspects of probate and estate
          administration including:
        </span>
      </div>
      <div class="probate__list">
        <ul class="ml-5 mt-6">
          <li class="probate__text mb-2" v-for="(item, i) in items" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="probate__text mt-8">
        <span
          >You may select us to administer your estate, or to support and guide
          the executor of your estate to ensure that your wishes are carried
          out. For more information about probate and estate administration,
          please contact us for an immediate consultation.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
const ITEMS = [
  "Marshalling and Inventory of the Estate",
  "Appraisals of Property",
  "Identification of Heirs and Beneficiaries",
  "Obtaining pay-off Balances for Debts",
  "Resolving any Contingent Liabilies",
  "Preparation and Submission of State and Federal Tax Returns",
  "Distribution of Assets and Property",
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
.probate {
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
