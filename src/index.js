// utility-package.js

const UtilityPackage = {
    // Function to check if a number is even
    isEven: function(num) {
      return num % 2 === 0;
    },
  
    // Function to check if a number is odd
    isOdd: function(num) {
      return num % 2 !== 0;
    },
  
    // Function to generate a random integer between min and max
    getRandomInt: function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  
    // Function to capitalize the first letter of a string
    capitalize: function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  
    // Function to reverse a string
    reverseString: function(str) {
      return str.split('').reverse().join('');
    }
  };
  
  module.exports = UtilityPackage;
  
