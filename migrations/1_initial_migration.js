const Migrations = artifacts.require("randomWord");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
