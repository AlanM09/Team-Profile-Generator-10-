const Manager = require("../lib/Manager");

test("creates an office number", () => {
    const testValue = 9999;
    const manager = new Manager("Foo", 1, "test@test.com", testValue);
    expect(manager.officeNumber).toBe(testValue);
});

test("get role from employee which is Manager", () => {
    const testValue = "Manager";
    const manager = new Manager("Foo", 1, "test@test.com", testValue);
    expect(manager.getRole()).toBe(testValue);
});

test("gets office number", () => {
    const testValue = 9999;
    const manager = new Manager("Foo", 1, "test@test.com", testValue);
    expect(manager.getOfficeNumber()).toBe(testValue);
});