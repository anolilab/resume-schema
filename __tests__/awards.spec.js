import {
    describe, expect, it,
} from "vitest";

import validate from "../utils/validate";
import fixtures from "./fixtures/awards.json";

describe("awards", () => {
    it("awards - invalid", () => {
        expect(validate(fixtures.awardsEmptyInvalid)).toBeFalsy();
    });

    it("awards - invalid", () => {
        expect(validate(fixtures.awardsInvalid)).toBeFalsy();
    });

    it("awards[].title - valid", () => {
        expect(validate(fixtures.titleValid)).toBeTruthy();
    });

    it("awards[].title - invalid", () => {
        expect(validate(fixtures.titleInvalid)).toBeFalsy();
    });

    it("awards[].date - valid [YYYY-MM-DD]", () => {
        expect(validate(fixtures.dateValid)).toBeTruthy();
    });

    it("awards[].date - invalid", () => {
        expect(validate(fixtures.dateInvalid)).toBeFalsy();
    });

    it("awards[].awarder - valid", () => {
        expect(validate(fixtures.awarderValid)).toBeTruthy();
    });

    it("awards[].awarder - invalid", () => {
        expect(validate(fixtures.awarderInvalid)).toBeFalsy();
    });

    it("awards[].summary - valid", () => {
        expect(validate(fixtures.summaryValid)).toBeTruthy();
    });

    it("awards[].summary - invalid", () => {
        expect(validate(fixtures.summaryInvalid)).toBeFalsy();
    });
});
