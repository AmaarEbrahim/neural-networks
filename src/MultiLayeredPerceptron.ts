import { Matrix } from "./Matrix";
import { IMultiLayeredPerceptron } from "./IMultiLayeredPerceptron";

export class MultiLayeredPerceptron implements IMultiLayeredPerceptron {

    private weights: Matrix;
    private biases: Matrix;
    private learningRate = .1;
    private costFunction;

    constructor(initialWeights: Matrix, initialBiases: Matrix) {
        
        this.weights = initialWeights;
        this.biases = initialBiases;
    }

    train() {
        throw new Error("Method not implemented.");
    }

    test() {
        throw new Error("Method not implemented.");
    }

    feedFoward() {
        throw new Error("Method not implemented.");
    }

    backPropagate() {
        throw new Error("Method not implemented.");
    }
    
}