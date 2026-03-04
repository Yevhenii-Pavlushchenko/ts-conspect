// let age: number = "Jacob"; 
// // ❌ Error: Type 'string' is not assignable to type 'number'

// age = true; 
// // ❌ Error: Type 'boolean' is not assignable to type 'number'
// console.log(age);
// example.ts

// const message: string = "Hello, TypeScript!";
// console.log(typeof(message));

// let age = 26; // TypeScript виводить тип як number
// console.log("🚀 ~ age:", age)

// ❌ Error: Type 'string' is not assignable to type 'number'

// let isOnline = false; // TypeScript виводить тип як boolean
// console.log("🚀 ~ isOnline:", isOnline)

// ❌ Error: Type 'number' is not assignable to type 'boolean'

// const user: { name: string; age: number } = {
//   name: "Alice"
// };
// console.log("🚀 ~ user:", user)
// ❌ Error: Property 'age' is missing in type '{ name: string; }' 
// but required in type '{ name: string; age: number; }'.

// console.log(user.email); // Оголошуємо інтерфейс користувача
// interface User {
//   readonly id: number;
//   name: string;
//   age: number;
//   isOnline?: boolean;
// }

// Використовуємо інтерфейс для типізації
// const poly: User = {
//   id: 4,
//   name: "Poly",
//   age: 25,
//   isOnline: true
// };

// poly.id = 6;
// poly.age =18
// console.log(poly.id);


// const jacob: User = {
//   id:5,
//   name: "Jacob",
//   age: 36,
//   isOnline: false
// };

// console.log(poly,jacob);

// let res = []
// res.push(poly,jacob)
// console.log("🚀 ~ res:", res)


// const numbers = [1, 2, 3]; 
// console.log("🚀 ~ numbers:",typeof( numbers))


// const names = ["Alice", "Bob"]; 
// console.log("🚀 ~ names:", typeof(names[0]),typeof(names[1]),typeof(names[2]))

// const numbers: number[] = [1, 2, 3];
// console.log("🚀 ~ numbers:", numbers)

// numbers.push(4); // ✅ Можна додати число
// console.log("🚀 ~ numbers:", numbers)

// numbers.push("5"); 
// console.log("🚀 ~ numbers:", numbers)

// const names: string[] = ["Alice", "Bob"];

// console.log(names[0].toUpperCase()); 
// ❌ Error: Object is possibly 'undefined'.

// interface User {
//   name: string;
//   age: number;
// }

// const users: User[] = [
//   { name: "Alice", age: 25 },
//   { name: "Jacob", age: 30 }
// ];
// console.log("🚀 ~ users:", users)

// users.push({ name: "Charlie", age: 18}); 
// console.log("🚀 ~ users:", users)

// const numbers: number[] = [1, 2, 3, 4, 5];
// console.log(numbers.length);
// const doubledNumbers = numbers.map(num => num * 2); 
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// let userId: string | number = 123; // ✅
// userId = "user-456"; // ✅
// console.log("🚀 ~ userId:", userId)
// userId = false; // ❌

// Базова структура HTTP-відповіді
// interface HttpResponse {
//   status: number;
//   message: string;
// }

// Специфічна відповідь для користувача
// interface UserData {
//   id: number;
//   name: string;
//   email?: string;
// }

// Поєднання базової відповіді з даними користувача
// type UserResponse = HttpResponse & { data: UserData };

// const response: UserResponse = {
//   status: 200,
//   message: "asdadsdasdsad",
//   data: {
//     id: 1,
//     name: "Alice",
//     email:"@sdasdsdad"
//   }
  // status: 200,
  // message: "Success",
  // data: {
  //   id: 1,
  //   name: "Alice",
  //   email: "alice@example.com"
  // }
// };
// console.log("🚀 ~ response:", response)

// console.log(response.data.name); // Alice

// function greet(name: string, age: number): void {
//   console.log(`Hello, my name is ${name} and I am ${age} years old.`);
// }
// greet("Alice", 30); // ✅
// greet(25, "Alice"); 
// ❌ Error: Argument of type 'number' is not assignable to parameter of type 'string'.


// function sum(a: number, b: number): number {
  // return a + b;
// }
// const result = sum(5, 10); // ✅ result матиме тип number
// console.log("🚀 ~ result:", result)

//? Розглянемо задачу, де необхідно написати функцію, що отримує список користувачів
//? та повертає імена цих користувачів у вигляді масиву рядків. Ось як ми можемо 
//?типізувати таку функцію:

// interface User{
//   id: number
//   name: string
// }

// const getUserNames = (users: User[]): string[] => {
//   return users.map((user)=>user.name)
// } 

// const getUserId = (users: User[]): Number[] => {
//   return users.map((user)=> user.id)
// } 

// const userList: User[] = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//     {id: 3 ,name: 'Charlei'},
// ] 

// const resName = getUserNames(userList)
// console.log("🚀 ~ resName:", resName)
// const resId = getUserId(userList)
// console.log("🚀 ~ resId:", resId)

// function greet(name: string, age?: number) {
//   if (age !== undefined) {
//     console.log(`Hello, my name is ${name} and I am ${age} years old.`);
//   } else {
//     console.log(`Hello, my name is ${name}.`);
    
//   }
// }

// greet('alice', 13);
// greet("jonhy");

//!Function Type (Тип функції)

// type Addfunctions = (a: number, b: number) => number;//задаем тип функции 
// const add: Addfunctions = (x, y) => x + y;// создаем функцию add и присваиваем ей тип !
// console.log( add(2, 5 ))

function foo(x:string | number , y: string |number) {
  // return x + y
}



console.log("🚀 ~ foo ~ foo:", foo(5,7))
