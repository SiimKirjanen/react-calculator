import { findHighestPrimeBetweenToNumbers } from './numbers';

describe('numbers', () => {
    describe('findHighestPrimeBetweenToNumbers', () => {
        it('should find highest prime', () => {
            expect(findHighestPrimeBetweenToNumbers(1,100)).toBe(97);
            expect(findHighestPrimeBetweenToNumbers(1,50)).toBe(47);
        });
        it('should return null if no prime found', () => {
            expect(findHighestPrimeBetweenToNumbers(54, 58)).toBe(null);
        });
    });
});