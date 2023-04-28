import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import {BigNumber, Contract} from "ethers";
import { ARBITRUM_TOKENS, ERC20_ABI } from "../../utils/constants";
import {EzioPublicSale, EzioPublicSale__factory, EZIOV1, EZIOV1__factory, XEZIOV1, XEZIOV1__factory} from "../../types";

const USDC_ADDRESS = ARBITRUM_TOKENS.USDC;
const EZIO_JSON = require("../../deployments/arbitrum/EZIOV1.json");
const XEZIO_JSON = require("../../deployments/arbitrum/xEZIOV1.json");
const PUBLIC_SALE_JSON = require("../../deployments/arbitrum/EzioPublicSale.json");

describe("contract connect test in arbitrum network", function () {
  let signer: SignerWithAddress;
  let usdc: Contract;
  let ezio: EZIOV1;
  let xezio: XEZIOV1;
  let publicSale: EzioPublicSale;
  beforeEach("initialize contract",async ()=>{
    [signer] = await ethers.getSigners();
    usdc = new ethers.Contract(USDC_ADDRESS, ERC20_ABI, signer);
    ezio = EZIOV1__factory.connect(EZIO_JSON.address,signer);
    xezio = XEZIOV1__factory.connect(XEZIO_JSON.address,signer);
    publicSale = EzioPublicSale__factory.connect(PUBLIC_SALE_JSON.address,signer);
  });
  it("get parameter", async function () {
    console.log("----------contract openingTime=",await publicSale.connect(signer).openingTime());
    console.log("----------contract closingTime=",await publicSale.connect(signer).closingTime());
    console.log("----------contract totalRaisedAmount=",await publicSale.connect(signer).totalRaisedAmount());
  });
  it("buy", async function () {
    await usdc.connect(signer).approve(publicSale.address,BigNumber.from("10000"));
    await publicSale.connect(signer).buy(BigNumber.from("10000"));
    console.log("----------signer contribution=",await publicSale.connect(signer).balanceOf(signer.address));
    console.log("----------contract usdc balance=",await usdc.connect(signer).balanceOf(publicSale.address));
  });
  it("withdraw", async function () {
      console.log("----------signer contribution=",await publicSale.connect(signer).balanceOf(signer.address));
      console.log("----------usdc balance=",await usdc.connect(signer).balanceOf(publicSale.address));
      console.log("----------signer ezio balance=",await ezio.connect(signer).balanceOf(signer.address));
      console.log("----------signer xezio balance=",await xezio.connect(signer).balanceOf(signer.address));
      await publicSale.connect(signer).withdraw();
      console.log("----------signer ezio balance=",await ezio.connect(signer).balanceOf(signer.address));
      console.log("----------signer xezio balance=",await xezio.connect(signer).balanceOf(signer.address));
      console.log("----------contract ezio balance=",await ezio.connect(signer).balanceOf(publicSale.address));
      console.log("----------contract xezio balance=",await xezio.connect(signer).balanceOf(publicSale.address));
  });
  it("after public sale execute", async function () {
    console.log("----------contract ezio balance before=",await ezio.connect(signer).balanceOf(publicSale.address));
    console.log("----------contract xezio balance before=",await xezio.connect(signer).balanceOf(publicSale.address));
    console.log("----------wallet usdc balance before=",await usdc.connect(signer).balanceOf(await publicSale.wallet()));
    await publicSale.connect(signer).afterPublicSaleExecute();
    console.log("----------contract ezio balance after=",await ezio.connect(signer).balanceOf(publicSale.address));
    console.log("----------contract xezio balance after=",await xezio.connect(signer).balanceOf(publicSale.address));
    console.log("----------wallet usdc balance after=",await usdc.connect(signer).balanceOf(await publicSale.wallet()));
  });
});
