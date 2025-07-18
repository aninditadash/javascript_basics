import {
  correctURLPromise,
  correctURLPromiseAsync,
  incorrectURLPromise,
} from "../../src/promises_async_await/promises";

const productsList = [
  {
    name: "baked beans",
    price: 0.4,
    image: "beans.jpg",
    type: "vegetables",
  },
  {
    name: "hot dogs",
    price: 1.99,
    image: "hotdogs.jpg",
    type: "meat",
  },
  {
    name: "spam",
    price: 2.85,
    image: "spam.jpg",
    type: "meat",
  },
];

beforeEach(() => {
  // Mock the global.fetch function before each test
  jest.spyOn(global, "fetch").mockResolvedValue({
    ok: true,
    status: 200,
    json: () => Promise.resolve({ data: productsList }),
  });
});
afterEach(() => {
  // Restore the original global.fetch after each test
  jest.restoreAllMocks();
});

test("correctURLPromiseAsync returns expected data", async () => {
  const mockFetch = [
    {
      name: "refried beans",
      price: 0.99,
      image: "refried.jpg",
      type: "vegetables",
    },
  ];
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve({ data: mockFetch }),
    })
  );
  const result = await correctURLPromiseAsync();
  console.log(result);
});

test("correctURLPromise returns expected data", async () => {
  const result = await correctURLPromise();
  console.log(result);
});

test("incorrectURLPromise returns expected data", async () => {
  global.fetch = jest.fn(() =>
    Promise.reject({
      ok: true,
      status: 404,
      json: () => Promise.reject(),
    })
  );
  const result = await incorrectURLPromise();
  console.log(result);
});
