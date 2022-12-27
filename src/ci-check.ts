import srcDefault from "./tokens/plexswap-default.json";
import srcExtended from "./tokens/plexswap-extended.json";
import srcCoingecko from "./tokens/coingecko.json";
import srcCmc from "./tokens/cmc.json";
import defaultList from "../lists/plexswap-default.json";
import extendedtList from "../lists/plexswap-extended.json";
import coingeckoList from "../lists/coingecko.json";
import cmcList from "../lists/cmc.json";

const lists = [
  {
    name: "plexswap-default",
    src: srcDefault,
    actual: defaultList,
  },
  {
    name: "plexswap-extended",
    src: srcExtended,
    actual: extendedtList,
  },
  {
    name: "coingeckoList",
    src: srcCoingecko,
    actual: coingeckoList,
  },
  {
    name: "cmcList",
    src: srcCmc,
    actual: cmcList,
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
