--- it always going to calculate giving a single value from multiple rows
--* count(), sum(), avg(), max(), min()
--> like repost or analysis kimd of thing


select count(*) as total_posts
from posts;

select count(*) 
filter(where status = 'draft') as published_posts
from posts;


select sum(views) as total_views,
avg(views) as avg_views,
max(views) as max_views,
min(views) as min_views
from posts;