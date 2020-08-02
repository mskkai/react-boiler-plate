const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}`;

test("should add two numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("should generate greeeting from name", () => {
  const result = generateGreeting("mike");
  expect(result).toBe("Hello mike");
});

test("should generate greeting for no name", () => {
  const result = generateGreeting();
  expect(result).toBe("Hello Anonymous");
});
