// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

function sumPairs(ints, s) {
    const set = new Set();
    for (const item of ints) {
        if (set.has(s - item)) return [s - item, item];
        set.add(item);
    }
}
