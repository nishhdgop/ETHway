const main = async () => {
  const transactionsFactory = await hre.ethers.getContractAt(
    "Transactions",
    "0x1f7baa2d899688c2611a488f3d3fd6bc61205a1d"
  );
  const transactionsContract = await transactionsFactory.addToBlockchain(
    "0xE49ab5380e332AC3456bB33cf588Db2770536f27",
    "1",
    "hello",
    "world"
  );

  console.log({ transactionsContract });

  //   await transactionsContract.deployed();

  //   console.log("Transactions address: ", transactionsContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
