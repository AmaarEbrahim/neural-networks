import { IMatrix } from "./IMatrix";

export interface INumericalMatrix extends IMatrix<number> {
    multiply(otherMatrix: IMatrix<number>): IMatrix<number>;
    transpose(): IMatrix<number>;
    hadamardProduct(otherMatrix: IMatrix<number>): IMatrix<number>;
}