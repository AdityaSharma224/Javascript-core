In JavaScript, both Object.hasOwn() and Object.prototype.hasOwnProperty() are used to check whether an object 
has a specific property as its own (not inherited). However, there are important differences between them:

🔹 1. Object.hasOwn(object, property)
✅ Modern, safer, and recommended

Introduced in ES2022.

Static method on the Object class.

Safer because it works even if the object doesn't inherit from Object.prototype (e.g., created via Object.create(null)).

✅ Syntax:
Object.hasOwn(obj, 'key');
✅ Example:
const obj = { a: 1 };
console.log(Object.hasOwn(obj, 'a')); // true

🔹 2. obj.hasOwnProperty(property)
⚠️ Older and potentially unsafe

Method from Object.prototype.

Can be overridden by properties in the object.

Fails if the object is created with Object.create(null) (since such objects don't inherit from Object.prototype).

⚠️ Risk Example:

const obj = {
  hasOwnProperty: () => false,
  a: 1
};

console.log(obj.hasOwnProperty('a')); // false (unexpected!)
✅ Safe workaround using Object.prototype.hasOwnProperty.call():
console.log(Object.prototype.hasOwnProperty.call(obj, 'a')); // true
🔸 Key Differences Summary
Feature	Object.hasOwn()	obj.hasOwnProperty()
Introduced in	ES2022	Legacy (ES3)
Inheritance safe	✅ Yes	❌ No (can be overridden)
Works with Object.create(null)	✅ Yes	❌ No
Preferred for new code	✅ Yes	⚠️ Only if you control the object

✅ Recommendation:
Use Object.hasOwn(obj, key) for cleaner and safer modern code.

Let me know if you want a polyfill or compatibility fallback!
