import { IMatrix } from "./IMatrix";

export interface INumericalMatrix extends IMatrix<number> {
    multiply(otherMatrix: INumericalMatrix): INumericalMatrix;
    transpose(): INumericalMatrix;
    hadamardProduct(otherMatrix: INumericalMatrix): INumericalMatrix;
    add(otherMatrix: INumericalMatrix): INumericalMatrix;
    subtract(otherMatrix: INumericalMatrix): INumericalMatrix;
    negative(): INumericalMatrix;
}