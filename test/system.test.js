const expect = require('chai').expect;
const SystemModule = require('../modules/system');

describe("System Module", () => {
    it("Is a class", () => {
        expect(SystemModule).to.be.a("function");
    })

    it("Lists current directory", () => {
        expect(SystemModule.listCurrentDirectory).to.not.equal(undefined);
        expect(SystemModule.listCurrentDirectory).to.be.a("function");

        SystemModule.listCurrentDirectory()
        .then(directoryList => {
            expect(directoryList).to.be.an("object");
        })
        .catch(error => {
            expect(error.message).to.have.property('length').be.gt(0);
        });
    })
})