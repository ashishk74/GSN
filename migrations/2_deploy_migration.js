const ERC20 = artifacts.require("ERC20");

module.exports = function(deployer) {
    const name = 'LakshmiToken';
    const symbol = 'ANNA';
    const decimals = 2;

    deployer.deploy(ERC20, name, symbol, decimals);
};
