export interface IVector {
    setValue(position: number, newValue: number): void;
    getValue(position: number): number;
    dot(vec: IVector): number;
    length(): number;
    equals(vec: IVector): boolean;
}