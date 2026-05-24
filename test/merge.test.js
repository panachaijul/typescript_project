import merge from "../src/merge.js";
describe("merge function", () => {
    test("should merge correctly", () => {
        const collection_1 = [1, 4, 7];
        const collection_2 = [9, 5, 2];
        const collection_3 = [3, 6, 8];
        expect(merge(collection_1, collection_2, collection_3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    test("should handle empty arrays", () => {
        expect(merge([], [], [])).toEqual([]);
    });
    test("should handle duplicates", () => {
        const collection_1 = [1, 2, 2];
        const collection_2 = [5, 4, 2];
        const collection_3 = [2, 3];
        expect(merge(collection_1, collection_2, collection_3)).toEqual([1, 2, 2, 2, 2, 3, 4, 5]);
    });
    test("should handle negative numbers", () => {
        const collection_1 = [-10, -3, 1];
        const collection_2 = [8, 2, -2];
        const collection_3 = [-5, 0, 9];
        expect(merge(collection_1, collection_2, collection_3)).toEqual([-10, -5, -3, -2, 0, 1, 2, 8, 9]);
    });
});
//# sourceMappingURL=merge.test.js.map