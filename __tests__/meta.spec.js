import {
    describe, expect, it,
} from "vitest";

import validate from "../utils/validate";
import fixtures from "./fixtures/meta.json";

describe("meta", () => {
    it("meta - valid", () => {
        expect(validate(fixtures.metaValid)).toBeTruthy();
    });

    it("meta - invalid", () => {
        expect(validate(fixtures.metaInvalid)).toBeFalsy();
    });

    it("meta.canonical - valid", () => {
        expect(validate(fixtures.canonicalValid)).toBeTruthy();
    });

    it("meta.canonical - invalid", () => {
        expect(validate(fixtures.canonicalInvalid)).toBeFalsy();
    });

    it("meta.version - valid", () => {
        expect(validate(fixtures.versionValid)).toBeTruthy();
    });

    it("meta.version - invalid", () => {
        expect(validate(fixtures.versionInvalid)).toBeFalsy();
    });

    it("meta.lastModified - valid", () => {
        expect(validate(fixtures.lastModifiedValid)).toBeTruthy();
    });

    it("meta.lastModified - invalid", () => {
        expect(validate(fixtures.lastModifiedInvalid)).toBeFalsy();
    });
});
