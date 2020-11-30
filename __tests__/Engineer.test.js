const { TestScheduler } = require("jest");
const Engineer = require("../lib/Engineer");

test("Creates engineers github", () => {
    const testValue = "GitHubUser";
    const engineer = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(engineer.github).toBe(testValue);
  });

  test("gets role which is Engineer", () => {
    const testValue = "Engineer";
    const engineer = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
    expect(engineer.getRole()).toBe(testValue);
  });
  
  test("gets engineers github", () => {
    const testValue = "GitHubUser";
    const engineer = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(engineer.getGithub()).toBe(testValue);
  });