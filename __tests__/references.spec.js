import {
    describe, expect, it,
} from "vitest";

import validate from "../utils/validate";
import fixtures from "./fixtures/references.json";

describe("references", () => {
    it("references - invalid", () => {
        expect(validate(fixtures.referencesEmptyInvalid)).toBeFalsy();
    });

    it("references - invalid", () => {
        expect(validate(fixtures.referencesInvalid)).toBeFalsy();
    });

    it("references[].name - valid", () => {
        expect(validate(fixtures.nameValid)).toBeTruthy();
    });

    it("references[].name - invalid", () => {
        expect(validate(fixtures.nameInvalid)).toBeFalsy();
    });

    it("references[].reference - valid", () => {
        expect(validate(fixtures.referenceValid)).toBeTruthy();
    });

    it("references[].reference - invalid", () => {
        expect(validate(fixtures.referenceInvalid)).toBeFalsy();
    });
});
