create table user (
    id varchar(20) primary key,
    password varchar(8) not null,
    name varchar(30) not null,
    email varchar(30) not null
);

insert into user(id, password, name, email)
values('admin', '1234', '싸피', 'ssafy@s.com');

select * from user;