--> limit - how many rows we want to be returned
--> offset - hw many rows we want to skip

select name, price
from products
order by name asc
limit 5;

--@ PAGE -01
select name, price
from products
order by name desc
limit 5 offset 0;

--@ PAGE -02
select name, price
from products
order by name desc
limit 5 offset 5;