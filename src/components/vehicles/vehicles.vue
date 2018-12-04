<template>
  <div class="vehicles">
    <div class="img-container">
      <img :src="imgSrc" alt="hotel">
    </div>
    <div class="desc">
      <div class="desc-wrapper">
        <p class="first-line">No matter what flight you take,which place you are going to, Jasmine tour service will get you there! we provide variety kinds of vehicles for you,Let us know if you wanna book.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vehicles-booking',
  data () {
    return {
      imgSrc: require('./vehicle.jpeg')
    }
  },
  components: {}

}

</script>
<style lang='stylus' scoped>
  @import '~common/stylus/variable.styl'

  .vehicles
    display flex
    padding 5px 20px
    .img-container
      flex 0 0 418px
      width 380px
      height 198px
      img
        width 100%
        height 100%
    .desc
      flex 1
      display flex
      align-items center
      height 198px
      font-size 20px
      font-weight 500
      background #fff
      color $color-background
      line-height 22px
      padding 20px 30px 20px
      box-sizing border-box
      .desc-wrapper
        margin-bottom 15px
        max-width 600px
        color $color-col-line
        text-indent 30px
        .first-line
          margin-bottom 15px
</style>
