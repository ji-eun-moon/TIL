<template>
  <div class="lunch">
    <h1>점심 메뉴</h1>
    <button @click="pickLunch">Pick Lunch</button>
    <p>{{ selectedLunchMenu }}</p>

    <h2>로또를 뽑아보자</h2>
    <button @click="pickLottoNum">Pich Lotto</button>

  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"></script>
<script>
import _  from  "lodash"

export default {
  name: 'TheLunch',
  data: function (){
    return {
      lunch: ['국밥', '짜장면', '햄버거', '파전', '돈가스', '제육볶음', '김치볶음밥', '순두부찌개'],
      selectedLunchMenu: null,
    }
  },
  methods: {
    pickLunch: function () {
      this.selectedLunchMenu = _.sample(this.lunch)
    },
    pickLottoNum: function () {
      this.$router.push({ name: 'TheLotto', params: { lottoNum: 6 }})
    },
  }
}
</script>
