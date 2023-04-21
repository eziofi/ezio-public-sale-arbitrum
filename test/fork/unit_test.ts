import { ethers, network, upgrades } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import {
  ERC20_ABI,
  ARBITRUM_TOKENS, sleep,
} from "../../utils/constants";
import {EzioPublicSale, EzioPublicSale__factory, EZIOV1, EZIOV1__factory, XEZIOV1, XEZIOV1__factory} from "../../types";
import {BigNumber, Contract} from "ethers";
const { expect } = require('chai');
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
  it("pause test",async ()=>{
    await sleep(5000);
    await publicSale.pause();
    await usdc.connect(usdcTaker).approve(publicSale.address,BigNumber.from("2000000000000"));
    await expect(publicSale.connect(usdcTaker).buy(BigNumber.from("200000000000"))).to.be.revertedWith("Pausable: paused");
  });
  it("mint EZIO by non owner", async function () {
    await expect(ezio.connect(usdcTaker).mint(USDC_TAKER_ADDRESS,1)).to.be.revertedWith("Ownable: caller is not the owner");
  });
  it("buy after closingTime", async function () {
    await sleep(20000);
    await usdc.connect(usdcTaker).approve(publicSale.address,BigNumber.from("2000000000000"));
    await expect(publicSale.connect(usdcTaker).buy(BigNumber.from("200000000000"))).to.be.revertedWith("EzioPublicSale: not open");
  });
  it("afterPublicSaleExecute before closingTime", async function () {
    await sleep(5000);
    await expect(publicSale.afterPublicSaleExecute()).to.be.revertedWith("EzioPublicSale: not close");
  });
  it("afterPublicSaleExecute twice", async function () {
    await sleep(5000);
    await usdc.connect(usdcTaker).approve(publicSale.address,BigNumber.from("2000000000000"));
    await publicSale.connect(usdcTaker).buy(BigNumber.from("200000000000"));
    await sleep(20000);
    await publicSale.afterPublicSaleExecute();
    await expect(publicSale.afterPublicSaleExecute()).to.be.revertedWith("EzioPublicSale: Executed already");
  });
  it("withdraw before closingTime", async function () {
    await sleep(5000);
    await usdc.connect(usdcTaker).approve(publicSale.address,BigNumber.from("2000000000000"));
    await publicSale.connect(usdcTaker).buy(BigNumber.from("200000000000"));
    await expect(publicSale.connect(usdcTaker).withdraw()).to.be.revertedWith("EzioPublicSale: not close");
  });
  it("withdraw twice", async function () {
    await sleep(5000);
    await usdc.connect(usdcTaker).approve(publicSale.address,BigNumber.from("2000000000000"));
    await publicSale.connect(usdcTaker).buy(BigNumber.from("200000000000"));
    await sleep(20000);
    await publicSale.connect(usdcTaker).withdraw();
    await expect(publicSale.connect(usdcTaker).withdraw()).to.be.revertedWith("EzioPublicSale: has withdrawn");
  });
  it("Raised amount less than 1,000,000 USDC", async function () {
    await sleep(5000);
    await usdc.connect(usdcTaker).approve(publicSale.address,BigNumber.from("2000000000000"));
    await publicSale.connect(usdcTaker).buy(BigNumber.from("200000000000"));
    await usdc.connect(usdcTaker1).approve(publicSale.address,BigNumber.from("1000000000000"));
    await publicSale.connect(usdcTaker1).buy(BigNumber.from("100000000000"));
    await sleep(20000);
    await publicSale.afterPublicSaleExecute();
    await publicSale.connect(usdcTaker).withdraw();
    await publicSale.connect(usdcTaker1).withdraw();
    expect((await ezio.totalSupply()).add(await xezio.totalSupply())).to.equal(ethers.utils.parseEther("30000000"));
    expect((await ezio.balanceOf(USDC_TAKER_ADDRESS)).add(await xezio.balanceOf(USDC_TAKER_ADDRESS))).to.equal(ethers.utils.parseEther("20000000"));
    expect((await ezio.balanceOf(USDC_TAKER_ADDRESS1)).add(await xezio.balanceOf(USDC_TAKER_ADDRESS1))).to.equal(ethers.utils.parseEther("10000000"));
  });
  it("Raised amount more than 1,000,000 USDC and less than 2,000,000 USDC", async function () {
    await sleep(5000);
    await usdc.connect(usdcTaker).approve(publicSale.address,BigNumber.from("2000000000000"));
    await publicSale.connect(usdcTaker).buy(BigNumber.from("1000000000000"));
    await usdc.connect(usdcTaker1).approve(publicSale.address,BigNumber.from("1000000000000"));
    await publicSale.connect(usdcTaker1).buy(BigNumber.from("500000000000"));
    await sleep(20000);
    await publicSale.connect(usdcTaker).withdraw();
    await publicSale.afterPublicSaleExecute();
    await publicSale.connect(usdcTaker1).withdraw();
    expect((await ezio.totalSupply()).add(await xezio.totalSupply())).to.equal(ethers.utils.parseEther("100000000"));
    expect((await ezio.balanceOf(USDC_TAKER_ADDRESS)).add(await xezio.balanceOf(USDC_TAKER_ADDRESS))).to.equal(BigNumber.from("66666666666666666666666666"));
    expect((await ezio.balanceOf(USDC_TAKER_ADDRESS1)).add(await xezio.balanceOf(USDC_TAKER_ADDRESS1))).to.equal(BigNumber.from("33333333333333333333333332"));
  });
  it("Raised amount more than 2,000,000 USDC", async function () {
    await sleep(5000);
    await usdc.connect(usdcTaker).approve(publicSale.address,BigNumber.from("2000000000000"));
    await publicSale.connect(usdcTaker).buy(BigNumber.from("2000000000000"));
    await usdc.connect(usdcTaker1).approve(publicSale.address,BigNumber.from("1000000000000"));
    await publicSale.connect(usdcTaker1).buy(BigNumber.from("500000000000"));
    await sleep(20000);
    await publicSale.connect(usdcTaker).withdraw();
    await publicSale.connect(usdcTaker1).withdraw();
    await publicSale.afterPublicSaleExecute();
    expect((await ezio.totalSupply()).add(await xezio.totalSupply())).to.equal(ethers.utils.parseEther("100000000"));
    expect(await usdc.balanceOf(signer.address)).to.equal(BigNumber.from("2000000000000"));
    expect((await ezio.balanceOf(USDC_TAKER_ADDRESS)).add(await xezio.balanceOf(USDC_TAKER_ADDRESS))).to.equal(BigNumber.from("80000000000000000000000000"));
    expect((await ezio.balanceOf(USDC_TAKER_ADDRESS1)).add(await xezio.balanceOf(USDC_TAKER_ADDRESS1))).to.equal(BigNumber.from("20000000000000000000000000"));
  });
});
