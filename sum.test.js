const sum = require('./sum')

it("expect to properly add tow number", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
})