create table user(
    id int primary key,
    name varchar(50) unique,
    email varchar(50) unique not null,
    password varchar(50) Not null
);
ALTER TABLE user MODIFY COLUMN id VARCHAR(36);
