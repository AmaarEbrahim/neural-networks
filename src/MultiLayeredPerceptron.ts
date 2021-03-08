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

    public train() {
        throw new Error("Method not implemented.");
    }

    public test() {
        throw new Error("Method not implemented.");
    }

    private feedFoward() {
        throw new Error("Method not implemented.");
    }

    private backPropagate() {
        throw new Error("Method not implemented.");
    }
    
}