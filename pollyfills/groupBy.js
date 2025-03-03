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


//-----------------------------------------------------------------------------------------

// const endorsements = [
//     { skill: 'css', user: 'Bill' },
//     { skill: 'javascript', user: 'Chad' },
//     { skill: 'javascript', user: 'Bill' },
//     { skill: 'css', user: 'Sue' },
//     { skill: 'javascript', user: 'Sue' },
//     { skill: 'html', user: 'Sue' }
//   ];
  
//   const skillsMap = new Map();
  
//   // Process endorsements to create skill objects
//   endorsements.forEach(({ skill, user }) => {
//     if (!skillsMap.has(skill)) {
//       skillsMap.set(skill, { skill, users: new Set() });
//     }
//     skillsMap.get(skill).users.add(user);
//   });
  
//   // Convert to array and sort by count descending
//   const skills = Array.from(skillsMap.values()).map(({ skill, users }) => ({
//     skill,
//     users: Array.from(users),
//     count: users.size
//   })).sort((a, b) => b.count - a.count);
  
//   console.log(skills);

const endorsements = [
    { skill: 'css', user: 'Bill' },
    { skill: 'javascript', user: 'Chad' },
    { skill: 'javascript', user: 'Bill' },
    { skill: 'css', user: 'Sue' },
    { skill: 'javascript', user: 'Sue' },
    { skill: 'html', user: 'Sue' }
  ];
  
  const skillsMap = new Map();
  
  // Using a for loop instead of forEach
  for (let i = 0; i < endorsements.length; i++) {
    const { skill, user } = endorsements[i];
  
    if (!skillsMap.has(skill)) {
      skillsMap.set(skill, { skill, users: new Set() });
    }
    skillsMap.get(skill).users.add(user);
  }
  
  // Convert to an array, calculate counts, and sort by count descending
  const skills = [];
  for (const [skill, data] of skillsMap) {
    skills.push({
      skill,
      users: Array.from(data.users),
      count: data.users.size
    });
  }
  
  skills.sort((a, b) => b.count - a.count);
  
  console.log(skills);
  