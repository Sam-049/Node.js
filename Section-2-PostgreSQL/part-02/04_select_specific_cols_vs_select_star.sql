-- select * from products

select name, category, price, stock
from products;

--aliases is helpful for the output of that column name also makes it easier to read when the output comes

select name as products_name,
price as selling_price,
stock as avaialability
from products