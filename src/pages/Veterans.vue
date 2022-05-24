<template>
  <div class="veterans">
    <div class="veterans__section">
      <div class="veterans__text">
        <div class="mt-8">
          <span>
            Our firm appreciates and understands the unique challenges of service in the armed forces. The founding 
            partner or our firm, J. Dion Guest proudly served in the Gulf War as a United States Marine tanker. It is our 
            honor and privilege to represent the military community in all areas of our practice. We can provide advice 
            and assistance to veterans, service members, and dependents through all phases of the claim and appeal 
            process. Additionally, we will ensure that our clients are informed and understand all the entitlements and 
            benefits that they may be entitled to receive, some of which they may be unaware. 
          </span>
          </div>
          <div class="mt-8">
            <span>
              The process, however, is not an easy one. The application process for Veterans’ Benefits is extremely 
              complex and requires a great deal of supporting documentation in order for a claim to be successful. 
              Furthermore, many people are not aware that they may qualify for benefits under various VA programs 
              through their own service or that of a spouse.
            </span>
          </div>
          <div class="mt-8">
            <span class="font-6">
              The major benefits provided by the VA include:
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
      <div class="mt-8">
        <span>
            If you live in Kentucky and served in the military, you might be entitled to benefits including medical 
            benefits from the U.S. Department of Veterans Affairs (VA). The VA provides benefits to disabled veterans 
            whose medical conditions resulted from their military service.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
const ITEMS = [
  "Compensation benefits (for service-connected disabilities)",
  "Pension (for non-service-connected disabilities)",
  "Burial benefits",
  "Rehabilitation assistance, including education and training",
  "Home loans",
  "Insurance",
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
