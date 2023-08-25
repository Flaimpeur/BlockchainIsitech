const Wedding = artifacts.require("Wedding");

contract('Wedding', (accounts) => {
  it("should return the wedding greeting", async () => {
    const weddingInstance = await Wedding.deployed();
    const greeting = await weddingInstance.getGreeting();
    assert.equal(greeting, "Congratulations on your wedding!", "The greeting was not correct");
  });
});
