<template>
  <div class="trains">
    <div class="img-container">
      <img :src="imgSrc" alt="train">
    </div>
    <div class="desc">
      <div class="desc-wrapper">
        <p class="first-line">Trains in China are divided into various types according to their speed, which are identified with a capital Chinese phonetic letter and digits. For example, G is 'High Speed', D is 'Electric Multiple Units', C is 'Intercity EMU'; all the three types look similar and are generally considered as high speed or bullet type. Z means 'Direct Express', T means 'Express', K means 'Fast'; all the three types are normal type. For those powered by steam, they have accomplished their missions and are now a matter of history.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'trains',
  data () {
    return {
      imgSrc: require('./train.jpg')
    }
  },
  components: {}

}

</script>
<style lang='stylus' scoped>
  @import '~common/stylus/variable.styl'

  .trains
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
        max-width 650px
        color $color-col-line
        text-indent 30px
        .first-line
          margin-bottom 15px
</style>
