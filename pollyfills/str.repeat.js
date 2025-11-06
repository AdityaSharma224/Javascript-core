if (!String.prototype.repeat) {
  String.prototype.repeat = function(count) {
    // Step 1: Convert to string
    if (this == null) {
      throw new TypeError("Can't call repeat on null or undefined");
    }

    let str = String(this);
    count = Number(count);

    // Step 2: Validate count
    if (isNaN(count) || count < 0) {
      throw new RangeError("Repeat count must be non-negative");
    }
    if (count === Infinity) {
      throw new RangeError("Repeat count must be less than infinity");
    }

    // Step 3: Floor count (handles fractional numbers)
    count = Math.floor(count);

    // Step 4: Edge case
    if (str.length === 0 || count === 0) return "";

    // Step 5: Efficient concatenation (avoid simple loop)
    let result = "";
    while (count > 0) {
      if (count % 2 === 1) result += str;
      if (count > 1) str += str; // double each time for performance
      count = Math.floor(count / 2);
    }

    return result;
  };
}
