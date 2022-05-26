import {
    describe, expect, it,
} from "vitest";

import validate from "../utils/validate";
import fixtures from "./fixtures/volunteer.json";

describe("skills", () => {
    it("volunteer - invalid", () => {
        expect(validate(fixtures.volunteerEmptyInvalid)).toBeFalsy();
    });

    it("volunteer - invalid", () => {
        expect(validate(fixtures.volunteerInvalid)).toBeFalsy();
    });

    it("volunteer[].organization - valid", () => {
        expect(validate(fixtures.organizationValid)).toBeTruthy();
    });

    it("volunteer[].organization - invalid", () => {
        expect(validate(fixtures.organizationInvalid)).toBeFalsy();
    });

    it("volunteer[].position - valid", () => {
        expect(validate(fixtures.positionValid)).toBeTruthy();
    });

    it("volunteer[].position - invalid", () => {
        expect(validate(fixtures.positionInvalid)).toBeFalsy();
    });

    it("volunteer[].url - valid", () => {
        expect(validate(fixtures.urlValid)).toBeTruthy();
    });

    it("volunteer[].url - invalid", () => {
        expect(validate(fixtures.urlInvalid)).toBeFalsy();
    });

    it("volunteer[].startDate - valid [YYYY-MM-DD]", () => {
        expect(validate(fixtures.startDateValid)).toBeTruthy();
    });

    it("volunteer[].startDate - invalid", () => {
        expect(validate(fixtures.startDateInvalid)).toBeFalsy();
    });

    it("volunteer[].endDate - valid", () => {
        expect(validate(fixtures.endDateValid)).toBeTruthy();
    });

    it("volunteer[].endDate - invalid", () => {
        expect(validate(fixtures.endDateInvalid)).toBeFalsy();
    });
});
