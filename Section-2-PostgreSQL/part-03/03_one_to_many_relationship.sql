--- meaning is -> one parent rows can have multiple child rows
--* in  our case - one user can have multiple posts
--*                one posts belongs to one user

--> here --> users table is parent and posts table is child 

--* posts.user_id would be  user.id

-- show all post with the users
select 
users.name as author_name,
posts.title as post_title,
posts.status
from  users
inner join posts
on users.id = posts.user_id
order by users.name, posts.title;