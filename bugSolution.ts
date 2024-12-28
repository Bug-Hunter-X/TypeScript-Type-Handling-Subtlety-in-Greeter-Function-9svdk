function greeter(person: string): string {
  return "Hello, "+ person + "!";
}

function isString(value: any): value is string {
  return typeof value === 'string';
}

let user = "Jane User";
console.log(greeter(user));

let user2: any = 123; // Example of a non-string value
if (isString(user2)) {
  console.log(greeter(user2));
} else {
  console.log('Error: Input is not a string');
}

//Alternative using type assertion (less safe):
//console.log(greeter(user2 as string)); //This will compile but potentially fail at runtime.