create extension if not exists pgcrypto;

drop table if exists post_tags;
drop table if exists comments;
drop table if exists posts;
drop table if exists tags;
drop table if exists users;



create table users (
    id uuid primary key default gen_random_uuid(),
    name text not null
);

create table posts(
    id uuid primary key default gen_random_uuid(),

    user_id uuid not null references users(id), --> foreign key establising relaton between user and posts
    title text not null,
    status text not null default 'draft' check (status in ('draft', 'published')),
    views integer not null default 0 check (views >=0)
);

create table comments(
    id uuid primary key default gen_random_uuid(),

    post_id uuid not null references posts(id),  --> foreign key establising relaton between comments and posts
    body text not null
);

create table tags(
    id uuid primary key default gen_random_uuid(),

    name text not null unique
);

create table post_tags(
    post_id uuid not null references posts(id),
    tag_id uuid not null references tags(id),

    primary key(post_id, tag_id)   --> composite key assuring that one tag should not be repeated
);


------------------------------------------------------------------------------------------------------------------------------------>
------------------------------------------------------------------------------------------------------------------------------------>
--@ Inserting data into tables one by one

WITH inserted_users AS (
    INSERT INTO users (name)
    VALUES
        ('Aarav Sharma'),
        ('Priya Nair'),
        ('Rohan Deshmukh'),
        ('Ananya Iyer'),
        ('Vikramaditya Rao')
    RETURNING id, name
),

inserted_posts AS (
    INSERT INTO posts (user_id, title, status, views)
    VALUES
        ((SELECT id FROM inserted_users WHERE name = 'Aarav Sharma'),
         'Top 10 Street Food Spots in Old Delhi',
          'published',
           1420
        ),

        ((SELECT id FROM inserted_users WHERE name = 'Aarav Sharma'),
         'Weekend Road Trip from Bengaluru to Coorg',
          'draft',
           0
        ),

        ((SELECT id FROM inserted_users WHERE name = 'Priya Nair'),
         'Mastering Filter Coffee at Home: A Kumbakonam Guide',
          'published',
           890
        ),

        ((SELECT id FROM inserted_users WHERE name = 'Rohan Deshmukh'),
         'Scaling UPI Microservices with PostgreSQL',
          'published',
           3250
        ),

        ((SELECT id FROM inserted_users WHERE name = 'Ananya Iyer'),
         'Monsoon Treks in the Western Ghats',
          'published',
           640
        ),

        ((SELECT id FROM inserted_users WHERE name = 'Vikramaditya Rao'),
         'Understanding Mutual Fund SIPs for Beginners',
          'draft',
           15
        )
    RETURNING id, title
),

inserted_tags AS (
    INSERT INTO tags (name)
    VALUES
        ('Food & Culinary'),
        ('Travel India'),
        ('Tech & Engineering'),
        ('Finance'),
        ('Lifestyle')
    RETURNING id, name
),

inserted_comments AS (
    INSERT INTO comments (post_id, body)
    VALUES
        ((SELECT id FROM inserted_posts WHERE title = 'Top 10 Street Food Spots in Old Delhi'),
         'Paranthe Wali Gali is an absolute must-visit! Great list.'
         ),

        ((SELECT id FROM inserted_posts WHERE title = 'Top 10 Street Food Spots in Old Delhi'),
         'You missed adding Jalebi Wala near Chandni Chowk.'
         ),

        ((SELECT id FROM inserted_posts WHERE title = 'Mastering Filter Coffee at Home: A Kumbakonam Guide'),
         'Using a brass davara-tumbler really changes the aroma.'
         ),

        ((SELECT id FROM inserted_posts WHERE title = 'Scaling UPI Microservices with PostgreSQL'),
         'Super helpful breakdown on connection pooling and indexing!'
         ),

        ((SELECT id FROM inserted_posts WHERE title = 'Scaling UPI Microservices with PostgreSQL'),
         'Could you do a follow-up post on partitioning high-volume tables?'
         ),

        ((SELECT id FROM inserted_posts WHERE title = 'Monsoon Treks in the Western Ghats'),
         'Rajmachi and Kudremukh during July are breathtaking.'
         )
    RETURNING id
)

INSERT INTO post_tags (post_id, tag_id)
VALUES
    -- Old Delhi Street Food -> Food & Culinary, Travel India
    ((SELECT id FROM inserted_posts WHERE title = 'Top 10 Street Food Spots in Old Delhi'), --> post_id
     (SELECT id FROM inserted_tags WHERE name = 'Food & Culinary')), --> tag_id


    ((SELECT id FROM inserted_posts WHERE title = 'Top 10 Street Food Spots in Old Delhi'),
     (SELECT id FROM inserted_tags WHERE name = 'Travel India')), 


    ((SELECT id FROM inserted_posts WHERE title = 'Weekend Road Trip from Bengaluru to Coorg'),
     (SELECT id FROM inserted_tags WHERE name = 'Travel India')),


    ((SELECT id FROM inserted_posts WHERE title = 'Weekend Road Trip from Bengaluru to Coorg'),
     (SELECT id FROM inserted_tags WHERE name = 'Lifestyle')),


    ((SELECT id FROM inserted_posts WHERE title = 'Mastering Filter Coffee at Home: A Kumbakonam Guide'),
      (SELECT id FROM inserted_tags WHERE name = 'Food & Culinary')),


    ((SELECT id FROM inserted_posts WHERE title = 'Mastering Filter Coffee at Home: A Kumbakonam Guide'),
     (SELECT id FROM inserted_tags WHERE name = 'Lifestyle')),


    ((SELECT id FROM inserted_posts WHERE title = 'Scaling UPI Microservices with PostgreSQL'),
      (SELECT id FROM inserted_tags WHERE name = 'Tech & Engineering')),


    ((SELECT id FROM inserted_posts WHERE title = 'Scaling UPI Microservices with PostgreSQL'),
     (SELECT id FROM inserted_tags WHERE name = 'Finance')),


    ((SELECT id FROM inserted_posts WHERE title = 'Monsoon Treks in the Western Ghats'),
      (SELECT id FROM inserted_tags WHERE name = 'Travel India')),


    ((SELECT id FROM inserted_posts WHERE title = 'Understanding Mutual Fund SIPs for Beginners'),
     (SELECT id FROM inserted_tags WHERE name = 'Finance'));
    
    

select 'All data successfully inserted in all tables.' as message;