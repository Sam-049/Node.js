--old data
select name, category, price, is_Active
from products
where category = 'Home & Kitchen';


-- update all the price by 10% in th e hme & kitchen category
update products
set price = round(price * 1.10,2)
where category = 'Home & Kitchen';

--updated price data
select name, category, price, is_Active
from products
where category = 'Home & Kitchen';


--> if we want to mark outof stock is active false

update products
set is_Active = false
where stock = 0;