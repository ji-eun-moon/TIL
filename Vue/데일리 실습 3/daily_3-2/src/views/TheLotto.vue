<template>
  <div class="lotto">
    <h1>로또</h1>
    <button @click="getNums">Get Lucky Numbers</button>
    <p>{{ selectedNums }}</p>
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"></script>
<script>
export default {
  name: 'TheLotto',
  data: function () {
    return {
      selectedNums: [],
    }
  },
  methods: {
    getNums: function() {
      const numbers = _.range(1, 46)
      this.selectedNums = _.sampleSize(numbers, this.$route.params.lottoNum)
    },
  }
}

</script>
