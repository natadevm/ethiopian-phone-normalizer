import { describe, it, expect } from "vitest";


import { normalize } from "../src/normalize.js";

import { describe, it, expect } from "vitest";
import { normalize } from "../src/index.js";

describe("normalize()", () => {
    it("normalizes local numbers", () => {
        expect(normalize("0912345678")).toBe("+251912345678");
    });

    it("normalizes numbers without leading zero", () => {
        expect(normalize("912345678")).toBe("+251912345678");
    });

    it("normalizes numbers with country code", () => {
        expect(normalize("251912345678")).toBe("+251912345678");
    });

    it("keeps international format", () => {
        expect(normalize("+251912345678")).toBe("+251912345678");
    });
});