  const Intern = require("../lib/Intern");

test("create school for intern", () => {
  const testValue = "UofA";
  const intern = new Intern("Foo", 1, "test@test.com", testValue);
  expect(intern.school).toBe(testValue);
});

test("gets role from employee which is Intern", () => {
  const testValue = "Intern";
  const intern = new Intern("Foo", 1, "test@test.com", testValue);
  expect(intern.getRole()).toBe(testValue);
});

test("gets school from intern", () => {
  const testValue = "UCLA";
  const intern = new Intern("Foo", 1, "test@test.com", testValue);
  expect(intern.getSchool()).toBe(testValue);
});