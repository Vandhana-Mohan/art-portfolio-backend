
DROP DATABASE IF EXISTS art_dev;

CREATE DATABASE art_dev;

 \c art_dev;

CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) DEFAULT 0 CHECK (price >= 0),
    is_for_sale BOOLEAN DEFAULT false,
    description TEXT,
    image_url TEXT NOT NULL,
    medium VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

