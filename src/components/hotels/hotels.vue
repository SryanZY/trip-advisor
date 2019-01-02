<template>
  <div class="hotels">
    <div class="hotel">
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
    <Contact @sendMess="sendMess"><p class="slogan">Let us know if you wanna our help.<em>Email us</em></p></Contact>
    <mask-wrapper :content="content" :tan="tan" ref="maskWrapper" ></mask-wrapper>
  </div>
</template>

<script>
import Contact from 'components/contact/contact'
import MaskWrapper from 'components/masks/masks'
import axios from 'axios'

export default {
  name: 'hotels',
  data () {
    return {
      imgSrc: require('./hotel.jpg'),
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

  .hotel
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
    .hotel
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
