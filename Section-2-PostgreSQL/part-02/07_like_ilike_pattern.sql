--> LIKE - case sensitive pattern match
--> ILIKE - case insensitive pattern match
--> % - any number of characters
--> - exactly one character


-- select * from products;

--@ we want name anything starting with wireless
select name, price
from products where name like 'wireless%';

--@ we want name anything starting with wireless where pattern is case insensitive
select name, price
from products where name ilike '%Coffee%';

--@ combining it with AND OR
select name, category, description
from products
where name ilike '%curved%'
or description ilike '%100%'
