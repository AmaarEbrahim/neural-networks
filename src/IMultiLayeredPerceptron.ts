import { Matrix } from "./Matrix"

export interface IMultiLayeredPerceptron {
    train();
    test();
    feedFoward();
    backPropagate();
}