const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee')

test('creates a new employee', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');
});

test('create an employee name', () => {
    const name = "Alan";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('create employee id', () => {
    const testValue = 9999
    const employee = new Employee("Foo", testValue);
    expect(employee.id).toBe(testValue);
});

test('create and employee email', () => {
    const testValue = "test@test.com";
    const employee = new Employee("Foo", 1, testValue);
    expect(employee.email).toBe(testValue);
});

test('gets Employee name', () => {
    const testValue = "Alan";
    const employee = new Employee(testValue);
    expect(employee.getName()).toBe(testValue);
});

test('gets employee id', () => {
    const testValue = 9999
    const employee = new Employee("Foo", testValue);
    expect(employee.getId()).toBe(testValue);
});

test('gets and employee email', () => {
    const testValue = "test@test.com";
    const employee = new Employee("Foo", 1, testValue);
    expect(employee.getEmail()).toBe(testValue);
});

test('gets employee role', () => {
    const testValue = "Employee";
    const employee = new Employee("Alan", 1, "test@test.com");
    expect(employee.getRole()).toBe(testValue);
});






