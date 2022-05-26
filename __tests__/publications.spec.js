import {
    describe, expect, it,
} from "vitest";

import validate from "../utils/validate";
import fixtures from "./fixtures/publications.json";

describe("publications", () => {
    it("publications - invalid", () => {
        expect(validate(fixtures.publicationsEmptyInvalid)).toBeFalsy();
    });

    it("publications - invalid", () => {
        expect(validate(fixtures.publicationsInvalid)).toBeFalsy();
    });

    it("publications[].name - valid", () => {
        expect(validate(fixtures.nameValid)).toBeTruthy();
    });

    it("publications[].name - invalid", () => {
        expect(validate(fixtures.nameInvalid)).toBeFalsy();
    });

    it("publications[].publisher - valid", () => {
        expect(validate(fixtures.publisherValid)).toBeTruthy();
    });

    it("publications[].publisher - invalid", () => {
        expect(validate(fixtures.publisherInvalid)).toBeFalsy();
    });

    it("publications[].releaseDate - valid [YYYY-MM-DD]", () => {
        expect(validate(fixtures.releaseDateValid)).toBeTruthy();
    });

    it("publications[].releaseDate - invalid", () => {
        expect(validate(fixtures.releaseDateInvalid)).toBeFalsy();
    });

    it("publications[].url - valid", () => {
        expect(validate(fixtures.urlValid)).toBeTruthy();
    });

    it("publications[].url - invalid", () => {
        expect(validate(fixtures.urlInvalid)).toBeFalsy();
    });

    it("publications[].summary - valid", () => {
        expect(validate(fixtures.summaryValid)).toBeTruthy();
    });

    it("publications[].summary - invalid", () => {
        expect(validate(fixtures.summaryInvalid)).toBeFalsy();
    });

    it("publications[].doi - valid", () => {
        expect(validate(fixtures.doiValid)).toBeTruthy();
    });

    it("publications[].doi - invalid", () => {
        expect(validate(fixtures.doiInvalid)).toBeFalsy();
    });
});
