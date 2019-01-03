<template>
  <div class="trains">
    <div class="train">
      <div class="img-container">
        <img :src="imgSrc" alt="train">
      </div>
      <div class="desc">
        <div class="desc-wrapper">
          <p class="first-line">Trains in China are divided into various types according to their speed, which are identified with a capital Chinese phonetic letter and digits. For example, G is 'High Speed', D is 'Electric Multiple Units', C is 'Intercity EMU'; all the three types look similar and are generally considered as high speed or bullet type. Z means 'Direct Express', T means 'Express', K means 'Fast'; all the three types are normal type. For those powered by steam, they have accomplished their missions and are now a matter of history.</p>
        </div>
      </div>
    </div>
    <Contact @sendMess="sendMess"><p class="slogan">Let us know if you wanna book one.<em>Email us</em></p></Contact>
    <mask-wrapper :text="text" :tan="tan" ref="maskWrapper" ></mask-wrapper>
  </div>
</template>

<script>
import Contact from 'components/contact/contact'
import MaskWrapper from 'components/masks/masks'
import axios from 'axios'

export default {
  name: 'trains',
  data () {
    return {
      imgSrc: require('./train.jpg'),
      text: '',
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
        this.text = 'Please enter your name'
      } else if (!ePattern.test(formData.visitor_email) || !formData.visitor_email) {
        this.tan = '!'
        this.text = 'Please enter the correct format email address'
      } else if (!formData.content) {
        this.tan = '!'
        this.text = 'Please enter your content'
      } else { // 正则验证通过
        this.text = ''
        this.tan = ''
        axios({
          method: 'post',
          url: 'http://47.105.180.76/mail/send',
          data: formData
        }).then(res => {
          if (res.data.status) {
            this.tan = ''
            this.text = 'Mail sent successfully!'
          } else if (!res.data.status) {
            this.tan = '!'
            this.text = 'Mail sent failed'
          }
        }).catch(error => console.log(error))
      }
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

  .train
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
        max-width 650px
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
    .train
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
