<template>
  <div class="contact">
    <slot></slot>
    <div class="wrapper">
      <div class="inp-wrapper">
        <div class="form-group">
          <label class="form-label">
            <span class="text">*</span>Name:
          </label>
          <input type="text" required class="inp" placeholder="Please enter your name" v-model.trim="name">
        </div>
        <div class="form-group">
          <label class="form-label">
            <span class="text">*</span>Mailbox:
          </label>
          <input type="email" required class="inp" placeholder="Please enter your email address" v-model.trim="email">
        </div>
        <div class="form-group">
          <label class="form-label">
            <span class="text">*</span>Content:
          </label>
          <input type="text" required class="inp" placeholder="Tell me what you want" v-model.trim="content">
        </div>
        <div class="form-btn">
          <button class="btn" @click="sendMess">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      name: '',
      email: '',
      content: ''
    }
  },
  methods: {
    sendMess () {
      this.$emit('sendMess', this.name, this.email, this.content)
    }
  }

}

</script>
<style lang='stylus' scoped>
  .contact
    display flex
    flex-direction column
    .wrapper
      flex 1
      padding-left 20px
      display flex
      justify-content center
      .inp-wrapper
        display flex
        flex-direction column
        align-items center
        justify-content center
        width 800px
        border 2px solid #ccc
        border-radius 5px
        padding 20px
        .form-group
          margin-bottom 20px
          display flex
          align-items center
          .form-label
            flex 0 0 80px
            width 80px
            text-align right
            font-size 18px
            font-weight 600
            .text
              color #dc3545
              font-size 16px
          .inp
            margin-left 10px
            flex 0 0 430px
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
      .wrapper
        padding-left 0
        .inp-wrapper
          width auto
          border none
          padding 10px
          .form-group
            .form-label
              flex 0 0 70px
              width 70px
              font-size 16px
              .text
                font-size 14px
            .inp
              flex 0 0 230px
              width 230px
              padding-left 8px
              font-size 15px
          .btn
            width 68px
</style>
