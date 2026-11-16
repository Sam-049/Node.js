-------------------------------------------------------------------------------------------------------------------
-- A structured collecction od related data, organised into rows and columns
-------------------------------------------------------------------------------------------------------------------

DROP table if exists basics.students;

create table basics.students(
    id serial primary key, -- serial would help as auto incrementing the integer and primary key would be unique 
    name text not null, -- text is a string datatype and this field cannot be let null
    email text not null unique, -- email shouldnot be same with others
    age integer check(age>=18), -- integrer datatype and a check to verify the age is greter than 18
    created_at timestamp default now() -- timestamps store date and time, default keeps the recent time if not provided
);

-- insert some data into this table

insert into basics.students(name, email, age)
values  ('Sameer Mohanty', 'samrides310gs@gmail.com', 27),
        ('Pavitheran A R', 'paviridesxcape650@gmail.com', 28),
        ('Md Ashar', 'asharridesleionchino250@gmail.com', 24);


SELECT * FROM basics.students;