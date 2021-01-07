var mneumonics = ['My Very Excellent Mother Just Sent Me Nine Pizzas', 'Please Excuse My Dear Aunt Sally', 'Every Good Boy Does Fine'];

// Write some code using map that takes the above array of mneumonics, and returns a two dimensional array.
// For example, the 0th element of the new array should be:
// ['My', 'Very', 'Excellent', 'Mother', 'Just', 'Sent', 'Me', 'Nine', 'Pizzas']

// Your code here!
// Map returns an array.
// A more specific/defined version of forEach in that instead of doing the same thing for each element in an array, you return an array of what happens after you do the same function to each element.

const split = (string) => {
    return string.split(' ')
}

const mnemonicsMap = mneumonics.map(split)

console.log(mnemonicsMap)