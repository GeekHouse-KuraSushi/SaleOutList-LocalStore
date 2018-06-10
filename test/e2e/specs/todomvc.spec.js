module.exports = {
    '應顯示程式標題與輸入欄位'(browser) {
    const devServer = browser.globals.devServerURL
        browser
            .page.todomvc().show()
            .page.todomvc().shouldSeeTitleAndInput()
            .end();
    },
    '輸入欄位應該在輸入代辦事項後清空'(browser) {
        const devServer = browser.globals.devServerURL;
        const todo = 'This is new todo'
            browser
                .page.todomvc().show()
                .setValue('.new-todo',[todo,browser.Keys.ENTER])
                .assert.value('.new-todo','')
                .end();
        },
    '新增測試'(browser){
        const devServer = browser.globals.devServerURL;
        const  todo = 'This is new todo';
        browser
        .page.todomvc().show()
        .setValue('.new-todo',[todo,browser.Keys.ENTER])
        .waitForElementVisible('.todo-list > .todo:first-child',1000)
        .assert.containsText('.todo-list > .todo:first-child > .view > label', todo)
        .end();
        
    },
    '沒新增列表隱藏'(browser){
        const devServer = browser.globals.devServerURL;
        browser
        .page.todomvc().show()
        .assert.hidden('.main',1000)
        .end();
    },
    '刪除事項'(browser){
        const devServer = browser.globals.devServerURL;
        const  todo = 'This is new todo';
        browser
        .page.todomvc().show()
        .setValue('.new-todo',[todo,browser.Keys.ENTER])
        .waitForElementVisible('.todo-list > .todo:first-child',1000)
        .assert.containsText('.todo-list > .todo:first-child > .view > label', todo)
        .page.todomvc().deleteTodo()
        .page.todomvc().shouldGetEmptyTodoList()
        .end();
    },
}