/*
const { expect } = require("chai");

const name = "Joe";
const height = 74;
const message = `${name} is ${height} inches tall`;

module.exports = { name, height, message };

console.log(message);
*/



describe("Name", ()=>{
    it('returns "Susan"',() =>{ 
        expect(Name).toEqual("Susan");
    });
});

describe("Height", () =>{
    it("is less than 40", ()=>{
        expect (Height).toBeLessThan(40);
    });
});

describe("message", ()=>{
    it("gives the name and height", ()=>{
        expect(message).toInclude(name);
        expect(message).toInclude(height);
    });

    
});

