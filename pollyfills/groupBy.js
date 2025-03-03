// The groupBy function takes an array and a key (or callback function) and groups elements based on that key.

function groupBy(array, key) {
    return array.reduce((acc, item) => {
        const groupKey = typeof key === 'function' ? key(item) : item[key];
        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }
        acc[groupKey].push(item);
        return acc;
    }, {});
}

// Example usage:
const data = [
    { id: 1, category: 'fruit', name: 'Apple' },
    { id: 2, category: 'vegetable', name: 'Carrot' },
    { id: 3, category: 'fruit', name: 'Banana' },
];

console.log(groupBy(data, 'category'));
/*
Output:
{
  fruit: [{ id: 1, category: 'fruit', name: 'Apple' }, { id: 3, category: 'fruit', name: 'Banana' }],
  vegetable: [{ id: 2, category: 'vegetable', name: 'Carrot' }]
}
*/


console.log(groupBy(data, (item) => item.name.length));
/*
Groups by the length of the name:
{
  5: [{ id: 1, category: 'fruit', name: 'Apple' }],
  6: [{ id: 3, category: 'fruit', name: 'Banana' }],
  7: [{ id: 2, category: 'vegetable', name: 'Carrot' }]
}
*/

function groupBy(array, key) {
    return array.reduce((acc, item) => {
        const groupKey = typeof key === 'function' ? key(item) : item[key];
        (acc[groupKey] ??= []).push(item);
        return acc;
    }, {});
}


Array.prototype.groupBy = function (key) {
    return this.reduce((acc, item) => {
        const groupKey = typeof key === 'function' ? key(item) : item[key];
        (acc[groupKey] ??= []).push(item);
        return acc;
    }, {});
};

// Example usage:
const data = [
    { id: 1, category: 'fruit', name: 'Apple' },
    { id: 2, category: 'vegetable', name: 'Carrot' },
    { id: 3, category: 'fruit', name: 'Banana' },
];

console.log(data.groupBy('category'));
