import { version as plexswapDefaultVersion } from "../lists/plexswap-default.json";
import { version as plexswapExtendedVersion } from "../lists/plexswap-extended.json";
import { version as plexswapOnrampVersion } from "../lists/plexswap-onramp.json";
import { version as plexswapMMbscVersion } from "../lists/plexswap-mmbsc.json";
import { version as coingeckoVersion } from "../lists/coingecko.json";
import { version as cmcVersion } from "../lists/cmc.json";
import plexswapDefault from "./tokens/plexswap-default.json";
import plexswapExtended from "./tokens/plexswap-extended.json";
import plexswapOnramp from "./tokens/plexswap-onramp.json";
import plexswapMMbsc from "./tokens/plexswap-mmbsc.json";
import coingecko from "./tokens/coingecko.json";
import cmc from "./tokens/cmc.json";
import defaultList from "../lists/plexswap-default.json";
import extendedList from "../lists/plexswap-extended.json";
import onrampList from "../lists/plexswap-onramp.json";
import mmbscList from "../lists/plexswap-mmbsc.json";
import coingeckoList from "../lists/coingecko.json";
import cmcList from "../lists/cmc.json";

export const LISTS = {
  "plexswap-default": {
    list: plexswapDefault,
    name: "Plexswap Default",
    keywords: ["plexswap", "default"],
    logoURI: "https://assets.plexfinance.us/images/tokens/common/plex.png",
    sort: false,
    currentVersion: plexswapDefaultVersion,
    listFile: defaultList
  },
  "plexswap-extended": {
    list: plexswapExtended,
    name: "Plexswap Extended",
    keywords: ["plexswap", "extended"],
    logoURI: "https://assets.plexfinance.us/images/tokens/common/plex.png",
    sort: true,
    currentVersion: plexswapExtendedVersion,
    listFile: extendedList
  },
  "plexswap-onramp": {
    list: plexswapOnramp,
    name: "Plexswap Onramp",
    keywords: ["plexswap", "onramp"],
    logoURI: "https://assets.plexfinance.us/images/tokens/common/plex.png",
    sort: true,
    currentVersion: plexswapOnrampVersion,
    listFile: onrampList
  },
  "plexswap-mmbsc": {
    list: plexswapMMbsc,
    name: "Plexswap BNB Chain MM",
    keywords: ["plexswap", "mmbsc"],
    logoURI: "https://assets.plexfinance.us/images/tokens/common/plex.png",
    sort: false,
    currentVersion: plexswapMMbscVersion,
    listFile: mmbscList
  },
  coingecko: {
    list: coingecko,
    name: "CoinGecko",
    keywords: ["defi"],
    logoURI:
      "https://www.coingecko.com/assets/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png",
    sort: true,
    currentVersion: coingeckoVersion,
    listFile: coingeckoList
  },
  cmc: {
    list: cmc,
    name: "CoinMarketCap",
    keywords: ["defi"],
    logoURI: "https://ipfs.io/ipfs/QmQAGtNJ2rSGpnP6dh6PPKNSmZL8RTZXmgFwgTdy5Nz5mx",
    sort: true,
    currentVersion: cmcVersion,
    listFile: cmcList
  },
} as const;
