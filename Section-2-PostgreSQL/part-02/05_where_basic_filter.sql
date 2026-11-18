-- let say we need to get the data of the products which are electronice only
-- i.e -> /products?category=Electronics

select name, category, price
from products
where category = 'Electronics';

-- find products more than 1000

select name, price
from products
where price >= 200;

-- products which are not active


select name, is_Active
from products
where is_Active = false;