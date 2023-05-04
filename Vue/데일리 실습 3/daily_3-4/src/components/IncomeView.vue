<template>
    <div>
        <label for="income">연봉 입력 (만원) : </label>
        <input type="number" id="income" v-model.number="income">
        <br>
        <label for="tax-credit">세액감면액 (만원) : </label>
        <input class="numInput" id="tax-credit" type="number" v-model.number="taxCredit">
        <hr>
        <h2>종합소득금액 : {{ income }} 만원</h2>
        <h2>종합소득공제 : (-) 150 만원</h2>
        <h2>과세표준 : {{ taxBase }} 만원</h2>
        <hr>
        <TaxrateView :taxBase="taxBase" :taxCredit="taxCredit"/>

    </div>

</template>

<script>
import TaxrateView from './TaxrateView.vue'

export default {
    name: 'IncomeView',
    components: {
        TaxrateView
    },
    data: function() {
        return {
            income : 0,
            taxCredit : 0,
        }
    },
    computed: {
        taxBase () {
            return this.income - 150 >= 0 ? this.income - 150 : 0
        }
    }

}
</script>

<style>

</style>