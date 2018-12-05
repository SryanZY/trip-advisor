<template>
  <div class="vehicles">
    <div class="vehicle">
      <div class="img-container">
        <img :src="imgSrc" alt="hotel">
      </div>
      <div class="desc">
        <div class="desc-wrapper">
          <p class="first-line">No matter what flight you take,which place you are going to, Jasmine tour service will get you there! we provide variety kinds of vehicles for you,Let us know if you wanna book.</p>
        </div>
      </div>
    </div>
    <Contact><p class="slogan">Let us know if you wanna book.<em>Email us</em></p></Contact>
  </div>
</template>

<script>
import Contact from 'components/contact/contact'
export default {
  name: 'vehicles-booking',
  data () {
    return {
      imgSrc: require('./vehicle.jpeg')
    }
  },
  components: {
    Contact
  }

}

</script>
<style lang='stylus' scoped>
  @import '~common/stylus/variable.styl'

  .vehicle
    display flex
    margin-bottom 20px
    padding 5px 20px
    .img-container
      flex 0 0 418px
      width 418px
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
  .slogan
    margin-bottom 20px
    padding-left 20px
    font-size 22px
    line-height 24px
    color #000a12
    em
      font-weight 600

  @media (max-width: 768px)
    .vehicle
      flex-direction column
      align-items center
      padding 5px 20px
      .img-container
        flex 0 0 0
        margin-bottom 5px
        width 334.4px
        height 158.4px
      .desc
        height auto
        font-size 16px
        padding 15px 15px 5px
        .desc-wrapper
          max-width 350px
          text-indent 20px
    .slogan
      font-size 18px
      line-height 20px
      padding-right 20px
</style>
