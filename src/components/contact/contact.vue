<template>
  <div class="contact">
    <slot></slot>
    <div class="inp-wrapper">
      <input type="text" placeholder="please email us" class="inp">
      <button class="btn">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {}
  }

}

</script>
<style lang='stylus' scoped>
  .contact
    display flex
    flex-direction column
    .inp-wrapper
      padding-left 20px
      flex 1
      display flex
      .inp
        margin-right 10px
        width 430px
        height 16px
        background #fff
        padding 12px 0 12px 11px
        outline 0
        border none
        border-radius 5px
        &:focus
          border none
      .btn
        width 138px
        height 39px
        font-size 16px
        color #fff
        border-radius 3px
        overflow hidden
        border none
        background-image none
        background-color #00a680
        font-family "Heiti SC", "Microsoft YaHei"
        -webkit-appearance none
        cursor pointer
        &:hover
          background #498e6c
          transition all .5s linear

  @media (max-width: 768px)
    .contact
      .inp-wrapper
        .inp
          width 230px
        .btn
          width 68px
</style>
