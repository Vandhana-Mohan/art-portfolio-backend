
DROP DATABASE IF EXISTS art_dev;

CREATE DATABASE art_dev;

 \c art_dev;

CREATE TABLE userData (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    about_artist TEXT,
    profession TEXT,
    location VARCHAR(255),
    theme VARCHAR(255),
    collection_name TEXT,
    price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
    is_for_sale BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



