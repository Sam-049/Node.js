-- old data
-- select name, price, stock, sku
-- from products
-- where sku = 'HOME-WB-003';

update products
set price = 29.99,
stock = 100
where sku = 'HOME-WB-003';

-- updated data
select name, price, stock, sku
from products
where sku = 'HOME-WB-003';