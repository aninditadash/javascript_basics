const createRangeIterator = (start, end) => {
  let current = start;
  return {
    next() {
      if (current <= end) {
        return { value: current++, done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
};

function* generateRange(start, end) {
  for (let i = start; i <= end; i++) {
    yield i; // Pauses execution and returns 'i'
  }
}

const myRange = createRangeIterator(1, 3);

console.log('createRangeIterator: ', myRange.next()); // { value: 1, done: false }
console.log('createRangeIterator: ', myRange.next()); // { value: 2, done: false }
console.log('createRangeIterator: ', myRange.next()); // { value: 3, done: false }
console.log('createRangeIterator: ', myRange.next()); // { value: undefined, done: true }

const myGenerator = generateRange(1, 3);

console.log('myGenerator: ', myGenerator.next()); // { value: 1, done: false }
console.log('myGenerator: ', myGenerator.next()); // { value: 2, done: false }
console.log('myGenerator: ', myGenerator.next()); // { value: 3, done: false }
console.log('myGenerator: ', myGenerator.next()); // { value: undefined, done: true }
console.log('myGenerator: ', myGenerator.next()); // { value: undefined, done: true }

console.log('================================================');

function* numGenerator() {
  yield 10;
  yield 20;
  yield 30;
}
const num_generator = numGenerator();
console.log(num_generator.next().value);
console.log(num_generator.next().value);
console.log(num_generator.next().value);
console.log(num_generator.next().value);

const colors = ['red', 'green', 'blue'];
const color_iterator = colors[Symbol.iterator]();
console.log(color_iterator.next());
console.log(color_iterator.next());
console.log(color_iterator.next());
console.log(color_iterator.next());
