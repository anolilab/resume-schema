import {
    describe, expect, it,
} from "vitest";

import validate from "../utils/validate";
import fixtures from "./fixtures/certificates.json";

describe("", () => {
    it("certificates - invalid", () => {
        expect(validate(fixtures.certificatesEmptyInvalid)).toBeFalsy();
    });

    it("certificates - invalid", () => {
        expect(validate(fixtures.certificatesInvalid)).toBeFalsy();
    });

    it("certificates[].name - valid", () => {
        expect(validate(fixtures.nameValid)).toBeTruthy();
    });

    it("certificates[].date - valid [YYYY-MM-DD]", () => {
        expect(validate(fixtures.dateValid)).toBeTruthy();
    });

    it("certificates[].date - invalid", () => {
        expect(validate(fixtures.dateInvalid)).toBeFalsy();
    });

    it("certificates[].url - valid", () => {
        expect(validate(fixtures.urlValid)).toBeTruthy();
    });

    it("certificates[].url - invalid", () => {
        expect(validate(fixtures.urlInvalid)).toBeFalsy();
    });

    it("certificates[].issuer - valid", () => {
        expect(validate(fixtures.issuerValid)).toBeTruthy();
    });

    it("certificates[].issuer - invalid", () => {
        expect(validate(fixtures.issuerInvalid)).toBeFalsy();
    });
});
