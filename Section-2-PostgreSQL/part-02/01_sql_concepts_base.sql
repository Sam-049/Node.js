create extension if not exists pgcrypto;

drop table if exists products;

create table products(
    id UUID primary key default gen_random_uuid(),
    name text not null,
    category text not null,
    price numeric(10,2) not null check (price >=0),
    stock integer not null default 0 check(stock >=0),
    is_Active boolean default true,
    sku text unique,
    description text,
    created_at timestamp not null default now()
);


insert into products(name, category, price, stock, is_Active, sku, description)
values
('Wireless Noise-Canceling Headphones', 'Electronics', 199.99, 45, true, 'ELEC-HD-001', 'Over-ear Bluetooth headphones with 30-hour battery life.'),
('Ergonomic Mechanical Keyboard', 'Electronics', 129.50, 20, true, 'ELEC-KB-002', 'Compact 75% layout with tactile brown switches and RGB backlight.'),
('Stainless Steel Water Bottle', 'Home & Kitchen', 24.00, 150, true, 'HOME-WB-003', 'Double-wall vacuum insulated 32oz bottle, keeps drinks cold for 24 hours.'),
('Organic Cotton Crewneck T-Shirt', 'Apparel', 29.99, 80, true, 'APRL-TS-004', 'Breathable heavyweight 100% organic cotton tee in navy blue.'),
('Ceramic Pour-Over Coffee Dripper', 'Home & Kitchen', 18.50, 0, false, 'HOME-CF-005', 'Handcrafted ceramic dripper for brewing single-cup specialty coffee.'),
('Adjustable Dumbbell Set', 'Fitness', 249.00, 12, true, 'FITN-DB-006', 'Space-saving adjustable weights ranging from 5 to 52.5 lbs.');

select * from products;