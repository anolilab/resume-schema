import {
    describe, expect, it,
} from "vitest";

import validate from "../utils/validate";
import fixtures from "./fixtures/schema.json";

describe("languages", () => {
    it("schema - valid", () => {
        expect(validate(fixtures.valid)).toBeTruthy();
    });

    it("schema - invalid", () => {
        expect(validate(fixtures.invalid)).toBeFalsy();
    });
});
