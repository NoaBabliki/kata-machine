export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    while (high > low) {
        const pivot = Math.floor(low + (high - low) / 2);
        const currrentValue = haystack[pivot]
        if (currrentValue === needle) {
            return true;
        }
        if (currrentValue < needle) {
            low = pivot + 1;
        }
        if (currrentValue > needle) {
            high = pivot;
        }
    }
    return false;
}
