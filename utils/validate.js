import Ajv from "ajv";
import addFormats from "ajv-formats";

import schema from "../schema.json";

const ajv = new Ajv({
    allowUnionTypes: true,
});

addFormats(ajv);

export default ajv.compile(schema);
