var assert = require("assert");

function sum(a, b) {
    return a + b;
}
suite('Sum testing suit', () => {
    var a;
    suiteSetup(() => {
        console.log("suite setup")
    });
    suite('inside suite 1', () => {

        suiteSetup(() => {
            console.log("suite setup 1")
        });

        setup(() => {
            console.log("in the setup 1")
        });

        test('sum test 1', () => {
            assert.equal(sum(2, 3), 5);
        });
        test('sum test 2', () => {
            assert.equal(sum(2, 3), 5);
        });
    });
    suite('inside suite 2', () => {
        setup(() => {
            console.log("in the setup 2")
        });
        suiteSetup(() => {
            console.log("suite setup 2")
        });
        test('sum test 1', () => {
            assert.equal(sum(2, 3), 5);
        });
        test('sum test 2', () => {
            assert.equal(sum(2, 3), 5);
        });
    });

    // describe("sum test", () => {
    //     it("should sum 2 numbers", () => {
    //         assert.equal(sum(2, 3), 5);
    //         assert.equal(a, 3);
    //     });
    //     it("work well", () => {
    //         assert.equal(sum(2, 3), 5);
    //     });
    // });

});