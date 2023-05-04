import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { EzioPublicSale, EzioPublicSale__factory, EZIOV1, EZIOV1__factory, XEZIOV1, XEZIOV1__factory } from "../../types";
import { BigNumber } from "ethers";
import { ARBITRUM_TOKENS, sleep } from "../../utils/constants";
import {write} from "../../utils/io";
const hre = require("hardhat");

const USDC_ADDRESS = ARBITRUM_TOKENS.USDC;
const ADMIN_WALLET_ADDRESS = process.env.ADMIN_WALLET_ADDRESS||"";
async function main() {
  const filePath = hre.config.paths.deployments+"\\"+hre.network.name;
  let ezio: EZIOV1;
  let xezio: XEZIOV1;
  let publicSale: EzioPublicSale;
  let signer : SignerWithAddress;
  [signer] = await ethers.getSigners();
  const EZIO_JSON = require("../../deployments/arbitrum/EZIOV1.json");
  const XEZIO_JSON = require("../../deployments/arbitrum/xEZIOV1.json");
  ezio = EZIOV1__factory.connect(EZIO_JSON.address,signer);
  xezio = XEZIOV1__factory.connect(XEZIO_JSON.address,signer);
  //redeploy EzioPublicSale contract
  let dateTime = BigNumber.from(new Date().getTime()).div(1000);
  publicSale = await new EzioPublicSale__factory(signer).deploy(USDC_ADDRESS,ezio.address,xezio.address,ADMIN_WALLET_ADDRESS,dateTime.add(30),dateTime.add(259200));
  await publicSale.deployed();
  await write(filePath,"EzioPublicSale.json",JSON.stringify({"address":publicSale.address,"abi":EzioPublicSale__factory.abi}));
  await sleep(5000);
  await ezio.mint(publicSale.address,ethers.utils.parseEther("65000000"));
  await xezio.mint(publicSale.address,ethers.utils.parseEther("35000000"));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
