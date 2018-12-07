const express = require('express')
const nodemailer = require('nodemailer')
// 加载body-parser 处理post提交过来的数据
const bodyParser = require('body-parser')
const app = express()
const apiRoutes = express.Router()

// bodyParser 设置,自动会在req上面添加
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(bodyParser.json())

apiRoutes.post('/email', function (req, res) {
  if (req.body.name && req.body.email && req.body.content) {
    res.json({
      errno: 0,
      info: 'ok'
    })

    nodemailer.createTestAccount((account) => {
      let transporter = nodemailer.createTransport({
        service: 'qq',
        port: 587,
        secure: false,
        auth: {
          user: '1650329050@qq.com',
          pass: 'rtvfabhksjqqfagf'
        }
      })

      let mailOptions = {
        from: '1650329050@qq.com',
        to: req.body.email,
        subject: `这是一封来自${req.body.name}的邮件`,
        text: req.body.content
      }

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error)
        }
        console.log('Message sent: %s', info.messageId)
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
      })
    })
  } else {
    res.json({
      errno: 1,
      info: 'error'
    })
  }
})

app.use('/api', apiRoutes)

app.use('/', express.static('./dist'))

const port = process.env.PORT || 8900
app.listen(port, function () {
  console.info('复制打开浏览器', 'http://localhost:' + port + '\n')
})
