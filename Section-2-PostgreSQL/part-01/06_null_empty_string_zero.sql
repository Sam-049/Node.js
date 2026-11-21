-- null -> unknwon / missing values
-- empty string ->> known but contains 0 characters
-- zero -> actual numeric value of 0

drop table if exists basics.value_example;

create table basics.value_example(
    id serial primary key,
    nickname text,
    bio text,
    score integer
);

insert into basics.value_example(nickname, bio, score)
values
(null, 'learning postgresSQL', 10),
('', 'empty nickname', 20),
('sameer', '', 0),
('john', null, null);

select * from basics.value_example;

select  * from basics.value_example
where nickname = '';

select  * from basics.value_example
where nickname is null;

select  * from basics.value_example
where nickname is not null;