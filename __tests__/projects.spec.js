import {
    describe, expect, it,
} from "vitest";

import validate from "../utils/validate";
import fixtures from "./fixtures/projects.json";

describe("projects", () => {
    it("projects - invalid", () => {
        expect(validate(fixtures.projectsEmptyInvalid)).toBeFalsy();
    });

    it("projects - invalid", () => {
        expect(validate(fixtures.projectsInvalid)).toBeFalsy();
    });

    it("projects[].name - valid", () => {
        expect(validate(fixtures.nameValid)).toBeTruthy();
    });

    it("projects[].name - invalid", () => {
        expect(validate(fixtures.nameInvalid)).toBeFalsy();
    });

    it("projects[].description - valid", () => {
        expect(validate(fixtures.descriptionValid)).toBeTruthy();
    });

    it("projects[].description - invalid", () => {
        expect(validate(fixtures.descriptionInvalid)).toBeFalsy();
    });

    it("projects[].highlights - invalid", () => {
        expect(validate(fixtures.highlightsEmptyInvalid)).toBeFalsy();
    });

    it("projects[].highlights - invalid", () => {
        expect(validate(fixtures.highlightsInvalid)).toBeFalsy();
    });

    it("projects[].highlights[item] - valid", () => {
        expect(validate(fixtures.highlightsItemValid)).toBeTruthy();
    });

    it("projects[].highlights[item] - invalid", () => {
        expect(validate(fixtures.highlightsItemInvalid)).toBeFalsy();
    });

    it("projects[].keywords - invalid", () => {
        expect(validate(fixtures.keywordsEmptyInvalid)).toBeFalsy();
    });

    it("projects[].keywords - invalid", () => {
        expect(validate(fixtures.keywordsInvalid)).toBeFalsy();
    });

    it("projects[].keywords[item] - valid", () => {
        expect(validate(fixtures.keywordsItemValid)).toBeTruthy();
    });

    it("projects[].keywords[item] - invalid", () => {
        expect(validate(fixtures.keywordsItemInvalid)).toBeFalsy();
    });

    it("projects[].startDate - valid [YYYY-MM-DD]", () => {
        expect(validate(fixtures.startDateValid)).toBeTruthy();
    });

    it("projects[].startDate - invalid", () => {
        expect(validate(fixtures.startDateInvalid)).toBeFalsy();
    });

    it("projects[].endDate - valid [YYYY-MM-DD]", () => {
        expect(validate(fixtures.endDateValid)).toBeTruthy();
    });

    it("projects[].endDate - invalid", () => {
        expect(validate(fixtures.endDateInvalid)).toBeFalsy();
    });

    it("projects[].roles - invalid", () => {
        expect(validate(fixtures.rolesEmtypInvalid)).toBeFalsy();
    });

    it("projects[].roles - invalid", () => {
        expect(validate(fixtures.rolesInvalid)).toBeFalsy();
    });

    it("projects[].roles[item] - valid", () => {
        expect(validate(fixtures.rolesItemValid)).toBeTruthy();
    });

    it("projects[].roles[item] - invalid", () => {
        expect(validate(fixtures.rolesItemInvalid)).toBeFalsy();
    });

    it("projects[].entity - valid", () => {
        expect(validate(fixtures.entityValid)).toBeTruthy();
    });

    it("projects[].entity - invalid", () => {
        expect(validate(fixtures.entityInvalid)).toBeFalsy();
    });

    it("projects[].type - valid", () => {
        expect(validate(fixtures.typeValid)).toBeTruthy();
    });

    it("projects[].type - invalid", () => {
        expect(validate(fixtures.typeInvalid)).toBeFalsy();
    });
});
