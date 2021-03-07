/**
 * Matrix class for neural networks project.
 * 
 * Notes:
 *  at some point, make the difference between row and rownumber clear.
 * 
 * @author Amaar Ebrahim
 */

import { IMatrix } from "./IMatrix";
import { Vector } from "./Vector";

export class Matrix implements IMatrix<number> {

    //////////////////////////////////////////////////
    ///////////////////// FIELDS /////////////////////
    //////////////////////////////////////////////////
    private rows: number;
    private columns: number;
    private elements: number[][];

    //////////////////////////////////////////////////
    ////////////////// CONSTRUCTORS //////////////////
    //////////////////////////////////////////////////
    constructor(elementsIn: number[][]) {

        if (elementsIn == null) {
            throw new Error("elementsIn cannot be null");
        }

        if (Matrix.is2DArrayValid(elementsIn)) {
            this.elements = elementsIn;
            this.rows = elementsIn.length;
            this.columns = elementsIn[0].length;
        } else {
            throw new Error("2D array is not valid");
        }
        
    }

    public static fromDimensions(rows: number, 
        columns: number, initialValue: number): Matrix {

        if (rows == null) { throw new Error("Rows can't be null") };
        if (columns == null) { throw new Error("Columns can't be null") };
        if (initialValue == null) { throw new Error("initial value can't be " +
            "null")};

        if (rows < 1) {
            throw new Error("Rows can't be less than 1");
        }

        if (columns < 1) {
            throw new Error("Columns can't be less than 1");
        }

        let emptyArray = new Array<Array<number>>(rows);

        //populate empty array
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                emptyArray[i][j] = initialValue;
            }
        }

        return new Matrix(emptyArray);
    }

    //////////////////////////////////////////////////
    //////////////// PRIVATE METHODS /////////////////
    //////////////////////////////////////////////////
    private static is2DArrayValid(array2D: number[][]): boolean {

        if (array2D == null) {
            throw new Error("2D array cannot be null");
        }

        let rows = array2D.length;

        if (rows == 0) {
            throw new Error("Matrix cannot have 0 rows");
        }

        let columns = array2D[0].length;

        if (columns == 0) {
            throw new Error("Matrix cannot have 0 columns")
        }

        for (let i = 1; i < rows; i++) {
            if (array2D[i].length != columns) {
                return false;
            }
        }

        return true;
    }

    private isRowNumberValid(n: number): boolean {
        return n <= this.rows && n >= 1;
    }

    private isColumnNumberValid(n: number): boolean {
        return n <= this.columns && n >= 1;
    }


    //////////////////////////////////////////////////
    ///////////////// PUBLIC METHODS /////////////////
    //////////////////////////////////////////////////

    //[---------------------------------------]
    //[==============[ GETTERS ]==============]
    //[---------------------------------------]

    public getRowNumber(): number {
        return this.rows;
    }

    public getColumnNumber(): number {
        return this.columns
    }

    public getElements2DArray(): number[][] {
        return this.elements;
    }

    //[---------------------------------------]
    //[==============[ SETTERS ]==============]
    //[---------------------------------------]

    //empty

    //[---------------------------------------]
    //[==============[ GENERAL ]==============]
    //[---------------------------------------]

    //PUBLIC METHODS (GENERAL)
    public getCell(row: number, column: number): number {
        if (row == null) {
            throw new Error("Row can't be null");
        }

        if (column == null) {
            throw new Error("Column can't be null");
        }

        if (this.isRowNumberValid(row) == false) {
            throw new Error("Row is not within the matrix's row bounds");
        }

        if (this.isColumnNumberValid(column) == false) {
            throw new Error("Column is not within the matrix's column bounds");
        }

        //arrays are indexed at 0
        let realRow: number = row - 1;
        let realColumn: number = column - 1;

        return this.elements[realRow][realColumn];
    }

    public getRowCopy(rowNumber: number) {
        if (rowNumber == null) {
            throw new Error("Row can't be null");
        }

        if (this.isRowNumberValid(rowNumber) == false) {
            throw new Error("Row isn't within appropriate bounds");
        }

        let realRowNumber: number = rowNumber - 1;
        let row: number[] = this.elements[realRowNumber];
        let rowCopy: number[] = new Array<number>();

        for (let i = 0; i < this.rows; i++) {
            rowCopy[i] = row[i];
        }

        return rowCopy;

    }

    public getColumnCopy(columnNumber: number) {
        if (columnNumber == null) {
            throw new Error("Row can't be null");
        }

        if (this.isRowNumberValid(columnNumber) == false) {
            throw new Error("Row isn't within appropriate bounds");
        }

        let realRowNumber: number = columnNumber - 1;
        let columnCopy: number[] = new Array<number>();

        for (let i = 0; i < this.columns; i++) {
            columnCopy[i] = this.elements[i][realRowNumber];
        }

        return columnCopy;
    }

    public transpose(): Matrix {
        let new2DArray: number[][] = new Array<Array<number>>();

        for (let c = 0; c < this.columns; c++) {
            new2DArray[c] = new Array<number>();
        }

        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.columns; c++) {
                new2DArray[c][r] = this.elements[r][c];
            }
        }

        return new Matrix(new2DArray);
    }

    //wip
    public forEachElement() {

    }

    public equals(matrix: Matrix): boolean {

        if (matrix == null) {
            throw new Error("Matrix passed cannot be null");
        }

        if (matrix.getRowNumber() != this.rows) {
            return false;
        }

        if (matrix.getColumnNumber() != this.columns) {
            return false;
        }

        let other2DArray: Array<Array<number>> = matrix.getElements2DArray();

        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.columns; c++) {
                if (other2DArray[r][c] !== this.elements[r][c]) {
                    return false;
                }
            }
        }

        return true;

    }

    public multiply(other: Matrix): Matrix {
        if (other == null) {
            throw new Error("Matrix cannot be null!");
        }

        if (this.columns != other.getRowNumber()) {
            throw new Error("Matrix incompatible for multiplication");
        }

        let newRows = this.rows;
        let newColumns = other.columns;

        let newMatrix = Matrix.fromDimensions(newRows, newColumns, 0);

        for (let thisRowIndex = 0; thisRowIndex < newRows; thisRowIndex++) {
            for (let otherColumnIndex = 0; otherColumnIndex < newColumns; 
                otherColumnIndex++) {
                
                let rowVector = new Vector(this.getRowCopy(thisRowIndex + 1));
                let columnVector = new Vector(
                    other.getColumnCopy(otherColumnIndex + 1)
                )

                let newCellValue = rowVector.dot(columnVector);

                newMatrix.setCell(thisRowIndex, otherColumnIndex, newCellValue);
                
            }
        }

        return newMatrix;
    }

    public setCell(row: number, column: number, value: number): boolean {

        if (row == null) {
            throw new Error("Row cannot be null");
        }

        if (column == null) {
            throw new Error("Column cannot be null");
        }

        if (this.isRowNumberValid(row) == false) {
            throw new Error("Row number is invalid");
        }

        if (this.isColumnNumberValid(column)) {
            throw new Error("Column number is invalid")
        }

        let rowIndex = row - 1;
        let columnIndex = column - 1;

        this.elements[rowIndex][columnIndex] = value;

        return true;
    }


}


