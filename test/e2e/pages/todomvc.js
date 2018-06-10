module.exports = function (browser){
  this.show = () => {
    const devServer = browser.globals.devServerURL
    return browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
  }
}