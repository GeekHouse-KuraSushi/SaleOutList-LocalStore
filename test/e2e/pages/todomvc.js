module.exports = function (browser){
  this.show = () => {
    const devServer = browser.globals.devServerURL
    return browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
  }
  this.shouldSeeTitleAndInput = () => {
    return browser
      .assert.elementPresent('.header')
      .assert.containsText('h1', 'todos')
      .assert.elementPresent('.new-todo')
  }
}