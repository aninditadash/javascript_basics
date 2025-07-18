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
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: [Object],
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

const postsList = [
  {
    userId: 9,
    id: 90,
    title: "ad iusto omnis odit dolor voluptatibus",
    body:
      "minus omnis soluta quia\n" +
      "qui sed adipisci voluptates illum ipsam voluptatem\n" +
      "eligendi officia ut in\n" +
      "eos soluta similique molestias praesentium blanditiis",
  },
  {
    userId: 10,
    id: 91,
    title: "aut amet sed",
    body:
      "libero voluptate eveniet aperiam sed\n" +
      "sunt placeat suscipit molestias\n" +
      "similique fugit nam natus\n" +
      "expedita consequatur consequatur dolores quia eos et placeat",
  },
];

const postsListByUserID = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];

export const fetchAllUsers = () => {
  console.log("Calling mocked fetchAllUsers");
  return Promise.resolve(usersList);
};

export const fetchAllPosts = () => {
  return Promise.resolve(postsList);
};

export const fetchPostByUserID = () => {
  return Promise.resolve(postsListByUserID);
};
