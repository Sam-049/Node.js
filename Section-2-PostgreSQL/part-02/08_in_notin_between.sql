
--< IN - value must match one item from the list
--< NOY IN -value must not match any item from the list
--< BETWEEN - value must be within the range

select name, category, price
from products
where category in ('Electronics', 'Home & Kitchen');


select name, category, price
from products
where category not in ('Electronics', 'Home & Kitchen');


select name, category, price
from products
where price BETWEEN 50 and 200;
-- here 50 and 200 is included


select name, category, price
from products
where category in ('Electronics', 'Fitness')
and price between 50 and 250