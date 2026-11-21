--> null - missing value or unknown value
--< we shouldnot check null using = symbol. 
--@ it hs to be checked using IS NOT NULL or IS NOT NULL

select name, description
from products
where description is  null;

select name, description
from products
where description is not null;