--> order by used to sort things in a particular proder

-- select name, price
-- from products 
-- order by price asc;

-- select name, price
-- from products 
-- order by price desc;

-- we can sort multiple columns
select name, category, price
from products
order by category asc, price desc;