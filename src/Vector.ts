import { IVector } from "./IVector";

/**
 * Vector class
 * 
 * @author Amaar Ebrahim
 * 
 * @notes
 *  > Position is a sequencing system that begins at 1, rather than 0. Methods
 *  > that ask for a "position" parameter are looking for something that falls
 *  > between 1 and the length of the elements field.
 *  >   Example:
 *  >       elements = [15, 16, 17, 18]
 *  >       index:       0   1   2   3
 *  >       position:    1   2   3   4
 */

export class Vector implements IVector {



    private elements: Array<number>;



    /**
     * Vector constructor. It does not duplicate the array parameter.
     * @param elementsIn an Array<number> that contains the elements of the
     * vector. The vector size is determined by this.
     * @todo Should I duplicate the array?
     */
    constructor(elementsIn: Array<number>) {
        if (elementsIn == null) {
            throw new Error("Array cannot be null");
        }

        if (elementsIn.length == 0) {
            throw new Error("Array length cannot be 0");
        }

        let noNullElements = elementsIn.every((element) => {
            return element != null;
        })

        if (noNullElements == false) {
            throw new Error("Cannot have null elements");
        }

        this.elements = elementsIn;
    }



    /**
     * setValue sets the value at a certain position.
     * @param position the position in the vector that you are trying to set 
     * the new value to. Errors if null or if the passed position is outside of 
     * the boundaries. See the Class Notes for information on position vs. 
     * index.
     * @param newValue the new value
     */
    public setValue(position: number, newValue: number): void {
        if (position == null) {
            throw new Error("Position cannot be null");
        }

        if (newValue == null) {
            throw new Error("Cell value cannot be null");
        }

        if (this.isPositionOutOfBounds(position)) {
            throw new Error("Position is not within bounds");
        }

        let index = position - 1;
        this.elements[index] = newValue;

    }



    /**
     * getValue returns the value at a certain position.
     * @param position the position that is being queried. Errors if null or if
     * the passed position is outside of the boundaries. See the Class Notes
     * for information on position vs. index.
     * @returns the element at the position
     */
    public getValue(position: number): number {

        if (position == null) {
            throw new Error("Position cannot be null.")
        }

        if (this.isPositionOutOfBounds(position)) {
            throw new Error("Position is not within bounds")
        }

        //position is expected to start at 1, but arrays start at 0
        let realIndex = position - 1;
        return this.elements[realIndex];
    }



    /**
     * Returns the geometric dot product of two vectors. Errors if vec is null,
     * or if vec and this vector are not the same length.
     * @param vec The second vector in the dot product.
     * @returns the value of the geometric dot product
     */
    public dot(vec: IVector): number {

        if (vec == null) {
            throw new Error("Passed vector cannot be null.")
        }

        if (this.length() != vec.length()) {
            throw new Error("Vectors are not the same length.")
        }

        let sum = 0;

        for (let position = 1; position <= this.length(); position++) {
            let thisValue = this.getValue(position);
            let vecValue = vec.getValue(position);
            sum += thisValue * vecValue;
        }

        return sum;
    }



    /**
     * gets the length of the vector
     * @returns the length of the elements field
     */
    public length(): number {
        return this.elements.length;
    }



    /**
     * determines if two vectors are equal to eachother by checking to see if
     * the element at each position in the vector is the same. Errors if vec
     * is null.
     * @param vec the vector that is being compared
     * @returns whether they have the same elements (in the same order)
     */
    public equals(vec: IVector): boolean {

        if (vec == null) {
            throw new Error("Passed vector cannot be null");
        }

        if (vec.length() != this.length()) {
            return false;
        }

        let sameElementsInEachVector: boolean = true;

        this.elements.forEach((value: number, index: number) => {
            let position = index + 1;
            if (vec.getValue(position) != value) {
                sameElementsInEachVector = false;
                return;
            }
        })

        return sameElementsInEachVector;
    }


    /**
     * determines if the position parameter is within the vector's range
     * @param position the position to check
     * @returns whether the position is within the vector's length
     */
    public isPositionOutOfBounds(position: number): boolean {
        return position < 1 || position > this.length();
    } 

    
    
}