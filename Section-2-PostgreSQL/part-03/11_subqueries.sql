 --- one query inside another 
 -- in this case the inside query will resolve first and its results will be used in the outer query


select title, status, views from posts
where views > (select avg(views) from posts)
order by views desc;