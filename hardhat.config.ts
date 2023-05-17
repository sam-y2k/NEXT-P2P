import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-gas-reporter";

dotenv.config();
console.log(process.env.ETHERSCAN_API_KEY)
const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    goerli: {
      url: process.env.GOERLI_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    sepolia: {
      url: process.env.SEPOLIA_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    mumbai: {
      url: process.env.MUMBAI_URL || "https://polygon-mumbai.g.alchemy.com/v2/ScUZx3PcVUjg2zp5MIR2ZUJWJD72Vxui",
      accounts: 
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : ["65ed0b36736497dd2800e990ca0116276dc6131e2a61ae401c939bef91eaa927"],
    },
    hardhat: {
      accounts: {
        count: 40,
        accountsBalance: "3000000000000000000000000", // 10ETH (Default)
      },
    },
  },
  gasReporter: {
    enabled: !!process.env.REPORT_GAS,
  },
  etherscan: {
    apiKey: "Z57UXIRCP6F6W5JDMV7FKM5B2MB3RS9UEH",
  },
};

export default config;
