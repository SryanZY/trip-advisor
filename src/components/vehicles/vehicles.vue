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
    <Contact @sendMess="sendMess"><p class="slogan">Let us know if you wanna book.<em>Email us</em></p></Contact>
    <mask-wrapper :content="content" :tan="tan" ref="maskWrapper" ></mask-wrapper>
  </div>
</template>

<script>
import Contact from 'components/contact/contact'
import MaskWrapper from 'components/masks/masks'
import axios from 'axios'

export default {
  name: 'vehicles-booking',
  data () {
    return {
      imgSrc: require('./vehicle.jpeg'),
      content: '',
      tan: ''
    }
  },
  methods: {
    sendMess (name, email, content) {
      let formData = {
        name: name,
        visitor_email: email,
        content: content
      }
      /* eslint-disable */
      let ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
      /* eslint-disable */
      if (!formData.name) {
        this.tan = '!'
        this.content = 'Please enter your name'
      }
      if (!ePattern.test(formData.visitor_email) || !formData.visitor_email) {
        this.tan = '!'
        this.content = 'Please enter the correct format email address'
      }
      if (!formData.content) {
        this.tan = '!'
        this.content = 'Please enter your content'
      }
      axios({
        method: 'post',
        url: 'http://47.105.180.76/mail/send',
        data: formData
      }).then(res => {
        console.log(res)
        if (res.status && formData.name && formData.visitor_email && formData.content) {
          this.tan = ''
          this.content = 'Mail sent successfully!'
        } else if (!res.status && formData.name && formData.visitor_email && formData.content) {
          this.tan = ''
          this.content = 'Mail sent failed'
        }
      }).catch(error => console.log(error))
      this.$refs.maskWrapper.isShow = true
    }
  },
  components: {
    Contact,
    MaskWrapper
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
    margin-bottom 40px
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
