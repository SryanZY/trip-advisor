<template>
  <transition name="fade">
    <div class="mask-wrapper" v-show="isShow">
      <div class="dialog-box">
        <div class="mask-header">Message</div>
        <div class="mask-title">
          <span :class="{ 'mask-tan': tan }">{{ tan }}</span>
          <span>{{ text }}</span>
        </div>
        <div class="mask-btn">
          <button @click="cancelShow">Sure</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Bus from 'components/eventBus'
export default {
  name: 'masks',
  props: {
    text: {
      type: String,
      default: ''
    },
    tan: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isShow: false,
      name: '',
      email: '',
      content: ''
    }
  },
  methods: {
    cancelShow () {
      this.isShow = false
      Bus.$emit('clearInput', this.name, this.email, this.content)
    }
  }
}

</script>
<style lang='stylus' scoped>
  .mask-wrapper
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    width 100%
    height 100%
    background-color rgba(0,10,18,.5)
    text-align center
    z-index 100
    &.fade-enter-active, &.fade-leave-active
      transition all .5s linear
    &.fade-enter, &.leave
      opacity 0
    .dialog-box
      position absolute
      top 40%
      left 40%
      width 420px
      padding-bottom 10px
      vertical-align middle
      background-color #fff
      border-radius 4px
      border 1px solid #ebeef5
      font-size 18px
      box-shadow 0 2px 12px 0 rgba(0,0,0,.1)
      text-align left
      overflow hidden
      .mask-header
        position relative
        padding 15px
        padding-bottom 10px
        color #303133
        font-size 18px
        line-height 10px
      .mask-title
        position relative
        padding 10px 15px
        color #606266
        font-size 16px
        line-height 24px
        .mask-tan
          display inline-block
          margin-right 10px
          width 25px
          height 24px
          vertical-align middle
          background-color #e6a23c
          color #fff
          font-weight 600
          text-align center
          font-size 24px
          line-height 24px
          border-radius 50%
      .mask-btn
        padding 5px 15px 0
        text-align right
        button
          display inline-block
          padding 9px 15px
          font-size 12px
          border-radius 3px
          color #fff
          background-color #498e6c
          border 1px solid #498e6c
          outline none
          text-align center
          font-weight 500
          cursor pointer

  @media (max-width: 768px)
    .mask-wrapper
      .dialog-box
        left 20%
        width 260px
</style>
