# Utility Package

This is a simple utility package for JavaScript that provides various useful functions commonly needed in development.

## Installation

You can install this package via npm:

```bash
npm install utility-package
```

## Usage

```javascript
const UtilityPackage = require('utility-package');

// Check if a number is even
console.log(UtilityPackage.isEven(4)); // Output: true

// Check if a number is odd
console.log(UtilityPackage.isOdd(5)); // Output: true

// Generate a random integer between 1 and 10
console.log(UtilityPackage.getRandomInt(1, 10)); // Output: (random integer)

// Capitalize the first letter of a string
console.log(UtilityPackage.capitalize('hello')); // Output: Hello

// Reverse a string
console.log(UtilityPackage.reverseString('world')); // Output: dlrow
```

## Functions

- `isEven(num)`: Checks if a number is even.
- `isOdd(num)`: Checks if a number is odd.
- `getRandomInt(min, max)`: Generates a random integer between a minimum and maximum value.
- `capitalize(str)`: Capitalizes the first letter of a string.
- `reverseString(str)`: Reverses a string.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

