import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers, upgrades } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ARBITRUM_TOKENS } from "../../utils/constants";
import { write } from "../../utils/io";
import { EZIOV1, EZIOV1__factory, XEZIOV1, XEZIOV1__factory } from "../../types";
import {BigNumber} from "ethers";
const USDC_ADDRESS = ARBITRUM_TOKENS.USDC;
const ADMIN_WALLET_ADDRESS = process.env.ADMIN_WALLET_ADDRESS||"";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments } = hre;
  const { deploy } = deployments;
  const filePath = hre.config.paths.deployments+"\\"+hre.network.name;
  //await write(filePath,".chainId",await hre.getChainId());
  let ezio: EZIOV1;
  let xezio: XEZIOV1;
  let signer : SignerWithAddress;
  [signer] = await ethers.getSigners();
  //deploy EZIOV1 contract
  const EZIOV1Factory = new EZIOV1__factory(signer);
  ezio = await upgrades.deployProxy(EZIOV1Factory, ["Ezio Token","EZIO"]) as EZIOV1;
  await ezio.deployed();
  console.log("-------------EZIOV1 deployed to:", ezio.address);
  await write(filePath,"EZIOV1.json",JSON.stringify({"address":ezio.address,"abi":EZIOV1__factory.abi}));
  //deploy xEZIOV1 contract
  const XEZIOV1Factory = new XEZIOV1__factory(signer);
  xezio = await upgrades.deployProxy(XEZIOV1Factory, ["Ezio Escrowed Token","xEZIO"]) as XEZIOV1;
  await xezio.deployed();
  console.log("-------------xEZIOV1 deployed to:", xezio.address);
  await write(filePath,"xEZIOV1.json",JSON.stringify({"address":xezio.address,"abi":XEZIOV1__factory.abi}));
  //deploy EzioPublicSale contract
  let dateTime = BigNumber.from(new Date().getTime()).div(1000);
  const publicSaleDeployment = await deploy("EzioPublicSale", {
    from: signer.address,
    args: [USDC_ADDRESS,ezio.address,xezio.address,ADMIN_WALLET_ADDRESS,dateTime.add(30),dateTime.add(1200)],
    log: true,
    skipIfAlreadyDeployed: true
  });
  await ezio.mint(publicSaleDeployment.address,ethers.utils.parseEther("65000000"));
  await xezio.mint(publicSaleDeployment.address,ethers.utils.parseEther("35000000"));
};

func.tags = ["EzioPublicSale"];

export default func;
