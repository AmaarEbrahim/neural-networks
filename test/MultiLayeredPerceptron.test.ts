import * as mocha from "mocha";
import * as chai from "chai";
import * as assert from "assert"
import { MultiLayeredPerceptron } from "../src/MultiLayeredPerceptron";

//you need to explain the significance of some of your tests
//e.g. errors because the length of initialWeights field is different than the number of columns in the initialBiases field
// ^ that is very technical and does not provide any indication on why the 
// initialWeights length must be the same as the #columns in the initialBiases 
// field


describe("Constructor testing", function() {
    it("successfully instantiates MLP class");
    it("errors because the initialWeights field is null");
    it("errors because the initialWeights field is empty");
    it("errors because the initialWeights field contains matrices of different sizes");
    it("errors because the length of initialWeights field is different than the number of columns in the initialBiases field")
    it("errors because the length of the elements in initialWeights is different than the number of rows in the initialBiases field")
    it("errors because the initialBiases field is null");
})

describe("train() testing", function() {

})

describe("test() testing", function() {

})