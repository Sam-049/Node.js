-- counts the distinct value

--> count tall the number of posts connected to each tag

select t.name as tag_name,
count(distinct p.id) as total_unique_posts
from tags as t
left join post_tags as pt 
on t.id = pt.tag_id
left join posts as p 
on pt.post_id = p.id 
group by t.id, t.name
order by total_unique_posts desc;