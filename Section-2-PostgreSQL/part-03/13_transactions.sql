--- multiple sql statment run as one safe unit 

begin;

update posts 
set status = 'published'
where title = 'Understanding Mutual Fund SIPs for Beginners'
and status = 'draft'

update posts
set views = views + 50
where title = 'Understanding Mutual Fund SIPs for Beginners'

select title, status, views 
from posts where title = 'Understanding Mutual Fund SIPs for Beginners'

commit;