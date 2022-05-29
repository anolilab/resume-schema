# JSON Resume Schema

[![GitHub Releases](https://badgen.net/github/tag/anolilab/resume-schema)](https://github.com/anolilab/resume-schema/releases)
[![NPM Release](https://badgen.net/npm/v/@anolilab/resume-schema)](https://www.npmjs.com/package/@anolilab/resume-schema)

Standard, Specification, Schema

### Getting started

```
npm install --save @anolilab/resume-schema
```

### Usage

<!-- textlint-disable @textlint-rule/google/word-list -->

The main export of this package is an object that validates as a [JSON schema](https://json-schema.org/understanding-json-schema/). It should work with [any compliant implementation](https://json-schema.org/implementations.html#validator-javascript).

<!-- textlint-enable @textlint-rule/google/word-list -->

#### Validation

To determine if an object is a valid JSON resume, you can do something like this:

```js
import schema from "@anolilab/resume-schema";
import Ajv from "ajv"; // validator. See https://ajv.js.org/
import addFormats from "ajv-formats";

const ajv = new Ajv({
    allowUnionTypes: true,
});

addFormats(ajv);

const validate = ajv.compile(schema);

validate({ basics: { name: "Thomas" } }); // true
validate({ invalidProperty: "foo bar" }); // false
```

The JSON Resume schema is available from:

```js
require("@anolilab/resume-schema").schema;
```

### People

<!-- textlint-disable write-good -->

-   Julian Shapiro for early prototype revisions

<!-- textlint-enable write-good -->

### Contribute

We encourage anyone who’s interested in participating in evolving this standard to join the discussions [here on GitHub](https://github.com/jsonresume/resume-schema/issues). Also feel free to fork this project and submit new ideas to add to the JSON Resume Schema standard. To make sure all formatting is kept in check, install the [EditorConfig plugin](https://editorconfig.org/) for your editor of choice.

> **Note:** please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

### Versioning

<!-- textlint-disable @textlint-rule/google/word-list,@textlint-rule/google/slashes,write-good -->

JSON Resume Schema adheres to Semantic Versioning 2.0.0. If there is a violation of
this scheme, report it as a bug. Specifically, if a patch or minor version is
released and breaks backward compatibility, that version should be immediately
yanked and/or a new version should be immediately released that restores
compatibility. Any change that breaks the public API will only be introduced at
a major-version release. As a result of this policy, you can (and should)
specify any dependency on JSON Resume Schema by using the Pessimistic Version
Constraint with two digits of precision.

<!-- textlint-enable @textlint-rule/google/word-list,@textlint-rule/google/slashes,write-good -->

## Supported Node.js Versions

Libraries in this ecosystem make a best effort to track
[Node.js’ release schedule](https://nodejs.org/en/about/releases/). Here’s [a
post on why we think this is important](https://medium.com/the-node-js-collection/maintainers-should-consider-following-node-js-release-schedule-ab08ed4de71a).

### Research

<!-- textlint-disable no-dead-link -->

-   [A more professional recruitment process with structured data](/research/A%20more%20professional%20recruitment%20process%20with%20structured%20CV%20data.pdf).

<!-- textlint-enable no-dead-link -->

### Proposals to reinvestigate

-   [#69 - Standard format for phone numbers](https://github.com/jsonresume/resume-schema/issues/69)
-   [#44 - Person-Job Fit ](https://github.com/jsonresume/resume-schema/issues/44)
-   [#12 - geotag location in work ](https://github.com/jsonresume/resume-schema/issues/12)
-   [#51 - Support multiple positions within one job](https://github.com/jsonresume/resume-schema/issues/51)

### Other resume standards

-   [HR-XML](https://schemas.liquid-technologies.com/HR-XML/2007-04-15/)
-   [Europass](https://europa.eu/europass/en/about-europass)

## License

The anolilab resume-schema is open-sourced software licensed under the [MIT license](LICENSE.md)
