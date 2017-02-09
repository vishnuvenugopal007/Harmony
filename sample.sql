  DROP TABLE IF EXISTS songs;

  CREATE TABLE songs (
    id      serial,
    title   varchar,
    artist  varchar,
    album   varchar
  );

  CREATE TABLE playlists (
    id          serial,
    name        varchar,
    created_at  timestamptz default now(),
    updated_at  timestamptz default now()
  );
