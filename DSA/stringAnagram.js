
// function areAnagrams(str1, str2) {
//     // If the lengths are not the same, they can't be anagrams
//     if (str1.length !== str2.length) {
//         return false;
//     }

//     // Create character frequency objects
//     let freq1 = {};
//     let freq2 = {};

//     // Count the frequency of each character in str1
//     for (let i = 0; i < str1.length; i++) {
//         let char = str1[i];
//         freq1[char] = (freq1[char] || 0) + 1;
//     }

//     // Count the frequency of each character in str2
//     for (let i = 0; i < str2.length; i++) {
//         let char = str2[i];
//         freq2[char] = (freq2[char] || 0) + 1;
//     }

//     // Compare the frequency objects
//     for (let key in freq1) {
//         if (freq1[key] !== freq2[key]) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(areAnagrams('loop','poll'));


const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];
const updatedUsers = users.map(user => user.name === "Bob" ? ({ ...user, name: "aditya", age: user.age + 1 }) : user)

console.log(updatedUsers);
