import {
    describe, expect, it,
} from "vitest";

import validate from "../utils/validate";
import fixtures from "./fixtures/basics.json";

describe("basics", () => {
    it("basics - valid", () => {
        expect(validate(fixtures.basicsValid)).toBeTruthy();
    });

    it("basics - invalid", () => {
        expect(validate(fixtures.basicsInvalid)).toBeFalsy();
    });

    it("basics.name - valid", () => {
        expect(validate(fixtures.nameValid)).toBeTruthy();
    });

    it("basics.name - invalid", () => {
        expect(validate(fixtures.nameInvalid)).toBeFalsy();
    });

    it("basics.label - valid", () => {
        expect(validate(fixtures.labelValid)).toBeTruthy();
    });

    it("basics.label - invalid", () => {
        expect(validate(fixtures.labelInvalid)).toBeFalsy();
    });

    it("basics.image - valid", () => {
        expect(validate(fixtures.imageValid)).toBeTruthy();
    });

    it("basics.image - invalid", () => {
        expect(validate(fixtures.imageInvalid)).toBeFalsy();
    });

    it("basics.email - valid", () => {
        expect(validate(fixtures.emailValid)).toBeTruthy();
    });

    it("basics.email - invalid", () => {
        expect(validate(fixtures.emailInvalid)).toBeFalsy();
    });

    it("basics.phone - valid", () => {
        expect(validate(fixtures.phoneValid)).toBeTruthy();
    });

    it("basics.phone - invalid", () => {
        expect(validate(fixtures.phoneInvalid)).toBeFalsy();
    });

    it("basics.url - valid", () => {
        expect(validate(fixtures.urlValid)).toBeTruthy();
    });

    it("basics.url - invalid", () => {
        expect(validate(fixtures.urlInvalid)).toBeFalsy();
    });

    it("basics.summary - valid", () => {
        expect(validate(fixtures.summaryValid)).toBeTruthy();
    });

    it("basics.summary - invalid", () => {
        expect(validate(fixtures.summaryInvalid)).toBeFalsy();
    });

    it("basics.location - valid", () => {
        expect(validate(fixtures.locationValid)).toBeTruthy();
    });

    it("basics.location - invalid", () => {
        expect(validate(fixtures.locationInvalid)).toBeFalsy();
    });

    it("basics.location.address - valid", () => {
        expect(validate(fixtures.locationAddressValid)).toBeTruthy();
    });

    it("basics.location.address - invalid", () => {
        expect(validate(fixtures.locationAddressInvalid)).toBeFalsy();
    });

    it("basics.location.postal - valid", () => {
        expect(validate(fixtures.locationPostalValid)).toBeTruthy();
    });

    it("basics.location.postal - invalid", () => {
        expect(validate(fixtures.locationPostalInvalid)).toBeFalsy();
    });

    it("basics.location.city - valid", () => {
        expect(validate(fixtures.locationCityValid)).toBeTruthy();
    });

    it("basics.location.city - invalid", () => {
        expect(validate(fixtures.locationCityInvalid)).toBeFalsy();
    });

    it("basics.location.country - valid", () => {
        expect(validate(fixtures.locationCountryValid)).toBeTruthy();
    });

    it("basics.location.country - invalid", () => {
        expect(validate(fixtures.locationCountryInvalid)).toBeFalsy();
    });

    it("basics.location.region - valid", () => {
        expect(validate(fixtures.locationRegionValid)).toBeTruthy();
    });

    it("basics.location.region - invalid", () => {
        expect(validate(fixtures.locationRegionInvalid)).toBeFalsy();
    });

    it("basics.profiles - invalid", () => {
        expect(validate(fixtures.profilesEmptyInvalid)).toBeFalsy();
    });

    it("basics.profiles - invalid", () => {
        expect(validate(fixtures.profilesInvalid)).toBeFalsy();
    });

    it("basics.profiles[].network - valid", () => {
        expect(validate(fixtures.profilesNetworkValid)).toBeTruthy();
    });

    it("basics.profiles[].network - invalid", () => {
        expect(validate(fixtures.profilesNetworkInvalid)).toBeFalsy();
    });

    it("basics.profiles[].username - valid", () => {
        expect(validate(fixtures.profilesUsernameValid)).toBeTruthy();
    });

    it("basics.profiles[].username - invalid", () => {
        expect(validate(fixtures.profilesUsernameInvalid)).toBeFalsy();
    });

    it("basics.profiles[].url - valid", () => {
        expect(validate(fixtures.profilesUrlValid)).toBeTruthy();
    });

    it("basics.profiles[].url - invalid", () => {
        expect(validate(fixtures.profilesUrlInvalid)).toBeFalsy();
    });
});
