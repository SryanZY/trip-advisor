<template>
  <div class="hrefs">
    <h2 class="title">Contact us</h2>
    <div class="hrefs-wrapper">
      <div class="wrapper" v-for="(item, index) in items" :key="index">
        <span class="name">{{ item.name }}</span>
        <span class="hrefs-content" :title="item.content">{{ item.content }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      items: [
        {
          name: 'Address:',
          content: 'HNA City Building 3 room 206 ShunYi District BeiJing'
        },
        {
          name: 'Phone call:',
          content: '+8618810770684 '
        },
        {
          name: 'Email:',
          content: 'wym1990516@gmail.com'
        },
        {
          name: 'WhatsApp:',
          content: '+8617610736081'
        },
        {
          name: 'WeChat:',
          content: 'wym199051'
        }
      ]
    }
  }
}

</script>
<style lang='stylus' scoped>
  .hrefs
    margin-top 30px
    padding-left 20px
    width 100%
    .title
      margin-bottom 20px
      font-size 26px
      color #2c2c2c
    .hrefs-wrapper
      display flex
      flex-direction column
      .wrapper
        display flex
        margin-bottom 20px
        font-size 20px
        color #646060
        line-height 28px
        padding-left 18px
        border-left 5px solid #38f
        .name
          flex 0 0 120px
          width 120px
          color #00a680
        .hrefs-content
          flex 1

  @media (max-width: 768px)
    .hrefs
      .hrefs-wrapper
        .wrapper
          font-size 18px
          .hrefs-content
            flex 0 0 210px
            width 210px
            word-wrap break-word

</style>
