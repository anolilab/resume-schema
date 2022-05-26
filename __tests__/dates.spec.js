import Ajv from "ajv";
import {
    describe, expect, it,
} from "vitest";

import fixtures from "./fixtures/dates.json";

const mockDateSchema = {
    type: "string",
    description: "Mock Date Format",
    pattern: "^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]|[1-2][0-9]{3}-[0-1][0-9]|[1-2][0-9]{3})$",
};

const validate = new Ajv().compile(mockDateSchema);

describe("dates", () => {
    it("dates - YYYY-MM-DD", () => {
        expect(validate(fixtures.yearMonthDay)).toBeTruthy();
    });

    it("dates - YYYY-MM", () => {
        expect(validate(fixtures.yearMonth)).toBeTruthy();
    });

    it("dates - YYYY", () => {
        expect(validate(fixtures.yearMonthDay)).toBeTruthy();
    });

    it("dates - invalid", () => {
        expect(validate(fixtures.invalid)).toBeFalsy();
    });
});
