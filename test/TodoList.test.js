const TodoList = artifacts.require("./TodoList.sol");

contract("TodoList", (accounts) => {
  before(async () => {
    this.todoList = await TodoList.deployed();
  });

  it("deployed", async () => {
    const address = await this.todoList.address;
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
  });

  it("lists tasks", async () => {
    const taskCount = await this.todoList.taskCount();
    const task = await this.todoList.tasks(taskCount);
    assert.equal(task.id.toNumber(), taskCount.toNumber());
  });
});
