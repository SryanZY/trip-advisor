<template>
  <div id="app">
    <trip-header></trip-header>
    <div class="tour-wrapper">
      <div class="tab">
        <router-link to="/tour" class="tab-item">Tours</router-link>
        <router-link to="/hotels" class="tab-item">Hotels</router-link>
        <router-link to="/trains" class="tab-item">Trains</router-link>
        <router-link to="/vehicles" class="tab-item">Vehicles</router-link>
      </div>
      <keep-alive>
        <router-view />
      </keep-alive>
      <hrefs></hrefs>
    </div>
  </div>
</template>

<script>
import TripHeader from 'components/header/header'
import Hrefs from 'components/hrefs/hrefs'

export default {
  name: 'app',
  components: {
    TripHeader,
    Hrefs
  }
}
</script>
<style lang="stylus">
  #app
    width 100%
    height 100%
    .tour-wrapper
      max-width 1170px
      margin 0 auto 50px
      .tab
        margin-top 50px
        margin-bottom 30px
        display flex
        height 45px
        border 1px solid #e3e2df
        border-bottom-color #e3e2df
        box-shadow 0 1px 5px 1px #e3e2df
        .tab-item
          flex 1
          display block
          height 35px
          padding 4px 15px
          line-height 35px
          border-left 1px solid #dad7c8
          color #9e9a89
          font-weight bold
          background #f4f3f0
          text-align center
          cursor pointer
          position relative
          transition all 100ms linear
          &.active-link
            color #00a680
            font-weight bold
            background #fff
            border-bottom 4px solid #00a680
            &:after
              content ''
              position absolute
              left 50%
              bottom -22px
              width 0
              height 0
              margin-left -8px
              border solid transparent
              border-top-color #00a680
              border-width 10px 12px
          &:hover
            color #6a685e
            background #e3e3e3
          &:first-child
            border-left none

    @media (max-width: 768px)
      .tour-wrapper
        max-width 768px
        margin 0 0 40px
        .tab
          margin 20px 0 10px 0
          .tab-item
            &.active-link
              &:after
                border none
</style>
