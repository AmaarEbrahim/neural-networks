export interface IMatrix<T> {
    getCell(row: number, column: number): T;
    setCell(row: number, column: number, value: T): boolean;
}