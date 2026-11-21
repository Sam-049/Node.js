--- one posts can have multiple tags and 
--- one tags cab appear in multiple posts

--* posts.id = post_tags.post_id
--* tags.id = post_tags.tag_id

--> show me every posts with its tag

select
 posts.title as posts_title,
 tags.name as tag_name
from posts
inner join post_tags
on posts.id = post_tags.post_id
inner join tags
on post_tags.tag_id = tags.id
order by posts.title, tags.name;