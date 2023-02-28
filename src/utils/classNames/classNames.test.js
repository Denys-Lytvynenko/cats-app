import { describe, expect, it } from "vitest";

import { cn } from "./index.ts";

describe("classNames()", () => {
    it("should return an empty string if nothing is provided", () => {
        const className = cn();

        expect(className).toBe("");
    });

    it("should return an empty string if an empty string is provided", () => {
        const input = "";

        const className = cn(input);

        expect(className).toBe(input);
    });

    it("should return an empty string if an spaces string provided", () => {
        const input = "  ";

        const className = cn(input);

        expect(className).toBe("");
    });

    it("should return an empty string if undefined value is provided", () => {
        const input = undefined;

        const className = cn(input);

        expect(className).toBe("");
    });

    it("should return class name if not empty string is provided", () => {
        const input = "className";

        const className = cn(input);

        expect(className).toBe(input);
    });

    it("should return class name if many not empty string is provided", () => {
        const input1 = "className1";
        const input2 = "className2";
        const input3 = "className3";

        const className = cn(input1, input2, input3);

        expect(className).toBe(input1 + " " + input2 + " " + input3);
    });

    it("should return class name if string with many spaces is provided", () => {
        const input1 = "className1";
        const input2 = "className2     className3 className4";

        const className = cn(input1, input2);

        const result =
            input1 +
            " " +
            input2
                .split(" ")
                .reduce((prev, curr) => prev + (curr ? ` ${curr}` : ""), "")
                .trim();

        expect(className).toBe(result);
    });
});
