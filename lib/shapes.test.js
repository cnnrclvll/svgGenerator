const { Circle, Triangle, Square } = require("./shapes");

describe("Circle", () =>
{
    it("should create an svg shape of a complete circle", () => 
    {
        const expectation = `<circle cx="150" cy="115" r="80" fill="cyan"/>`;
        const testShape = new Circle();
        testShape.hueTouch("cyan");
        const compareShape = testShape.createShape();
        expect(compareShape).toEqual(expectation);
    });
    it("should change the color of the circle to magenta", () => 
    {
        const expectation = `<circle cx="150" cy="115" r="80" fill="magenta"/>`;
        const testShape = new Circle();
        testShape.hueTouch("magenta");
        const compareShape = testShape.createShape();
        expect(compareShape).toEqual(expectation);
    });
});
describe("Triangle", () =>
{
    it("should create an svg shape of a complete triangle", () => 
    {
        const expectation = `<polygon points="150,15 15,185 285,185" fill="cyan" />`;
        const testShape = new Triangle();
        testShape.hueTouch("cyan");
        const compareShape = testShape.createShape();
        expect(compareShape).toEqual(expectation);
    });
    it("should change the color of the circle to magenta", () => 
    {
        const expectation = `<polygon points="150,15 15,185 285,185" fill="magenta" />`;
        const testShape = new Triangle();
        testShape.hueTouch("magenta");
        const compareShape = testShape.createShape();
        expect(compareShape).toEqual(expectation);
    });
});
describe("Square", () =>
{
    it("should create an svg shape of a complete square", () => 
    {
        const expectation = `<rect x="57.5" y="32.5" width="185" height="185" fill="cyan" />`;
        const testShape = new Square();
        testShape.hueTouch("cyan");
        const compareShape = testShape.createShape();
        expect(compareShape).toEqual(expectation);
    });
    it("should change the color of the circle to magenta", () => 
    {
        const expectation = `<rect x="57.5" y="32.5" width="185" height="185" fill="magenta" />`;
        const testShape = new Square();
        testShape.hueTouch("magenta");
        const compareShape = testShape.createShape();
        expect(compareShape).toEqual(expectation);
    });
});