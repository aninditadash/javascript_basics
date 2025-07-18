import { fetchAllUsers } from "../../src/promises_async_await/axios_rest_api";
import * as axios from "axios";

jest.mock("axios");

const usersList = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: [Object],
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
];

test("fetchAllUsers returns expected data", async () => {
  axios.get.mockImplementation(() => Promise.resolve({ data: usersList }));
  const result = await fetchAllUsers();
  console.log(result);
});

test("fetchAllUsers fails with network error", async () => {
  axios.get.mockImplementation(() => Promise.reject({}));
  const result = await fetchAllUsers();
  console.log(result);
});
