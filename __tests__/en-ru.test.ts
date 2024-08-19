import { transliterateRU } from "../src/index";

test("minsk => минск", () => {
  expect(transliterateRU("minsk")).toEqual("минск");
});

test("vladimir => владимир", () => {
  expect(transliterateRU("vladimir")).toEqual("владимир");
});
