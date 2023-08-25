const Wedding = artifacts.require("Wedding");

module.exports = function(deployer) {
  deployer.deploy(Wedding);
};
