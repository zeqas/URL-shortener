const utility = {
  urlInputValidation(url) {
    const regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
    return regex.test(url)
  },
  randomUrlCode() {
    const codeString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let urlCode = ''
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * codeString.length)
      urlCode += codeString[randomIndex]
    }
    return urlCode
  }
}

module.exports = utility

// source: 
// https://stackoverflow.com/questions/161738/what-is-the-best-regular-expression-to-check-if-a-string-is-a-valid-url