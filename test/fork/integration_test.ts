import { ethers, network, upgrades } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import {
  ERC20_ABI,
  ARBITRUM_TOKENS, sleep,
} from "../../utils/constants";
import {EzioPublicSale, EzioPublicSale__factory, EZIOV1, EZIOV1__factory, XEZIOV1, XEZIOV1__factory} from "../../types";
import {BigNumber, Contract} from "ethers";
const hre = require("hardhat");

const USDC_ADDRESS = ARBITRUM_TOKENS.USDC;
const USDC_TAKER_ADDRESS = process.env.ARBITRUM_USDC_TAKER_ADDRESS || '';
const USDC_TAKER_ADDRESS1 = process.env.ARBITRUM_USDC_TAKER_ADDRESS1 || '';

describe("public sale test", function () {
  let signer: SignerWithAddress, usdcTaker: SignerWithAddress, usdcTaker1: SignerWithAddress;
  let usdc: Contract;
  let ezio: EZIOV1;
  let xezio: XEZIOV1;
  let publicSale: EzioPublicSale;
  beforeEach("initialize contracts",async ()=>{
    await hre.network.provider.request({
      method: "hardhat_reset",
      params: [
        {
          forking: {
            jsonRpcUrl: hre.config.networks.hardhat.forking.url,
          },
        },
      ],
    });
    [signer] = await ethers.getSigners();
    usdcTaker = await ethers.getSigner(USDC_TAKER_ADDRESS);
    usdcTaker1 = await ethers.getSigner(USDC_TAKER_ADDRESS1);
    usdc = new ethers.Contract(USDC_ADDRESS, ERC20_ABI, usdcTaker);
    console.log("----------usdcTaker balance=",await usdc.balanceOf(USDC_TAKER_ADDRESS));
    console.log("----------usdcTaker1 balance=",await usdc.balanceOf(USDC_TAKER_ADDRESS1));
    //Simulated account
    await network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [USDC_TAKER_ADDRESS],
    });
    await network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [USDC_TAKER_ADDRESS1],
    });
    //deploy EZIOV1 contract
    const EZIOV1Factory = new EZIOV1__factory(signer);
    ezio = await upgrades.deployProxy(EZIOV1Factory, ["Ezio Token","EZIO"]) as EZIOV1;
    await ezio.deployed();
    console.log("-------------EZIOV1 deployed to:", ezio.address);
    //deploy xEZIOV1 contract
    const XEZIOV1Factory = new XEZIOV1__factory(signer);
    xezio = await upgrades.deployProxy(XEZIOV1Factory, ["Ezio Escrowed Token","xEZIO"]) as XEZIOV1;
    await xezio.deployed();
    console.log("-------------xEZIOV1 deployed to:", xezio.address);
    let dateTime = BigNumber.from(new Date().getTime()).div(1000);
    await sleep(5000);
    //deploy EzioPublicSale contract
    publicSale = await new EzioPublicSale__factory(signer).deploy(USDC_ADDRESS,ezio.address,xezio.address,signer.address,dateTime,dateTime.add(10));
    await ezio.mint(publicSale.address,ethers.utils.parseEther("65000000"));
    await xezio.mint(publicSale.address,ethers.utils.parseEther("35000000"));
  });
  it("integration test", async function () {
    console.log("-----------publicSale ezio balance=",await ezio.balanceOf(publicSale.address));
    console.log("-----------publicSale xezio balance=",await xezio.balanceOf(publicSale.address));
    await sleep(5000);
    await usdc.connect(usdcTaker).approve(publicSale.address,BigNumber.from("2000000000000"));
    await publicSale.connect(usdcTaker).buy(BigNumber.from("2000000000000"));
    await usdc.connect(usdcTaker1).approve(publicSale.address,BigNumber.from("1000000000000"));
    await publicSale.connect(usdcTaker1).buy(BigNumber.from("100000000000"));
    console.log("------------usdcTaker contribution balance=",await publicSale.balanceOf(usdcTaker.address));
    console.log("------------usdcTaker1 contribution balance=",await publicSale.balanceOf(usdcTaker1.address));
    await sleep(20000);
    await publicSale.afterPublicSaleExecute();
    console.log("----------signer balance=",await usdc.balanceOf(signer.address));
    console.log("-----------publicSale ezio balance=",await ezio.balanceOf(publicSale.address));
    console.log("-----------publicSale xezio balance=",await xezio.balanceOf(publicSale.address));
    console.log("-----------publicSale usdc balance=",await usdc.balanceOf(publicSale.address));
    await publicSale.connect(usdcTaker).withdraw();
    await publicSale.connect(usdcTaker1).withdraw();
    console.log("----------usdcTaker ezio balance=",await ezio.balanceOf(USDC_TAKER_ADDRESS));
    console.log("----------usdcTaker xezio balance=",await xezio.balanceOf(USDC_TAKER_ADDRESS));
    console.log("----------usdcTaker1 ezio balance=",await ezio.balanceOf(USDC_TAKER_ADDRESS1));
    console.log("----------usdcTaker1 xezio balance=",await xezio.balanceOf(USDC_TAKER_ADDRESS1));
    console.log("-----------publicSale ezio balance=",await ezio.balanceOf(publicSale.address));
    console.log("-----------publicSale xezio balance=",await xezio.balanceOf(publicSale.address));
  });
});
