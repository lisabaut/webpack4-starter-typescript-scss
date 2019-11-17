// add your TypeScript Code here

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person): string {
  return 'Glad to meet you, ' + person.firstName + ' ' + person.lastName;
}

const user = { firstName: 'Jane', lastName: 'User Name' };

const paragraph = document.createElement('p');
paragraph.textContent = greeter(user);
document.body.appendChild(paragraph);
