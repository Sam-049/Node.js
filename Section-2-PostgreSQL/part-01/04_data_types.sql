drop table if exists basics.product_basics;

create table basics.product_basics(
    id serial primary key,
    name varchar(50) not null, --string datatype of max length of 20 characters
    description text, -- noral string
    stock integer default 0, -- can store only whole numbers not decimal
    total_views bigint default 0, -- can store large integer
    price numeric(10,2), -- useful for decimal values 10 is the total digits and 2 means after the decimal point 99999.99
    is_active boolean default true
);

-- queries

insert into basics.product_basics(name, description,stock, total_views, price, is_active)
values
('product 1','product desc 1',100, 1200, 45000.45, true),
('product 2','product desc 2',150, 1500, 1999.99, true),
('product 3','product desc 3',25, 222, 4449.49, false);

select * from basics.product_basics;

select id, name, price
from basics.product_basics
where is_active;