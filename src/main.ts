import firebot, { Plugin } from "@crowbartools/firebot-types";

import * as packageJson from "../package.json";
import { AllVariables } from "./firebot/variables";

const {
  version,
  displayName: name,
  description,
  author,
} = packageJson;

type Params = {

};

const plugin: Plugin<Params> = {
  manifest: {
    name: name,
    description: description,
    icon: {
      type: "font-awesome",
      name: "fa-volume",
      color: "#ad7fe2",
    },
    version: version,
    author: author
  },
  parametersSchema: [],
  registers: {
    variables: AllVariables
  },
  onLoad: (context) => {
    firebot.logger.info(`${name} loaded (${version})`);
  },
};

export default plugin;
