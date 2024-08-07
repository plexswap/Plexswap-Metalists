import { buildList, saveList, VersionBump } from "./buildList";
import checksumAddresses from "./checksum";
import ciCheck from "./ci-check";
import fetchThirdPartyList from "./fetchThirdPartyList";

const command = process.argv[2];
const listName = process.argv[3];
const versionBump = process.argv[4];

switch (command) {
  case "checksum":
    checksumAddresses(listName);
    break;
  case "generate":
    saveList(buildList(listName, versionBump as VersionBump), listName);
    break;
  case "fetch":
    fetchThirdPartyList(listName);
    break;
  case "ci-check":
    ciCheck();
    break;
  default:
    console.info("Unknown command");
    break;
}
