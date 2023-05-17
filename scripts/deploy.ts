import * as dotenv from "dotenv";
import hardhat, { ethers } from "hardhat";
import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

dotenv.config();

async function main() {
  const [deployer]: SignerWithAddress[] = await ethers.getSigners();
  console.log("deploying using", deployer.address);

  const CourtFactory = await ethers.getContractFactory("CourtFactory");
  const courtFactory = await CourtFactory.deploy();
  await courtFactory.deployed();
  console.log("courtFactory deployed to", courtFactory.address);

  const Market = await ethers.getContractFactory("Market");
  const market = await Market.deploy("wETH/INR", "Eth to Inr p2p trade", "0x6BB480Ca9C504041B6aCEBCBC47837a17D503353", ["0xa7c85F0dbca0094DCa8B106137144b5362dc8c96"], courtFactory.address);
  await market.deployed();
  console.log("market deployed to", market.address);


  //  await hardhat.run("verify:verify", {
  //    address: market.address,
  //    constructorArguments: [
  //      "wETH/INR", "Eth to Inr p2p trade", "0x6BB480Ca9C504041B6aCEBCBC47837a17D503353", ["0xDB075f7f2DDd046F175cf8CF34df6afA76dCbE1f","0x2b7BBE757e72Bf8bB20B91F7163ea1920111b39a","0xae8D21fA2c3747ae4A78d13890975f5754328A8b","0xDaAd49c6aBb72Bf2278468f4Cb3F7c1A1D9c0Eb9","0xDB075f7f2DDd046F175cf8CF34df6afA76dCbE1f"], courtFactory.address 
  //    ],
  //  });

  //  await hardhat.run("verify:verify", {
  //    address: courtFactory.address,
  //    constructorArguments: [],
  //  });

  // await hardhat.run("verify:verify", {
  //   address: "0xb2A1fF4a809f15BaD9f2ba7BAe17e599351646d2",
  //   constructorArguments: ["0xf1aD98Ee4A050aF17834d3c4b4Da3a07C53De4DB", "0x5E0689720093Db5D739Ec1CC266f321026AcD5D5", ["0xD3db9D11c09cECd2E91bdE73F710dE6094179FA0"]],
  // });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
