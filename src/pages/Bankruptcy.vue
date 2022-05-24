<template>
  <div class="bankruptcy">
    <div class="bankruptcy__section">
      <div class="bankruptcy__text">
        <div class="mt-8">
          <span>
            Bankruptcy is not the end of the world. It’s the start of a new one. Get debt relief today.
          </span>
          </div>
          <div class="mt-8">
            <span>
              Confronting the possibility of bankruptcy is difficult. Even making the first call to a lawyer to schedule a 
              consultation may be difficult. However, it is important to make that call sooner rather than later. An 
              experienced bankruptcy attorney can help analyze your financial situation and help you work out the best solution.
            </span>
          </div>
          <div class="mt-8">
            <span>
              Confronting the possibility of bankruptcy is difficult. Even making the first call to a lawyer to schedule a 
              consultation may be difficult. However, it is important to make that call sooner rather than later. An 
              experienced bankruptcy attorney can help analyze your financial situation and help you work out the best solution.
            </span>
          </div>
          <div class="mt-8">
            <span>
              We first consider non-bankruptcy options, such as negotiating debt settlements or selling excess property 
              to pay debts. Sometimes however, these options are not available and we will explain in detail bankruptcy 
              options that fit your situation.
            </span> 
          </div>
          <div class="mt-8">
            <span>
              We first consider non-bankruptcy options, such as negotiating debt settlements or selling excess property 
              to pay debts. Sometimes however, these options are not available and we will explain in detail bankruptcy 
              options that fit your situation.
            </span>
          </div>
          <div class="mt-8">
            <span class="font-6">
              We provide services in the following areas:
            </span>
          </div>
      </div>
      <div class="bankruptcy__list">
        <ul class="ml-5 mt-4">
          <li class="bankruptcy__text mb-1" v-for="(item, i) in items" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const ITEMS = [
  "Chapter 7 Bankruptcy",
  "Chapter 13 Bankruptcy",
  "Debtor representation and defense",
  "Defense of Debt-Based Lawsuits (credit card debt, loan debt and vehicle repossession)",
  "Unfair Debt Collection (abusive language, excessive calls or harassment, contact with employers or other about your debt)",
  "Debt Settlement Negotiation (Negotiating to Stop Creditor Calls, Eliminate or Reduce Interest and Penalties, and Set Workable Payment Plans)",
  "Student Loan Help",
  "Stop Wage Garnishment, Repossession & Foreclosure",
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
.bankruptcy {
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
