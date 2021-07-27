const express = require('express')
const router = express.Router()
const URL = require('../../models/url')
const { urlInputValidation, randomUrlCode } = require('../../tools/utility')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', async (req, res) => {
  // 檢查 inputURL 格式
  const inputURL = req.body.originURL.trim()
  // urlValidation.Type = regex.test(url) // Boolean
  const urlValidation = !urlInputValidation(inputURL)

  // 回傳 boolean ，若為 true ，則顯示錯誤訊息
  if (urlValidation) {
    return res.render('index', { urlValidation, inputURL })
  }

  let shortenURL = ''
  
  // 在 URL 尋找先前定義的 originURL 並且使其值為 inputURL
  // 令 url 為成功搜尋出結果的 { originURL : inputURL } 資料
  const url = await URL.findOne({ originURL: inputURL }).lean()
  // console.log(url)

  if (url) {
    shortenURL = url.shortenURL
    return res.render('index', { shortenURL, inputURL })
  }

  // 亂數產生六碼英數字
  let urlCode = randomUrlCode()

  // distinct: 在 URL 內尋找名稱符合 urlCode 的資料，並將其值設為 urlCodeArr
  const urlCodeArr = await URL.find().distinct('urlCode').lean()

  // console.log(urlCodeArr)
  // 若有重複，則持續產出不同的短網址
  while (urlCodeArr.includes(urlCode)) {
    urlCode = randomUrlCode()
  }

  if (req.headers.host === 'localhost:3000') {
    shortenURL = `http://${req.headers.host}/${urlCode}`
  } else {
    shortenURL = `https://${req.headers.host}/${urlCode}`
  }

  // 最後產生一筆新資料(解構賦值)
  return URL.create({
    originURL: inputURL,
    shortenURL,
    urlCode
  })
    .then(() => res.render('index', { shortenURL, inputURL }))
})

router.get('/:id', (req, res) => {
  // 將 urlCode 設為 req.params.id
  const urlCode = req.params.id
  // console.log(urlCode)

  // 不曉得這行程式碼的作用，但移除後會有錯誤 (originURL = "null")
  if (urlCode === 'favicon.ico') return res.redirect('/')

  return URL.findOne({ urlCode })
    .lean()
    .then(url => {
      res.redirect(url.originURL)
    })
    .catch(err => console.error(err))
})

module.exports = router