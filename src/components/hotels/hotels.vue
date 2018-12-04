<template>
  <div class="hotels">
    <div class="img-container">
      <img :src="imgSrc" alt="hotel">
    </div>
    <div class="desc">
      <div class="desc-wrapper">
        <p class="first-line">Are you in the process of searching for an ideal hotel for your leisure trip to Beijing? Tired? Mentally drained by the search for the hundreds of the rated hotels in Beijing?</p>
        <p>So many options are likely to torture you. WE Jasmine tour service, are to hack through the jungle of options and simplify your selection process into 3 options -which more suites your requests.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hotels',
  data () {
    return {
      imgSrc: require('./hotel.jpg')
    }
  },
  components: {}

}

</script>
<style lang='stylus' scoped>
  @import '~common/stylus/variable.styl'

  .hotels
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
