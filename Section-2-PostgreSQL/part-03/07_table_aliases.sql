--- table aliases are used to give name as per convinient to make query more readable and understandable

-- posts.title as p.title
-- users.name = u.name

select p.title as posts_title,
p.status,
p.views,
u.name as author_name, 
c.body as comment_body
from posts as p
inner join users as u
on p.user_id = u.id
left join comments as c
on p.id = c.post_id
order by p.views desc;