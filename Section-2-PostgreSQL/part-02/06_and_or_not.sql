--# AND --> every consition must be true
--# OR --> atleat one of the condition must be true
--# NOT --> exclude the condition



select name, category, price
from products
where category ='Electronics' and price >= 100;


select name, category, price
from products
where category ='Electronics' or category ='Apparel';


-- select category from products

select name, category, price
from products
where not category ='Electronics';



select name, category, price, stock
from products
where (category ='Electronics' or category ='Home & Kitchen')
and stock =0;