insert into products(name, category, price, stock, sku, description)
values
('Wireless Mechanical Keyboard', 'Electronics', 129.99, 25, 'ELEC-KB-101', 'Compact wireless mechanical keyboard with tactile switches and backlight.');


select * from products 
where sku = 'HOME-WB-003';