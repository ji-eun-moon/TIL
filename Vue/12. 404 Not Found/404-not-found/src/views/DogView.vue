<template>
  <div>
    <p v-if="!imgSrc">{{ message }}</p>
    <img v-if="imgSrc" :src="imgSrc" alt=""><br>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'DogView',
    data() {
        return {
            imgSrc: null,
            message: "로딩중..."
        }
    },
    methods: {
        getDogImage(){
            const breed = this.$route.params.breed // 품종 가져오기
            const dogImageSearchURL = `https://dog.ceo/api/breed/${breed}/images/random`

            axios({
                method:'get',
                url: dogImageSearchURL
            })
              .then((response) =>{
                console.log(response)
                const imgSrc = response.data.message
                this.imgSrc = imgSrc
              })
              .catch((error) => {
                // this.message=`${this.$route.params.breed}는 없는 품종입니다`
                // axios 요청이 실패할 경우 404페이지로 이동 시킬 수도 있음
                this.$router.push('/404')
                console.log(error)
            })
        }
    },
    created() {
      this.getDogImage()
    }
}
</script>

<style>

</style>