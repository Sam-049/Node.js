 --- returns all the rows from the first table that we use including the common rows

-- posts -> left table
-- comments -> right table

--because  not every posts is going to have comments
-- some posts will have 100 comments and some will have 0

select 
posts.title as posts_title,
comments.body as comment_body
from 
posts left join comments  --* each posts with its comments
on posts.id = comments.post_id
order by posts.title