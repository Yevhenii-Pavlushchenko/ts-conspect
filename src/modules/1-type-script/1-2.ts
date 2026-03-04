//!Generics у структурах даних

import axios from "axios";

// interface List < T > {
//   items: T[];
//   getItem: (index: number) => T;
// }

// const numberList: List<number> = {
//   items: [1, 2, 3],
//   getItem(index) {
//     return this.items[index];
//   },
// };
// console.log("🚀 ~ numberList:", numberList.getItem(0))

// const stringList: List<string> = {
//   items: ['Alice', 'Bob'],
//   getItem(index) {
//     return this.items[index];
//   },
// };
// console.log("🚀 ~ stringList:", stringList.getItem(0))

// function getLastItem<T>(arr: T[]): T {
//  return arr[arr.length - 1];
// }

// const lastColor = getLastItem(["red", "green", "blue"]);
// console.log("🚀 ~ lastColor:", typeof (lastColor))


//!Типізація промісів
const getData = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello, TypeScript!"), 3000);
  });
};

getData().then((result) => console.log(result)); // "Hello, TypeScript!"

// interface User {
//   id: number;
//   name: string;
// }

// const getUser = (): Promise<User> => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve({ id: 1, name: "Alice" }), 1000);
//   });
// }

// getUser().then((user) => console.log(user.name)); // "Alice"
// //Тут Promise<User> означає, що Promise виконається з об'єктом типу User.

// //І, звичайно, якщо потрібно типізувати проміс із масивом:
// const getUsers = (): Promise<User[]> => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve([
//       { id: 1, name: "Alice" },
//       { id: 2, name: "Bob" }
//     ]), 1000);
//   });
// };

// getUsers().then((users) => console.log(users[0].name)); // "Alice"

//!Типізація fetch
interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("https://api.example.com/users");
  const data = await response.json() as User[];
  return data;
};
console.log("🚀 ~ fetchUsers ~ fetchUsers:", fetchUsers)


//!Типізація GETзапитів з Axios
const fetchUser = async (userId: number): Promise<User> => {
  const response = await axios.get<User>(
	  `https://api.example.com/users/${userId}`
	);
  return response.data;
};
console.log("🚀 ~ fetchUser ~ fetchUser:", fetchUser)



