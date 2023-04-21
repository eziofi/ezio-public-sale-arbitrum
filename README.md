# Ezio Finance Project Contract Repository

This repository contains:

- `EZIO.sol` Ezio Token of Ezio Finance Project, Based on
  [OpenZeppelin]'s [`ERC20PausableUpgradeable`] contract,

- `xEZIO.sol` Ezio Escrowed Token of Ezio Finance Project, Based on
  [OpenZeppelin]'s [`ERC20PausableUpgradeable`] contract,

- `EzPublicSale.sol` Public Sale Contract of Ezio Finance Project

[OpenZeppelin]: https://openzeppelin.org/
[`ERC20PausableUpgradeable`]: https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/token/ERC20/extensions/ERC20PausableUpgradeable.sol
[`TransparentUpgradeableProxy`]: https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/transparent/TransparentUpgradeableProxy.sol

Environment Variable
-----

Rename .env.example to .env,Fill in PRIVATE_KEY,ARBITRUM_RPC_URL,ARBITRUM_SCAN_API_KEY and ADMIN_WALLET_ADDRESS

Build
-----

This project is built on [Hardhat] and [OpenZeppelin] frameworks.  In order to
install them:

    npm install

The following command compiles every contract in the repository:

    npx hardhat compile

[Hardhat]: https://hardhat.org/docs
