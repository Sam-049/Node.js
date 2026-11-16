-- rules enforced on a table to limit the type of data that can be stored.
-- like not null, default, check, unique

--- and these constraimnts are always better than backend va;idation. Its string when we have 2 things complimenting eachother

drop table if exists basics.accounts;

create table basics.accounts(
    id serial primary key,
    full_name text not null,
    email text not null unique,
    is_active boolean default true,
    age integer check (age >= 18),
    created_at timestamp default now()
);

insert into basics.accounts (full_name, email, age)
values
('Sameer Mohanty', 'asm123@gmail.com', 27);

-- select * from from basics.accounts;


---invalid cases;
-- insert into basics.accounts (email, age)
-- values
-- ('missing-email@gmail.com', 27);

---ERROR:  null value in column "full_name" of relation "accounts" violates not-null constraint

-- insert into basics.accounts (full_name, email, age)
-- values
-- ('Duplicate Mohanty', 'asm123@gmail.com', 25);

---ERROR:  duplicate key value violates unique constraint "accounts_email_key"

-- insert into basics.accounts (full_name, email, age)
-- values
-- ('gdbrn Mornryntryhhanty', 'sdfsgfb@gmail.com', 2);

---ERROR:  new row for relation "accounts" violates check constraint "accounts_age_check"