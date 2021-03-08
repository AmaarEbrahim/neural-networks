export interface IMatrix<T> {
    getCell(row: number, column: number): T;
    setCell(row: number, column: number, value: T): boolean;
    equals(otherMatrix: IMatrix<T>): boolean;
    getColumnCopy(column: number): Array<T>;
    getRowCopy(row: number): Array<T>;
}