import { describe, expect, it } from "vitest";
import { getAuthors } from "./author-utils";

describe("getAuthors", () => {
	// print the results
	console.log("getAuthors()", getAuthors());

	it("returns an array", () => {
		const authors = getAuthors();
		expect(Array.isArray(authors)).toBe(true);
	});

	it("returns folder names from src/content/posts", () => {
		const authors = getAuthors();
		expect(authors).toContain("lc");
		expect(authors).toContain("myw");
	});

	it("returns only strings", () => {
		const authors = getAuthors();
		expect(authors.every((a) => typeof a === "string")).toBe(true);
	});

	it("returns non-empty array when posts folder has content", () => {
		const authors = getAuthors();
		expect(authors.length).toBeGreaterThan(0);
	});
});
