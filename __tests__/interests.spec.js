import {
    describe, expect, it,
} from "vitest";

import validate from "../utils/validate";
import fixtures from "./fixtures/interests.json";

describe("interests", () => {
    it("interests - invalid", () => {
        expect(validate(fixtures.interestsEmptyInvalid)).toBeFalsy();
    });

    it("interests - invalid", () => {
        expect(validate(fixtures.interestsInvalid)).toBeFalsy();
    });

    it("interests[].name - valid", () => {
        expect(validate(fixtures.nameValid)).toBeTruthy();
    });

    it("interests[].name - invalid", () => {
        expect(validate(fixtures.nameInvalid)).toBeFalsy();
    });

    it("interests[].keywords - invalid", () => {
        expect(validate(fixtures.keywordsEmptyInvalid)).toBeFalsy();
    });

    it("interests[].keywords - invalid", () => {
        expect(validate(fixtures.keywordsInvalid)).toBeFalsy();
    });

    it("interests[].keywords[item] - valid", () => {
        expect(validate(fixtures.keywordsItemValid)).toBeTruthy();
    });

    it("interests[].keywords[item] - invalid", () => {
        expect(validate(fixtures.keywordsItemInvalid)).toBeFalsy();
    });
});
