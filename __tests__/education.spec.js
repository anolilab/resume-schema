import {
    describe, expect, it,
} from "vitest";

import validate from "../utils/validate";
import fixtures from "./fixtures/education.json";

describe("eductaion", () => {
    it("eductaion - invalid", () => {
        expect(validate(fixtures.educationEmptyInvalid)).toBeFalsy();
    });

    it("education - invalid", () => {
        expect(validate(fixtures.educationInvalid)).toBeFalsy();
    });

    it("education[].institution - valid", () => {
        expect(validate(fixtures.institutionValid)).toBeTruthy();
    });

    it("education[].institution - invalid", () => {
        expect(validate(fixtures.institutionInvalid)).toBeFalsy();
    });

    it("education[].area - valid", () => {
        expect(validate(fixtures.areaValid)).toBeTruthy();
    });

    it("education[].area - invalid", () => {
        expect(validate(fixtures.areaInvalid)).toBeFalsy();
    });

    it("education[].studyType - valid", () => {
        expect(validate(fixtures.studyTypeValid)).toBeTruthy();
    });

    it("education[].studyType - invalid", () => {
        expect(validate(fixtures.studyTypeInvalid)).toBeFalsy();
    });

    it("education[].startDate - valid [YYYY-MM-DD]", () => {
        expect(validate(fixtures.startDateValid)).toBeTruthy();
    });

    it("education[].startDate - invalid", () => {
        expect(validate(fixtures.startDateInvalid)).toBeFalsy();
    });

    it("education[].endDate - valid [YYYY-MM-DD]", () => {
        expect(validate(fixtures.endDateValid)).toBeTruthy();
    });

    it("education[].endDate - invalid", () => {
        expect(validate(fixtures.endDateInvalid)).toBeFalsy();
    });

    it("education[].grade - valid", () => {
        expect(validate(fixtures.gradeValid)).toBeTruthy();
    });

    it("education[].summary - valid", () => {
        expect(validate(fixtures.summaryValid)).toBeTruthy();
    });

    it("education[].summary - invalid", () => {
        expect(validate(fixtures.summaryInvalid)).toBeFalsy();
    });

    it("education[].courses - invalid", () => {
        expect(validate(fixtures.coursesEmptyInvalid)).toBeFalsy();
    });

    it("education[].courses - invalid", () => {
        expect(validate(fixtures.coursesInvalid)).toBeFalsy();
    });

    it("education[].courses[item] - valid", () => {
        expect(validate(fixtures.coursesItemValid)).toBeTruthy();
    });

    it("education[].courses[item] - invalid", () => {
        expect(validate(fixtures.coursesItemInvalid)).toBeFalsy();
    });
});
