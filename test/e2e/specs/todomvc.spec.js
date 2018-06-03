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
    },
    '輸入欄位應該在輸入代辦事項後清空'(browser) {
        const devServer = browser.globals.devServerURL;
        const todo = 'This is new todo'
            browser
                .url(devServer)
                .waitForElementVisible('#app', 5000)
                .setValue('.new-todo',[todo,browser.Keys.ENTER])
                .assert.value('.new-todo','')
                .end();
        },
}