const Wedding = artifacts.require("Wedding");
const Weddings = artifacts.require("Weddings")

module.exports = function(deployer) {
    
    deployer.deploy(Wedding);
    deployer.deploy(Weddings)
};  