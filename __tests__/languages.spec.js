import {
    describe, expect, it,
} from "vitest";

import validate from "../utils/validate";
import fixtures from "./fixtures/languages.json";

describe("languages", () => {
    it("languages - invalid", () => {
        expect(validate(fixtures.languagesEmptyInvalid)).toBeFalsy();
    });

    it("languages - invalid", () => {
        expect(validate(fixtures.languagesInvalid)).toBeFalsy();
    });

    it("languages[].language - valid", () => {
        expect(validate(fixtures.languageValid)).toBeTruthy();
    });

    it("languages[].language - invalid", () => {
        expect(validate(fixtures.languageInvalid)).toBeFalsy();
    });

    it("languages[].fluency - valid", () => {
        expect(validate(fixtures.fluencyValid)).toBeTruthy();
    });

    it("languages[].fluency - invalid", () => {
        expect(validate(fixtures.fluencyInvalid)).toBeFalsy();
    });
});
