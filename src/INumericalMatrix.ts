import { IMatrix } from "./IMatrix";

export interface INumericalMatrix extends IMatrix<number> {
    multiply(otherMatrix: INumericalMatrix): INumericalMatrix;
    transpose(): INumericalMatrix;
    hadamardProduct(otherMatrix: INumericalMatrix): INumericalMatrix;
}