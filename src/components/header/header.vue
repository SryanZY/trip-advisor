<template>
  <div class="header">
    <a href="javascript:void(0);" class="web-logo">
      <img src="https://cc.ddcdn.com/img2/langs/zh_CN/branding/rebrand/TA_logo_primary.svg" alt="猫途鹰">
    </a>
    <div class="header-img-container">
      <img src="https://ccm.ddcdn.com/cms/site/branding/videos/tahiti/poster.png" alt="logo">
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  },
  components: {}

}

</script>
<style lang='stylus' scoped>
  .header
    width 100%
    background #fff
    box-sizing border-box
    .web-logo
      display block
      vertical-align top
      user-select none
      margin-right 12px
      max-width 1170px
      margin 0 auto
      height 50px
      img
        width 220px
        height 50px
    .header-img-container
      position relative
      overflow hidden
      img
        width 100%

  @media (max-width: 768px)
    .header
      .web-logo
        max-width 768px
        text-align center
</style>
