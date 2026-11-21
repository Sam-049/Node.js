-- group by creates groups of rows

--- likw where filters the rows before grouping
--- similarly having filters after grouping

--> Find authors who have atleats 2 posts:

select
u.name as author_name,
count(p.id) as total_posts,
sum(p.views) as total_views
from users as u 
left join posts as p
on u.id = p.user_id
group by u.id, u.name
having count(p.id) >= 1
order by total_posts desc;