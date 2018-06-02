module.exports = {
    '應顯示程式標題與輸入欄位'(browser) {
    const devServer = browser.globals.devServerURL
        browser
            .url(devServer)
            .waitForElementVisible('#app', 5000)
            .assert.elementPresent('.header')
            .assert.containsText('h1', 'todos')
            .assert.elementPresent('.new-todo')
            .end();
    }
}