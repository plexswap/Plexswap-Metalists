import { LISTS } from "./constants";

const lists = [
  {
    name: "plexswap-default",
    src: LISTS["plexswap-default"].list,
    actual: LISTS["plexswap-default"].listFile,
  },
  {
    name: "plexswap-extended",
    src: LISTS["plexswap-extended"].list,
    actual: LISTS["plexswap-extended"].listFile,
  },
  {
    name: "plexswap-onramp",
    src: LISTS["plexswap-onramp"].list,
    actual: LISTS["plexswap-onramp"].listFile,
  },
  {
    name: "plexswap-mmbsc",
    src: LISTS["plexswap-mmbsc"].list,
    actual: LISTS["plexswap-mmbsc"].listFile,
  },
  {
    name: "coingecko",
    src: LISTS["coingecko"].list,
    actual: LISTS["coingecko"].listFile,
  },
  {
    name: "cmc",
    src: LISTS["cmc"].list,
    actual: LISTS["cmc"].listFile,
  },
];

const compareLists = (listPair) => {
  const { name, src, actual } = listPair;
  if (src.length !== actual.tokens.length) {
    throw Error(
      `List ${name} seems to be not properly regenerated. Soure file has ${src.length} tokens but actual list has ${actual.tokens.length}. Did you forget to run yarn makelist?`
    );
  }
  src.sort((t1, t2) => (t1.address < t2.address ? -1 : 1));
  actual.tokens.sort((t1, t2) => (t1.address < t2.address ? -1 : 1));
  src.forEach((srcToken, index) => {
    if (JSON.stringify(srcToken) !== JSON.stringify(actual.tokens[index])) {
      throw Error(
        `List ${name} seems to be not properly regenerated. Tokens from src/tokens directory don't match up with the final list. Did you forget to run yarn makelist?`
      );
    }
  });
};

/**
 * Check in CI that author properly updated token list
 * i.e. not just changed token list in src/tokens but also regenerated lists with yarn makelist command.
 * Github Action runs only on change in src/tokens directory.
 */
const ciCheck = (): void => {
  lists.forEach((listPair) => {
    compareLists(listPair);
  });
};

export default ciCheck;
