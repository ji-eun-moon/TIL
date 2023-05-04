<template>
  <div>
    <h2>세액감면 : (-) {{ taxCredit }} 만원</h2>
    <hr>
    <h2>결정세액 : {{ finalTax }} 만원 </h2>
  </div>
</template>

<script>
export default {
  name: 'FinaltaxView',
  props: {
    afterTax: Number,
    taxCredit: Number,
  },
  computed: {
    finalTax () {
      return this.afterTax - this.taxCredit >= 0 ? this.afterTax - this.taxCredit : 0
    }
  }
}
</script>

<style>

</style>