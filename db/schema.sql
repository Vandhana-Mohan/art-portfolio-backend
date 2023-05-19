
DROP DATABASE IF EXISTS art_dev;

CREATE DATABASE art_dev;

 \c art_dev;

CREATE TABLE aboutUser (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    about_artist TEXT,
    profession TEXT,
    location VARCHAR(255) NOT NULL,
    instagram TEXT,
    facebook TEXT,
    tik_tok TEXT,
    youtube TEXT
);

CREATE TABLE collections (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES aboutUser (id),
    title VARCHAR(255),
    description TEXT,
    theme VARCHAR(255) NOT NULL,
    collection_name TEXT NOT NULL,
    image_url TEXT,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    collection_id INTEGER REFERENCES collections (id),
    title VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
    is_for_sale BOOLEAN DEFAULT false,
    description TEXT,
    image_url TEXT NOT NULL,
    medium VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);