 --- INNER JOIN - returns only the matching rows of both table


 select 
    users.name as author_name,
    posts.title as posts_title,
    posts.status,
    posts.views

from
    posts
inner join 
    users
on
    posts.user_id = users.id    --> this is the matching rule
where
    posts.status = 'published'
order by 
    posts.views desc;