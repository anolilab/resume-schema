import {
    describe, expect, it,
} from "vitest";

import validate from "../utils/validate";
import fixtures from "./fixtures/skills.json";

describe("skills", () => {
    it("skills - invalid", () => {
        expect(validate(fixtures.skillsEmptyInvalid)).toBeFalsy();
    });

    it("skills - invalid", () => {
        expect(validate(fixtures.skillsInvalid)).toBeFalsy();
    });

    it("skills[].name - valid", () => {
        expect(validate(fixtures.nameValid)).toBeTruthy();
    });

    it("skills[].name - invalid", () => {
        expect(validate(fixtures.nameInvalid)).toBeFalsy();
    });

    it("skills[].level - valid", () => {
        expect(validate(fixtures.levelValid)).toBeTruthy();
    });

    it("skills[].level - invalid", () => {
        expect(validate(fixtures.levelInvalid)).toBeFalsy();
    });

    it("skills[].keywords - invalid", () => {
        expect(validate(fixtures.keywordsEmptyInvalid)).toBeFalsy();
    });

    it("skills[].keywords - invalid", () => {
        expect(validate(fixtures.keywordsInvalid)).toBeFalsy();
    });

    it("skills[].keywords[item] - valid", () => {
        expect(validate(fixtures.keywordsItemValid)).toBeTruthy();
    });

    it("skills[].keywords[item] - invalid", () => {
        expect(validate(fixtures.keywordsItemInvalid)).toBeFalsy();
    });
});
