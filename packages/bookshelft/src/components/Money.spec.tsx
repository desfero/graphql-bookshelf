import * as React from "react";
import { Money } from "./Money";
import { shallow } from "enzyme";

describe("Money", () => {
  it("should format money correctly", () => {
    const moneyToText = (props: React.ComponentProps<typeof Money>) =>
      shallow(<Money {...props} />).text();

    expect(moneyToText({ value: 1.184 })).toBe("1.18");
    expect(moneyToText({ value: 12 })).toBe("12.00");
    expect(moneyToText({ value: 58.055678 })).toBe("58.06");
    expect(moneyToText({ value: 84.16198 })).toBe("84.16");
    expect(moneyToText({ value: 100.0 })).toBe("100.00");
    expect(moneyToText({ value: 120.999999 })).toBe("121.00");
  });
});
