import fs from "fs";
import path from "path";
import { getAddress } from "@ethersproject/address";
import plexswapDefault from "./tokens/plexswap-default.json";
import plexswapExtended from "./tokens/plexswap-extended.json";
import coingecko from "./tokens/coingecko.json";
import cmc from "./tokens/cmc.json";

const lists = {
  "plexswap-default": plexswapDefault,
  "plexswap-extended": plexswapExtended,
  coingecko,
  cmc,
};

const checksumAddresses = (listName: string): void => {
  let badChecksumCount = 0;
  const listToChecksum = lists[listName];
  const updatedList = listToChecksum.reduce((tokenList, token) => {
    const checksummedAddress = getAddress(token.address);
    if (checksummedAddress !== token.address) {
      badChecksumCount += 1;
      const updatedToken = { ...token, address: checksummedAddress };
      return [...tokenList, updatedToken];
    }
    return [...tokenList, token];
  }, []);

  if (badChecksumCount > 0) {
    console.info(`Found and fixed ${badChecksumCount} non-checksummed addreses`);
    const tokenListPath = `${path.resolve()}/src/tokens/${listName}.json`;
    console.info("Saving updated list to ", tokenListPath);
    const stringifiedList = JSON.stringify(updatedList, null, 2);
    fs.writeFileSync(tokenListPath, stringifiedList);
    console.info("Checksumming done!");
  } else {
    console.info("All addresses are already checksummed");
  }
};

export default checksumAddresses;
