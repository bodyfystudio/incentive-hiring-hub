import { describe, expect, it } from "vitest";
import { milestoneBonus, monthlyEarnings } from "@/lib/applications";

describe("commission rules", () => {
  it("pays 500 per 4000 plan and 1000 per 8000 plan", () => {
    expect(monthlyEarnings(1, 0)).toBe(500);
    expect(monthlyEarnings(0, 1)).toBe(1000);
  });
  it("no bonus under 5 sales", () => expect(milestoneBonus(4)).toBe(0));
  it("5 sales bonus is 1000", () => expect(milestoneBonus(5)).toBe(1000));
  it("10 sales bonus is 2500", () => expect(milestoneBonus(10)).toBe(2500));
  it("15 sales bonus is 3500", () => expect(milestoneBonus(15)).toBe(3500));
  it("20 sales bonus is 5000", () => expect(milestoneBonus(25)).toBe(5000));
  it("10 x 8000 plans earns 12500", () => expect(monthlyEarnings(0, 10)).toBe(12500));
});
