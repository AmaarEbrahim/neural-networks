import * as mocha from "mocha";
import * as chai from "chai";
import * as assert from "assert"
import { Matrix } from "../src/Matrix";

describe("Matrix class test", function() {

    let general2x2Array;
    let incorrect2x2Array;
    let general2x4Array2D;
    let general2x4Matrix;
    let general3x3Matrix;
    let general2x3Matrix;
    let general3x2Matrix;
    let general3x3Matrix2;
    let general3x3Matrix2Transpose;
    let general4x3Matrix;
    let productOf2x4And4x3Matrix;
    let noRowsArray: Array<Array<number>>;
    let noColumnsArray: Array<Array<number>>;
    let arrayWithNullElement;

    beforeEach(function() {
        general2x2Array = [
            [1, 2],
            [3, 4]
        ]
    
        incorrect2x2Array = [
            [1, 2],
            [3]
        ]
    
        general2x4Array2D = [
            [1, 2, 4, 5],
            [7, 9, 33, 12]
        ]
        general2x4Matrix = new Matrix(general2x4Array2D);
    
        general3x3Matrix = new Matrix([
            [1, 5, 7],
            [9, 11, 13],
            [15, 17, 19]
        ])
    
        general2x3Matrix = new Matrix([
            [54, -1, 2],
            [43, 5, 9]
        ])
    
        general3x2Matrix = new Matrix([
            [54, -1],
            [43, 5],
            [-32, 11]
        ])
    
        general3x3Matrix2 = new Matrix([
            [2, 4, 6],
            [1, 81, 3],
            [9, 36, 25]
        ])
    
        general3x3Matrix2Transpose = new Matrix([
            [2, 1, 9],
            [4, 81, 36],
            [6, 3, 25]        
        ])

        general4x3Matrix = new Matrix([
            [5, 9, -4],
            [6, 10, 7],
            [1, 3, 0],
            [8, 3, 12]
        ])
    
        productOf2x4And4x3Matrix = new Matrix([
            [61, 56, 70],
            [218, 288, 179]
        ])

        noRowsArray = []
        
        noColumnsArray = [[], [], []]

        arrayWithNullElement = [
            [1, 2, null], 
            [4, 5, 6]
        ]
    })


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

        it("Does not create a matrix because an element is null", function() {
            assert.throws(function() {
                new Matrix(arrayWithNullElement);
            })
        })
    })

    describe("fromDimensions testing", function() {
        it("successfully creates a matrix");
        it("errors because the rows field is null");
        it("errors because the columns field is null");
        it("errors because the rows field is less than 1");
        it("errors because the columns field is less than 1");
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

        it("Successfully sets the correct cell", function() {
            let row = 2, column = 3;
            let curCellValue = general3x3Matrix.getCell(row, column);
            let newCellValue = curCellValue + 1;
            general3x3Matrix.setCell(row, column, newCellValue);
            let actual = general3x3Matrix.getCell(row, column);
            let expected = newCellValue;
            assert.strictEqual(actual, expected);
        });

        it("Errors because the row is null", function() {
            assert.throws(function() {
                let row = null, column = 3;
                general3x3Matrix.setCell(row, column, 56);
            }, Error)
        });
        it("Errors because the column is null", function() {
            assert.throws(function() {
                let row = 1, column = null;
                general3x3Matrix.setCell(row, column, 56);
            }, Error)
        });
        it("Errors because the row is too high", function() {
            assert.throws(function() {
                let row = 4, column = 2;
                general3x3Matrix.setCell(row, column, 56);
            }, Error)
        });
        it("Errors because the row is too low", function() {
            assert.throws(function() {
                let row = 0, column = 2;
                general3x3Matrix.setCell(row, column, 56);
            }, Error)
        });
        it("Errors because the column is too high", function() {
            assert.throws(function() {
                let row = 1, column = 4;
                general3x3Matrix.setCell(row, column, 56);
            }, Error)
        });
        it("Errors because the column is too low", function() {
            assert.throws(function() {
                let row = 1, column = 0;
                general3x3Matrix.setCell(row, column, 56);
            }, Error)
        });
        it("Errors because the new value is null", function() {
            assert.throws(function() {
                let row = 2, column = 2;
                general3x3Matrix.setCell(row, column, null);
            }, Error)
        });
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
        it("Multiplies two matrices correctly", function() {
            let matrixProduct: Matrix = general2x4Matrix.multiply(
                general4x3Matrix);
            let equals: boolean = matrixProduct.equals(productOf2x4And4x3Matrix);

            assert.ok(equals);
        });
        it("Errors because the number of columns in the first matrix is not equal to the number of rows in the second", function() {
            assert.throws(function() {
                general2x3Matrix.multiply(general2x4Matrix);
            }, Error);
        });
        it("Errors because the matrix is null", function() {
            assert.throws(function() {
                general2x3Matrix.multiply(null);
            })
        });
    })

    describe("hadamard(Matrix<T>) testing", function() {

    })
})