--uniquely identifies each row in a database table. Its a combination of both UNIQUE and NOT NULL rules

drop table if exists basics.sales;

create table basics.sales (
    id serial primary key,
    title text not null,
    price numeric(10,2) not null default 0.00,
    created_at timestamp default now()
);

insert into basics.sales(title, price)
values('sale 1', 100),
('sale 2', 50),
('sale 3', 25);

select * from basics.sales;

select * from basics.sales where id = 2;

-- if we want to give already exisitng id which is a primary key and carries the unique and not null rules with itself
-- insert into basics.sales(id, title, price)
-- values(2, 'sale 1', 100);
---ERROR:  duplicate key value violates unique constraint "sales_pkey"