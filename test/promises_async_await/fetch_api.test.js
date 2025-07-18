import {
  fetchAllUsers,
  fetchPostByUserID,
  fetchAllPosts,
} from "../../src/promises_async_await/fetch_api";

jest.mock("../../src/promises_async_await/fetch_api");

test("fetchAllUsers returns expected data", async () => {
  const result = await fetchAllUsers();
  console.log(result);
});

test("fetchPostByUserID returns expected data", async () => {
  const userID = 1;
  const result = await fetchPostByUserID(userID);
  console.log(result);
});

test("fetchAllPosts returns expected data", async () => {
  const result = await fetchAllPosts();
  console.log(result);
});
