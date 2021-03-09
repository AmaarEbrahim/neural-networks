import { Matrix } from "./Matrix";
import { IMultiLayeredPerceptron } from "./IMultiLayeredPerceptron";

export class MultiLayeredPerceptron implements IMultiLayeredPerceptron {

    private weights: Array<Matrix>;
    private biases: Matrix;
    private learningRate = .1;
    private costFunction;

    constructor(initialWeights: Array<Matrix>, initialBiases: Matrix) {
        
        this.weights = initialWeights;
        this.biases = initialBiases;
    }

    public train(inputs: Matrix) {
        //check if inputs is a 1xN
        let cost: number = this.feedFoward(inputs);
    }

    public test() {
        throw new Error("Method not implemented.");
    }

    private feedFoward(inputs: Matrix): number {
        this.weights.forEach((weightMatrix: Matrix, key: number) => {
            let weightedInput: Matrix = inputs.multiply(weightMatrix)
        })
        throw new Error("Method not implemented.");
    }

    private backPropagate() {
        throw new Error("Method not implemented.");
    }
    
}