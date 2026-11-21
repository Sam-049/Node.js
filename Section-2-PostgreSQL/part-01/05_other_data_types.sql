drop table if exists basics.app_events;

create table basics.app_events(
    --UUID 
    id UUID primary key default gen_random_uuid(),
    event_name text not null,
    --json
    metadata JSONB default '{}'::jsonb,
    created_at timestamp default now()
);

insert into basics.app_events (event_name, metadata)
values
(
    'signup',
    '{"browser":"Chrome"}'
),
(
    'signin',
    '{"username":"Sameer"}'
);

select * from basics.app_events;

select
    event_name, 
    metadata ->> 'browser' as browser
from basics.app_events
where metadata ? 'browser';