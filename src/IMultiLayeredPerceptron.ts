import { IMatrix } from "./IMatrix";

export interface IMultiLayeredPerceptron {
    train(inputs: IMatrix<number>);
    test(inputs: IMatrix<number>);
}