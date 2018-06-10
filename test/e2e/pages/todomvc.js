module.exports = function (browser){
  const firstTodoItem = '.todo-list > .todo:first-child';
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
  this.makeTodoCompleted = () => {
    return browser
      .click(firstTodoItem + '>.view > .toggle')
  }
  this.shouldCompleteTodo = () => {
    return browser
      .assert.cssClassPresent(firstTodoItem, 'completed')
  }
  this.deleteTodo = () => {
    return browser
      .moveToElement('.todo-list > .todo:first-child',10,10)
      .click('.todo-list > .todo:first-child > .view > button.destroy');
  }
  this.shouldGetEmptyTodoList = () => {
    return browser
      .assert.elementCount('.todo',0)
  }
}