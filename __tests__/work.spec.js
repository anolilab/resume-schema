import {
    describe, expect, it,
} from "vitest";

import validate from "../utils/validate";
import fixtures from "./fixtures/work.json";

describe("skills", () => {
    it("work - invalid", () => {
        expect(validate(fixtures.workEmptyInvalid)).toBeFalsy();
    });

    it("work - invalid", () => {
        expect(validate(fixtures.workInvalid)).toBeFalsy();
    });

    it("work[].name - valid", () => {
        expect(validate(fixtures.nameValid)).toBeTruthy();
    });

    it("work[].name - invalid", () => {
        expect(validate(fixtures.nameInvalid)).toBeFalsy();
    });

    it("work[].location - valid", () => {
        expect(validate(fixtures.locationValid)).toBeTruthy();
    });

    it("work[].location - invalid", () => {
        expect(validate(fixtures.locationInvalid)).toBeFalsy();
    });

    it("work[].description - valid", () => {
        expect(validate(fixtures.descriptionValid)).toBeTruthy();
    });

    it("work[].description - invalid", () => {
        expect(validate(fixtures.descriptionInvalid)).toBeFalsy();
    });

    it("work[].position - valid", () => {
        expect(validate(fixtures.positionValid)).toBeTruthy();
    });

    it("work[].position - invalid", () => {
        expect(validate(fixtures.positionInvalid)).toBeFalsy();
    });

    it("work[].url - valid", () => {
        expect(validate(fixtures.urlValid)).toBeTruthy();
    });

    it("work[].url - invalid", () => {
        expect(validate(fixtures.urlInvalid)).toBeFalsy();
    });

    it("work[].startDate - valid [YYYY-MM-DD]", () => {
        expect(validate(fixtures.startDateValid)).toBeTruthy();
    });

    it("work[].startDate - invalid", () => {
        expect(validate(fixtures.startDateInvalid)).toBeFalsy();
    });

    it("work[].endDate - valid [YYYY-MM-DD]", () => {
        expect(validate(fixtures.endDateValid)).toBeTruthy();
    });

    it("work[].endDate - invalid", () => {
        expect(validate(fixtures.endDateInvalid)).toBeFalsy();
    });

    it("work[].summary - valid", () => {
        expect(validate(fixtures.summaryValid)).toBeTruthy();
    });

    it("work[].summary - invalid", () => {
        expect(validate(fixtures.summaryInvalid)).toBeFalsy();
    });

    it("work[].highlights - invalid", () => {
        expect(validate(fixtures.highlightsEmptyInvalid)).toBeFalsy();
    });

    it("work[].highlights - invalid", () => {
        expect(validate(fixtures.highlightsInvalid)).toBeFalsy();
    });

    it("work[].highlights[item] - valid", () => {
        expect(validate(fixtures.highlightsItemValid)).toBeTruthy();
    });

    it("work[].highlights[item] - invalid", () => {
        expect(validate(fixtures.highlightsItemInvalid)).toBeFalsy();
    });

    it("work[].keywords - invalid", () => {
        expect(validate(fixtures.keywordsEmptyInvalid)).toBeFalsy();
    });

    it("work[].keywords - invalid", () => {
        expect(validate(fixtures.keywordsInvalid)).toBeFalsy();
    });

    it("work[].keywords[item] - valid", () => {
        expect(validate(fixtures.keywordsItemValid)).toBeTruthy();
    });

    it("work[].keywords[item] - invalid", () => {
        expect(validate(fixtures.keywordsItemInvalid)).toBeFalsy();
    });
});
