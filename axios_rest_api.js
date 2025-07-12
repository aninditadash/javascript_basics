let users = [],
  posts = [];

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function fetchAllUsers() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    users = response?.data;
    console.log("Users fetched successfully: ", users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
  }
}

fetchAllUsers();

async function fetchAllPosts() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    posts = response?.data;
    console.log("Posts fetched successfully: ", posts);
    createPost();
  } catch (error) {
    console.error("Error fetching posts: ", error.message);
  }
}

fetchAllPosts();

const fetchPostByPostID = async (postId) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?id=${postId}`
    );
    const post = response?.data;
    console.log(`Post fetched successfully (post id = ${postId}): `, post);
  } catch (error) {
    console.error("Error fetching post: ", error.message);
  }
};

// Fetch a post by post ID - Returns an array
fetchPostByPostID(1);

const fetchPostByID = async (postId) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const post = response?.data;
    console.log(`Post fetched successfully (post id = ${postId}): `, post);
  } catch (error) {
    console.error("Error fetching post: ", error.message);
  }
};

// Fetch a post by post ID - Returns an object
fetchPostByID(2);

const fetchPostByUserID = async (userId) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const data = response?.data;
    console.log(`Posts fetched successfully (user id = ${userId}): `, data);
  } catch (error) {
    console.error("Error fetching post: ", error);
  }
};

// Fetch a post by user ID
fetchPostByUserID(1);
fetchPostByUserID(2);

async function createPost() {
  try {
    await sleep(2);
    const postObj = {
      title: "Hello JavaScript",
      body: "This is a POST request from JS",
      userId: 1,
    };
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      postObj
    );
    const data = response?.data;
    console.log("Post created successfully: ", data);
    updatePost(posts[0]);
  } catch (error) {
    console.error("Error creating a post:", error);
  }
}

const updatePost = async (post) => {
  try {
    await sleep(500);
    console.log("Updating post with id: ", post?.id);
    const updatedObj = {
      ...post,
      title: "Hello JavaScript and ECMAScript",
      body: "This is a POST request from JS world",
    };
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`,
      updatedObj
    );
    const data = response?.data;
    console.log("Post updated successfully: ", data);
    partiallyUpdatePost(posts[1]);
  } catch (error) {
    console.error("Error updating a post:", error);
  }
};

const partiallyUpdatePost = async ({ id }) => {
  try {
    await sleep(500);
    console.log("Patching post with id: ", id);
    const response = await axios.patch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        title: "Hello JavaScript and ECMAScript",
        body: "This is a POST request from JS world",
      }
    );

    const data = response?.data;
    console.log("Post updated (partial) successfully: ", data);
    deletePost(posts[2]);
  } catch (error) {
    console.error("Error patching a post:", error);
  }
};

const deletePost = async ({ id }) => {
  try {
    await sleep(500);
    console.log("Deleting post with id: ", id);
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    console.log("Post deleted successfully!!", response);
  } catch (error) {
    console.error("Error deleting a post:", error);
  }
};
