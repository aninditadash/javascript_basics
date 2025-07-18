let users = [],
  posts = [];

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export async function fetchAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    users = data;
    console.log("Users fetched successfully: ", data);
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

export const fetchAllPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      posts = data;
      console.log("Posts fetched successfully: ", data);
      return data;
    })
    .catch((error) => {
      console.error("Error fetching posts: ", error);
    });
};

// Fetch a post by post ID - Returns an array
// Sending data in a GET request (get a post by POST ID)
export const fetchPostByIDWithParams = async (id) => {
  const baseUrl = "https://jsonplaceholder.typicode.com/posts";
  const params = {
    id,
  };

  // Create a URL object
  const url = new URL(baseUrl);
  // Add parameters to the URL using URLSearchParams
  url.search = new URLSearchParams(params).toString();
  console.log("Search URL: ", url);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    posts = data;
    console.log(`Post fetched successfully (post id = ${id}): `, data);
  } catch (error) {
    console.error("Error fetching post: ", error);
  }
};

// Fetch a post by post ID - Returns an object
export const fetchPostByID = async (postId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    posts = data;
    console.log(`Post fetched successfully (post id = ${postId}): `, data);
  } catch (error) {
    console.error("Error fetching post: ", error);
  }
};

export async function createPost() {
  try {
    await sleep(2);
    const postObj = {
      title: "Hello JavaScript",
      body: "This is a POST request from JS",
      userId: users.length > 0 && users[0].id,
    };
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(postObj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Post created successfully: ", data);
    updatePost(posts[0]);
  } catch (error) {
    console.error("Error creating a post:", error);
  }
}

export const updatePost = async (post) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json; charset=UTF-8");

  try {
    await sleep(500);
    console.log("Updating post ", post);
    const updatedObj = {
      ...post,
      title: "Hello JavaScript and ECMAScript",
      body: "This is a POST request from JS world",
    };
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`,
      {
        method: "PUT",
        body: JSON.stringify(updatedObj),
        headers: myHeaders,
      }
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Post updated successfully: ", data);
    partiallyUpdatePost(posts[1]);
  } catch (error) {
    console.error("Error updating a post:", error);
  }
};

export const partiallyUpdatePost = async ({ id }) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json; charset=UTF-8");

  try {
    await sleep(500);
    console.log("Patching post with id: ", id);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          title: "Hello JavaScript and ECMAScript",
          body: "This is a POST request from JS world",
        }),
        headers: myHeaders,
      }
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Post updated (partial) successfully: ", data);
    deletePost(posts[2]);
  } catch (error) {
    console.error("Error patching a post:", error);
  }
};

export const deletePost = async ({ id }) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json; charset=UTF-8");

  try {
    await sleep(500);
    console.log("Deleting post with id: ", id);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
        headers: myHeaders,
      }
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Post deleted successfully!!", data);
  } catch (error) {
    console.error("Error deleting a post:", error);
  }
};

// Fetch a post by user ID
export const fetchPostByUserID = async (userId) => {
  const baseUrl = "https://jsonplaceholder.typicode.com/posts";
  const params = {
    userId,
  };

  // Create a URL object
  const url = new URL(baseUrl);
  // Add parameters to the URL using URLSearchParams
  url.search = new URLSearchParams(params).toString();
  console.log("Search URL: ", url);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(`Posts fetched successfully (user id = ${userId}): `, data);
    return data;
  } catch (error) {
    console.error("Error fetching post: ", error);
  }
};
