# this steps after installation
-npm init
-[npm i @faker-js/faker](for_faker_data);
-index.js
 `
const { faker } = require('@faker-js/faker');

export function createRandomUser(): User {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}


`
-[node index.js](to_run) 
-[npm i mysql2](install_mysql2 )
-["C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p](this_isfor_sql)
-terminal open then type(show database;)

`const q="INSERT INTO user (id,name,email,password) VALUES(?,?,?,?)";
let user =["1","praneeth","praneth11@gmail.com","praneeth12"];
`
- this is for single dat insertion 
`
const q="INSERT INTO user (id,name,email,password) VALUES ?";
let users=[["1","praneeth","praneth11@gmail.com","praneeth12"],
["1","praneeth","praneth11@gmail.com","praneeth12"]
];
`
- and this is for insertion data for the multiple users