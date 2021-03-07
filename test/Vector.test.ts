import * as mocha from "mocha";
import * as chai from "chai";
import * as assert from "assert"
import { Vector } from "../src/Vector";

function functionErrors(func: () => void): Error {
    try {
        func()
    } catch(e) {
        return e;
    }
    return null;
}

describe("Vector class testing", function() {

    let vector2_1: Vector;
    let vector2_2: Vector;
    let vector3_1: Vector;
    let vector3_2: Vector;
    let vector3_1_clone: Vector;


    beforeEach(() => {
        vector2_1 = new Vector([1, 2]);
        vector2_2 = new Vector([3, 4]);
    
        vector3_1 = new Vector([5, 6, 7]);
        vector3_2 = new Vector([-1, 0, 1]);

        vector3_1_clone = new Vector([5, 6, 7]);

    })

    describe("Constructor testing", function() {

        it("creates a vector successfully", function() {
            let vec: Vector = new Vector([1, 2, 3]);
            assert.ok(true);
        })

        it("errors because the array's length is 0", function() {
            let err: Error = functionErrors(function() {
                let vec: Vector = new Vector([]);
            })
            assert.ok(err != null);
        });

        it("errors because the array is null", function() {
            let err: Error = functionErrors(function() {
                let vec: Vector = new Vector(null);
            })
            assert.ok(err != null);
        });

        it("errors because an element in the array is null", function() {
            let err: Error = functionErrors(function() {
                let vec: Vector = new Vector([1, 2, null, 3]);
            })
            assert.ok(err != null);
        });
    })

    describe("setValue(number, number) testing", function() {

        function getIncrementedValueFromVector(vector: Vector, 
            position: number) {
            return vector3_1.getValue(position) + 1;
        }

        it("successfully sets the value of an element in the vector", function() {
            let position = 2;
            let newValue: number = getIncrementedValueFromVector(vector2_1, 
                position);
            vector3_1.setValue(position, newValue)
            let actualValue: number = vector3_1.getValue(position);
            assert.strictEqual(actualValue, newValue);
        });

        it("errors because the position is null", function() {
            let err: Error = functionErrors(function() {
                let position = null;
                let newValue: number = 41;
                vector3_1.setValue(position, newValue);
            })
            assert.ok(err);
        });

        it("errors because the intended value is null", function() {
            let err: Error = functionErrors(function() {
                let position = 2;
                let newValue = null;
                vector3_1.setValue(position, newValue);
            })
            assert.ok(err);
        });

        it("errors because the position is out of bounds (too high)", function() {
            let err: Error = functionErrors(function() {
                let position = 4;
                let newValue = 1000;
                vector3_1.setValue(position, newValue);
            })
            assert.ok(err);
        });

        it("errors because the position is out of bounds (too low)", function() {
            let err: Error = functionErrors(function() {
                let position = 0;
                let newValue = 1000;
                vector3_1.setValue(position, newValue);
            })
            assert.ok(err);
        });
    })

    describe("getValue(number) testing", function() {

        it("successfully gets the value of an element in the vector", function() {
            let actual: number = vector2_1.getValue(2);
            let expected: number = 2;
            assert.strictEqual(actual, expected);
        });

        it("errors because the position is null", function() {
            let err: Error = functionErrors(function() {
                let value: number = vector2_1.getValue(null);
            })
            assert.ok(err);
        });

        it("errors because the position is out of bounds (too high)", function() {
            let err: Error = functionErrors(function() {
                let value: number = vector2_1.getValue(3);
            })
            assert.ok(err);
        });

        it("errors because the position is out of bounds (too low)", function() {
            let err: Error = functionErrors(function() {
                let value: number = vector2_1.getValue(0);
            })
            assert.ok(err);
        });
    })

    describe("dot(Vector) testing", function() {

        it("successfully computes the dot product", function() {
            let actual = vector2_1.dot(vector2_2);
            let expected = 11;
            assert.strictEqual(actual, expected);
        });

        it("errors because the passed vector is null", function() {
            let err: Error = functionErrors(function() {
                let value: number = vector2_1.dot(null);
            })
            assert.ok(err);
        });

        it("errors because the vectors are not the same length", function() {
            let err: Error = functionErrors(function() {
                let value: number = vector2_1.dot(vector3_1);
            })
            assert.ok(err);
        })
    })

    describe("equals(Vector) testing", function() {

        it("successfully determines that the vectors are equal", function() {
            let isEqual: boolean = vector3_1.equals(vector3_1_clone);
            let expected: boolean = true;
            assert.strictEqual(isEqual, expected);
        });

        it("successfully determines that the vectors are not equal", function() {
            let isEqual: boolean = vector3_1.equals(vector3_2);
            let expected: boolean = false;
            assert.strictEqual(isEqual, expected);
        });

        it("successfully determines that the vectors are not equal because they" + 
            "are different lengths", function() {
                let isEqual: boolean = vector3_1.equals(vector2_2);
                let expected: boolean = false;
                assert.strictEqual(isEqual, expected);
        })

        it("errors because the passed vector is null", function() {
            let err: Error = functionErrors(function() {
                let equals: boolean = vector3_1.equals(null);
            })
            assert.ok(err);
        });
    })

    describe("length() testing", function() {
        it("succesfully returns the length of the vector", function() {
            let length: number = vector3_1.length();
            let expected = 3;
            assert.strictEqual(length, expected);
        });
    })
})