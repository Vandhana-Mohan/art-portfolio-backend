
\c art_dev;

INSERT INTO userData (name, about_artist, profession, location, instagram, facebook, tik_tok)
VALUES ('Ana', 'I like to draw, dance, gardening', 'artist', 'India', 'https://www.instagram.com/vandhanamohan/', 'https://www.instagram.com/kayrod/', 'https://www.instagram.com/kayrod/');

INSERT INTO collections (user_id, title, description, theme, collection_name) 
VALUES (1, 'scribble', 'rough draw', 'nature', 'nature');


INSERT INTO artworks (collection_id, title, price, is_for_sale, description, image_url, medium)
VALUES (1, 'scribble', 3000.00, true, 'love this art', 'https://hips.hearstapps.com/hmg-prod/images/close-up-of-apple-against-white-background-royalty-free-image-1627315766.jpg', 'pencil');
