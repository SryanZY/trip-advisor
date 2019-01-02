<template>
  <div class="tours">
    <div class="tour" v-for="(tour, index) in tours" :key="index">
      <h2 class="tour-title"><i>{{ tour.title }}</i></h2>
      <div class="landcape-wrapper" v-for="(viewport, i) in tour.viewpoints" :key="i">
        <div class="img-container" :class="{ 'long': viewport.longer, 'longPoint': viewport.longPoint }">
          <img :src="viewport.src" alt="train">
          <div class="mask">{{ viewport.name }}</div>
        </div>
        <div class="desc" :class="{ 'longPoint': viewport.longPoint, 'long': viewport.longer }">
          <div class="desc-wrapper">
            <p class="first-line">{{ viewport.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <Contact @sendMess="sendMess">
      <p class="slogan">Let us know which place  you wanna visit in China ,we will help you plan a perfect trip. <em>Email us</em></p>
    </Contact>
    <mask-wrapper :content="content" :tan="tan" ref="maskWrapper"></mask-wrapper>
  </div>
</template>

<script>
import Contact from 'components/contact/contact'
import MaskWrapper from 'components/masks/masks'
import axios from 'axios'

export default {
  name: 'tour',
  data () {
    return {
      tours: [
        {
          title: 'Beijing',
          viewpoints: [
            {
              src: require('./badaling.jpg'),
              name: 'The Great Wall-BaDaLing',
              text: 'The Great Wall was built in different times and dynasties, largely constructed in the three dynasties – Qin Dynasty (221 B.C to 206 B.C); Han Dynasty (206 B.C.– 220 A.D ) and Ming Dynasty (1368 A.D - 1644 A.D). The most powerful Yuan Dynasty (1271 A.D - 1368 A.D) and the last Qing Dynasty (1644 A.D - 1911 A.D) did nothing about the building of the Great Wall since they were "barbarians" against whom the Great Wall of China had been built.'
            },
            {
              src: require('./mutianyu.jpg'),
              name: 'The Great Wall-MuTianYu',
              text: 'For historical and geographical reasons, the Great Wall of China doesn not form a continuous line and in fact exits in different sections. The official survey shows the Great Wall now totals 21196 km long with the Great Wall built in Ming Dynasty ( 1368A.D - 1644 A.D ) as long as 8851 km.'
            },
            {
              src: require('./jinshanling.jpg'),
              name: 'The Great Wall-JinShanLing',
              longer: true,
              text: 'Currently there are 8 official locations of the Great Wall around Beijing open to visitors. These 8 sections of the Great Wall is tamed, renovated or half restored, and some parts are still left wild and original. Safety measures have been taken on these official sections of the Great Wall with guardrails if necessary, security guards, restaurants, toilets and parking lots. The 8 chunks of the Great Wall include Juyongguan Pass Great Wall, Badaling Great Wall, Shixiaguan Great Wall, Huanghuacheng Great Wall, Mutianyu Great Wall, Gubeikou Great Wall, Jinshanling Great Wall and Simatai Great Wall. Each section of the Great Wall has its own geographic and construction features. '
            },
            {
              src: require('./forbidden.png'),
              name: 'The Forbidden City',
              text: 'The Forbidden City is listed by UNESCOas the largest collection of preserved ancient wooden structures in the world. The Forbidden City was declared a World Heritage Site in 1987 as the "Imperial Palace of the Ming and Qing Dynasties.'
            }
          ]
        },
        {
          title: 'Xian',
          viewpoints: [
            {
              src: require('./Warriors.png'),
              name: 'Terracotta Warriors',
              text: 'Terracotta Warriors-This small but inspiring exhibition on the Terracotta Warriors of the First Emperor of China\'s famous Terracotta Army brings together all the wonder of the discovery of these amazing treasures of ancient China.'
            }
          ]
        },
        {
          title: 'Guilin',
          viewpoints: [
            {
              src: require('./LiRiver.png'),
              name: 'Li River Cruise',
              text: 'LiRiver cruising-The Li River Cruise is the #1 Activity to do in Guilin!The landscape is decorated with startling hills, steep cliffs, fantastic caves and farming villages, and is lined with bamboo. In a Chinese poem it is written: “The river is a green silk ribbon, and the hills are jade hairpins”'
            }
          ]
        },
        {
          title: 'Chongqing',
          viewpoints: [
            {
              src: require('./Yangtze.png'),
              name: 'Yangtze River Cruising',
              longPoint: true,
              text: 'Yangtze River, the third longest river in the world, is one of the two Mother Rivers of China. Taking a luxury cruise along the Yangtze River is the best way to discover the charm of the central part of China and savor the natural sceneries, culture, history, and other characteristics of this charming great river. Along the sailing, you will pass through the fabulous Three Gorges, witness the world great project – Three Gorges Dam, and visit domestic famous places of interests, with some primitive, some full of culture and history, and some new to your imagination. While onboard the cruise, you will spend really leisure time to release your body and mind. Encounter with people from different countries and regions, relax in the comfortable luxury rooms, have fun with many activities, taste rich kinds of cuisines, and be good taken care of by the smiling crews and cruise managers, etc. Your holiday onboard the cruise along the Yangtze River will be your unforgettable memory.Yangtze cruise is quite suitable for senior travelers. Guests will stay 3 nights on the cruise and spend their time at a leisurely pace.'
            }
          ]
        }
      ],
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

  .tour
    display flex
    flex-direction column
    margin-bottom 20px
    .tour-title
      padding-left 20px
      margin-bottom 10px
      i
        font-size 24px
        font-weight 600
        line-height 26px
        color #000a12
    .landcape-wrapper
      display flex
      margin-bottom 15px
      padding 5px 20px
      .img-container
        flex 0 0 418px
        position relative
        width 418px
        height 198px
        &.long
          height 233px
        &.longPoint
          height 300px
        img
          width 100%
          height 100%
        .mask
          position absolute
          bottom 0
          left 0
          width 100%
          height 35px
          padding 0 15px
          box-sizing border-box
          line-height 40px
          background linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0.4) 25%,rgba(0,0,0,0.9) 100%)
          color #fff
          font-size 14px
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
        &.long
          height 233px
        &.longPoint
          height 300px
          font-size 18px
          padding 10px 30px 10px
        .desc-wrapper
          max-width 650px
          color $color-col-line
          text-indent 30px
  .slogan
    margin-bottom 40px
    padding-left 20px
    font-size 22px
    line-height 24px
    color #000a12
    em
      font-weight 600

  @media (max-width: 768px)
    .tour
      .tour-title
        i
          font-size 18px
          line-height 20px
      .landcape-wrapper
        flex-direction column
        .img-container
          flex 0 0 0
          margin-bottom 5px
          width 334.4px
          height 158.4px
          &.long
            height 186.4px
          &.longPoint
            height 240px
        .desc
          height auto
          font-size 16px
          padding 15px 15px 5px
          &.long
            height auto
          &.longPoint
            height auto
          .desc-wrapper
            max-width 350px
            text-indent 20px
    .slogan
      font-size 18px
      line-height 20px
      padding-right 20px
</style>
