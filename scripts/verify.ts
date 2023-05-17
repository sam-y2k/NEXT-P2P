import hardhat, { ethers } from "hardhat";
async function main() {

	const market = "0xBA51F5507952392a9dCF02682Eda75e76C576D7f";
	const courtFactory = "0xc835CbF7C03907B23d0971d319903aF15bBb261d";
	const court = "0x8B62A2EC7D75416A465ca8fBcAe346FB26281E7b";

	// await hardhat.run("verify:verify", { 
	// 	address : market,
	// 	constructorArguments : ["wETH/INR", "Eth to Inr p2p trade", "0x6BB480Ca9C504041B6aCEBCBC47837a17D503353", ["0xDB075f7f2DDd046F175cf8CF34df6afA76dCbE1f","0x2b7BBE757e72Bf8bB20B91F7163ea1920111b39a","0xae8D21fA2c3747ae4A78d13890975f5754328A8b","0xDaAd49c6aBb72Bf2278468f4Cb3F7c1A1D9c0Eb9","0xDB075f7f2DDd046F175cf8CF34df6afA76dCbE1f"], courtFactory]
	// })
	
	
	// await hardhat.run("verify:verify", {
	// 	address : courtFactory,
	// 	constructorArguments : []
	// })
	
	
	await hardhat.run("verify:verify", {
		address : court,
		constructorArguments : [market,"0xDB075f7f2DDd046F175cf8CF34df6afA76dCbE1f",["0xDB075f7f2DDd046F175cf8CF34df6afA76dCbE1f","0x2b7BBE757e72Bf8bB20B91F7163ea1920111b39a","0xae8D21fA2c3747ae4A78d13890975f5754328A8b","0xDaAd49c6aBb72Bf2278468f4Cb3F7c1A1D9c0Eb9","0xDB075f7f2DDd046F175cf8CF34df6afA76dCbE1f"]]
	})
	
} 

main();