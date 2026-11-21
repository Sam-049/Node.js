-- -immediately retrieve data from the rows you just inserted without separate select query

-- insert into products(name, category, price, stock, sku, description)
-- values('webcam camera', 'electronices', 465.22, 56, 'ELEC-WEB-009','webcam camera description')
-- returning id, name, category, price, stock, created_at;

update products
set stock = stock + 10
where sku = 'ELEC-WEB-009'
returning id, name, stock;

delete from products
where sku = 'ELEC-WEB-009'
returning id, name, sku;

select name, sku
from products
where sku = 'ELEC-WEB-009';