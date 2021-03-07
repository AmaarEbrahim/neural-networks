import * as mocha from "mocha";
import * as chai from "chai";
import * as assert from "assert"
import { Matrix } from "../src/Matrix";

describe("Matrix class test", function() {
    let general2x2Array = [
        [1, 2],
        [3, 4]
    ]

    let incorrect2x2Array = [
        [1, 2],
        [3]
    ]

    let general2x4Array2D = [
        [1, 2, 4, 5],
        [7, 9, 33, 12]
    ]
    let general2x4Matrix = new Matrix(general2x4Array2D);

    let general3x3Matrix = new Matrix([
        [1, 5, 7],
        [9, 11, 13],
        [15, 17, 19]
    ])

    let general2x3Matrix = new Matrix([
        [54, -1, 2],
        [43, 5, 9]
    ])

    let general3x2Matrix = new Matrix([
        [54, -1],
        [43, 5],
        [-32, 11]
    ])

    let general3x3Matrix2 = new Matrix([
        [2, 4, 6],
        [1, 81, 3],
        [9, 36, 25]
    ])

    let general3x3Matrix2Transpose = new Matrix([
        [2, 1, 9],
        [4, 81, 36],
        [6, 3, 25]        
    ])

    let noRowsArray: Array<Array<number>> = []
    
    let noColumnsArray: Array<Array<number>> = [[], [], []]

    describe("Constructor testing", function() {

        it("Creates a matrix given a 2D array with a consistent number of columns", function() {
            //passes if no errors are thrown
            let matrix: Matrix = new Matrix(general2x2Array);
            assert.ok(matrix);
        })

        it("Does not create a matrix because the 2D array is null", function() {
            let caught: Boolean = false;
            try {
                let matrix: Matrix = new Matrix(null);
            } catch(e) {
                caught = true;
            }
            assert.ok(caught);
        })

        it("Does not create a matrix because the 2D array has an inconstent number of columns", function() {
            let caught: Boolean = false;
            try {
                let matrix: Matrix = new Matrix(
                    incorrect2x2Array);
            } catch(e) {
                caught = true;
            }
            assert.ok(caught);            
        })

        it("Does not create a matrix because the 2D array has 0 rows", function() {
            let caught: Boolean = false;
            try {
                let matrix: Matrix = new Matrix(noRowsArray);
            } catch(e) {
                caught = true;
            }
            assert.ok(caught);               
        })

        it("Does not create a matrix because the 2D array has 0 columns", function() {
            let caught: Boolean = false;
            try {
                let matrix: Matrix = new Matrix(noColumnsArray);
            } catch(e) {
                caught = true;
            }
            assert.ok(caught);               
        })

        it("Does not create a matrix because an element is null")
    })

    describe("Getters testing", function() {

        it("Gets the number of rows", function() {
            let rows: number = general2x4Matrix.getRowNumber();
            let expectedValue = 2;
            assert.strictEqual(rows, expectedValue);
        })

        it("Gets the number of columns", function() {
            let columns: number = general2x4Matrix.getColumnNumber();
            let expectedValue = 4
            assert.strictEqual(columns, expectedValue);
        })

        it("Gets the elements", function() {
            let elements: Number[][] = general2x4Matrix.getElements2DArray();
            let expectedValue = general2x4Array2D
            assert.strictEqual(elements, expectedValue);
        })
    })



    describe("getCell(number, number) testing", function() {
        it("Returns the correct element", function() {
            let row = 1;
            let column = 1;
            let expectedValue = 1;
            let value: number = general3x3Matrix.getCell(row, column);
            assert.strictEqual(value, expectedValue);
        })

        it("Errors because the row is null", function() {
            let row = null, column = 1;
            let caught: boolean = false;
            try {
                let value: number = general3x3Matrix.getCell(row, column);
            } catch {
                caught = true;
            }
            assert.ok(caught);   
        })

        it("Errors because the column is null", function() {
            let row = 1, column = null;
            let caught: boolean = false;
            try {
                let value: number = general3x3Matrix.getCell(row, column);
            } catch {
                caught = true;
            }
            assert.ok(caught); 
        })

        it("Errors because the row is not within the appropriate bounds", function() {
            let row = 54, column = 1;
            let caught: boolean = false;
            try {
                let value: number = general3x3Matrix.getCell(row, column);
            } catch {
                caught = true;
            }
            assert.ok(caught); 
        })

        it("Errors because the column is not within the appropriate bounds", function() {
            let row = 1, column = -123;
            let caught: boolean = false;
            try {
                let value: number = general3x3Matrix.getCell(row, column);
            } catch {
                caught = true;
            }
            assert.ok(caught); 
        })
    })

    describe("setCell(number, number, number)", function() {

        it("Successfully sets the correct cell")
    })


    describe("getRowCopy(number) testing", function() {
        it("returns the correct row", function() {
            let row: Array<number> = general3x3Matrix2.getRowCopy(2);
            let elementsToExpect: Array<number> = [1, 81, 3];
            let same: boolean = true;
            for (let i = 0; i < row.length; i++) {
                if (elementsToExpect[i] != row[i]) {
                    same = false;
                    break;
                }
            }
            assert.ok(same);
        })

        it("errors because the row is null", function() {
            let row = null;
            let caught: boolean = false;
            try {
                let value: number[] = general3x3Matrix2.getRowCopy(row);
            } catch {
                caught = true;
            }
            assert.ok(caught);    
        })
    })

    describe("getColumnCopy(number) testing", function() {
        it("returns the correct column", function() {
            let columnNumber = 2
            let column: Array<number> = general3x3Matrix2.getColumnCopy(
                columnNumber);
            let elementsToExpect: Array<number> = [4, 81, 36];
            let same: boolean = true;
            for (let i = 0; i < column.length; i++) {
                if (elementsToExpect[i] != column[i]) {
                    same = false;
                    break;
                }
            }
            assert.ok(same);
        })

        it("errors because the column is null", function() {
            let column = null;
            let caught: boolean = false;
            try {
                let value: number[] = general3x3Matrix2.getColumnCopy(column);
            } catch {
                caught = true;
            }
            assert.ok(caught);    
        })
    })

    describe("equals(Matrix<T>) testing", function() {

        it("Errors because the passed matrix is null", function() {
            let caught: boolean = false;
            try {
                general3x3Matrix.equals(null);
            } catch {
                caught = true;
            }
            assert.ok(caught);
        });

        it("Returns false because the rows lengths are not the same", function() {
            let same: boolean = general3x3Matrix.equals(general2x3Matrix);
            let expected = false;
            assert.strictEqual(same, expected);
        });

        it("Returns false because the columns lengths are not the same", function() {
            let same: boolean = general3x3Matrix.equals(general3x2Matrix);
            let expected = false;
            assert.strictEqual(same, expected);    
        });

        it("Returns false because the matrix's elements are not the same " +
            "(but the dimensions are the same)", function() {
            let same: boolean = general3x3Matrix.equals(general3x3Matrix2);
            let expected = false;
            assert.strictEqual(same, expected);
        });

        it("Returns true because the matrices have the same elements", function() {
            let same: boolean = general3x3Matrix.equals(general3x3Matrix);
            let expected = true;
            assert.strictEqual(same, expected);
        })
    })

    describe("transpose() testing", function() {
        it("return's the transpose of the matrix", function() {
            let general3x3Matrix2TransposeRes = general3x3Matrix2.transpose();
            let equals: boolean = general3x3Matrix2TransposeRes.equals(
                general3x3Matrix2Transpose);
            assert.ok(equals);
        })
    })

    describe("multiply(Matrix<T>) testing", function() {
        
    })

    describe("hadamard(Matrix<T>) testing", function() {

    })
})