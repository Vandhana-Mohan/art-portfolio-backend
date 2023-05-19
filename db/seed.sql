
\c art_dev;
    
INSERT INTO aboutUser (first_name, last_name, about_artist, profession, location, instagram, facebook, tik_tok, youtube) VALUES 
('Ana', 'mdds', 'I like to draw, dance, gardening', 'artist', 'India', 'https://www.instagram.com/vandhanamohan/', 'https://www.facebook.com/kayrod/', 'https://www.tiktok.com/kayrod/','https://www.youtube.com/kayrod/'),
('sana', 'vdsfds','I like to sdfsdfsdfsdf', 'architect', 'usa', 'https://www.instagram.com/vandhanamohan/', 'https://www.facebook.com/kayrod/', 'https://www.tiktok.com/kayrod/','https://www.youtube.com/kayrod/'),
('meena', 'csdfds','I like to csdvdsvsdvs', 'dance', 'uk', 'https://www.instagram.com/vandhanamohan/', 'https://www.facebook.com/kayrod/', 'https://www.tiktok.com/kayrod/','https://www.youtube.com/kayrod/'),
('sscs', 'wdsfdfdsf','I like to ssvsdsdvsd', 'sing', 'asasad', 'https://www.instagram.com/vandhanamohan/', 'https://www.facebook.com/kayrod/', 'https://www.tiktok.com/kayrod/','https://www.youtube.com/kayrod/'),
('scsc', 'evxvxc','I like to btrhtrhtrhtr', 'draw', 'dasdas', 'https://www.instagram.com/vandhanamohan/', 'https://www.facebook.com/kayrod/', 'https://www.tiktok.com/kayrod/','https://www.youtube.com/kayrod/'),
('cscsc', 'wfreferg','I like to lgekwdmlwmdwl;dqd', 'dkdsddsd', 'asdsadsa', 'https://www.instagram.com/vandhanamohan/', 'https://www.facebook.com/kayrod/', 'https://www.tiktok.com/kayrod/','https://www.youtube.com/kayrod/'),
('bfbfbf', 'werggerg','Idklwdm;lwq,d;wd', 'sdsdsdsd', 'sdsadas', 'https://www.instagram.com/vandhanamohan/', 'https://www.facebook.com/kayrod/', 'https://www.tiktok.com/kayrod/','https://www.youtube.com/kayrod/'),
('weerwrw', 'drgrhtht','knflekfeklfnlekfnmwlefmlwfmwlefwl', 'fsdfrfrefe', 'Insadsadadia', 'https://www.instagram.com/vandhanamohan/', 'https://www.facebook.com/kayrod/', 'https://www.tiktok.com/kayrod/','https://www.youtube.com/kayrod/'),
('mmkol', 'hhtrhtrh','knflekfeklfnlekfnmwlefmlwfmwlefwl', 'efwefwefw', 'sadsaasa', 'https://www.instagram.com/vandhanamohan/', 'https://www.facebook.com/kayrod/', 'https://www.tiktok.com/kayrod/','https://www.youtube.com/kayrod/');

INSERT INTO collections (user_id, title, description, theme, collection_name, image_url) VALUES 
(1, 'scribble', 'rough draw', 'nature', 'nature',''),
(2, 'apple', 'rwrweew', 'apple', 'nature','https://hips.hearstapps.com/hmg-prod/images/close-up-of-apple-against-white-background-royalty-free-image-1627315766.jpg'),
(3, 'pen', 'ewrwer', 'pen', 'nature','https://hips.hearstapps.com/hmg-prod/images/close-up-of-apple-against-white-background-royalty-free-image-1627315766.jpg'),
(4, 'pencil', 'dddfsdfsd', 'pencil', 'nature','https://hips.hearstapps.com/hmg-prod/images/close-up-of-apple-against-white-background-royalty-free-image-1627315766.jpg'),
(5, 'fruit', 'sdadada', 'fruit', 'nature','https://hips.hearstapps.com/hmg-prod/images/close-up-of-apple-against-white-background-royalty-free-image-1627315766.jpg'),
(6, 'veg', 'yjyjjyu', 'vegff', 'nature','https://hips.hearstapps.com/hmg-prod/images/close-up-of-apple-against-white-background-royalty-free-image-1627315766.jpg'),
(7, 'animal', 'scsacsacas', 'animal', 'nature','https://hips.hearstapps.com/hmg-prod/images/close-up-of-apple-against-white-background-royalty-free-image-1627315766.jpg'),
(8, 'pet', 'dvtgtgtr', 'nature', 'nature','https://hips.hearstapps.com/hmg-prod/images/close-up-of-apple-against-white-background-royalty-free-image-1627315766.jpg'),
(9, 'idk', 'wdwdwdwq', 'nature', 'nature','https://hips.hearstapps.com/hmg-prod/images/close-up-of-apple-against-white-background-royalty-free-image-1627315766.jpg'),
(1, 'efd', 'wdwfdwefe', 'nature', 'nature','https://hips.hearstapps.com/hmg-prod/images/close-up-of-apple-against-white-background-royalty-free-image-1627315766.jpg'),
(2, 'ffggf', 'fewfewfewfewf', 'nature', 'nature','https://hips.hearstapps.com/hmg-prod/images/close-up-of-apple-against-white-background-royalty-free-image-1627315766.jpg'),
(3, 'htht', 'fewfewfewfewf', 'nature', 'nature','https://hips.hearstapps.com/hmg-prod/images/close-up-of-apple-against-white-background-royalty-free-image-1627315766.jpg'),
(4, 'htyht', 'fewfewfewfewfew', 'nature', 'nature','https://hips.hearstapps.com/hmg-prod/images/close-up-of-apple-against-white-background-royalty-free-image-1627315766.jpg'),
(5, 'ththth', 'efwfwqfwqfwfwq', 'nature', 'nature','https://hips.hearstapps.com/hmg-prod/images/close-up-of-apple-against-white-background-royalty-free-image-1627315766.jpg');


INSERT INTO images (collection_id, title, price, is_for_sale, description, image_url, medium) VALUES 
(8, 'scribble', 3000.00, true, 'love this art', 'https://hips.hearstapps.com/hmg-prod/images/close-up-of-apple-against-white-background-royalty-free-image-1627315766.jpg', 'pencil'),
(9, 'yellow', 3000.00, true, 'love this art', 'https://www.shutterstock.com/image-illustration/modern-illustration-linocut-style-surreal-260nw-1913052853.jpg', 'pencil'),
(2, 'red', 3000.00, true, 'love this art', 'https://lh3.googleusercontent.com/ci/AJFM8rwqdr4P_2MEV_92ilEISXIY16I3ab9TKeyYy67BN86mP5Z5n9jWtys5zoHo5M9Xc935QBG7sQ', 'pencil'),
(2, 'oink', 3000.00, true, 'love this art', 'https://media.gettyimages.com/id/1304289911/photo/my-vision-of-female-face.jpg?s=612x612&w=gi&k=20&c=0r_-G08H6S2EzJrQ33wzpWHhqqfX3FL-acefdYLzkbg=', 'pencil'),
(3, 'jklk', 3000.00, true, 'love this art', 'https://img.freepik.com/premium-photo/artist-man-with-paint-splash-her-head-creativity-3d-rendering_691560-3441.jpg', 'pencil'),
(3, 'dsdsa', 3000.00, true, 'love this art', 'https://st.depositphotos.com/1987395/1941/i/450/depositphotos_19414393-stock-photo-back-to-school-series-art.jpg', 'pencil'),
(4, 'asdas', 3000.00, true, 'love this art', 'https://thumbs.dreamstime.com/b/art-6260031.jpg', 'pencil'),
(4, 'sadsa', 3000.00, true, 'love this art', 'https://img.freepik.com/premium-photo/woman-s-face-is-made-up-geometric-shapes-cyberpunk-colorful-fractalism-cubism_834088-1.jpg', 'pencil'),
(9, 'dsdsa', 3000.00, true, 'love this art', 'https://i0.wp.com/xaviernewswire.com/wp-content/uploads/2020/02/art.jpg?fit=948%2C572&ssl=1', 'pencil'),
(8, 'rerew', 3000.00, true, 'love this art', 'https://static.wixstatic.com/media/c73ca7_c2c86fb932ad470a962988eedec67444~mv2.jpg/v1/fill/w_566,h_552,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/_edited.jpg', 'pencil'),
(6, 'werewrew', 3000.00, true, 'love this art', 'https://www.tccd.edu/magazine/assets/images/volume-03/issue-02/arts/the-importance-of-art-social-share.jpg', 'pencil'),
(7, 'brush', 3000.00, true, 'love this art', 'https://media.istockphoto.com/id/636761588/photo/used-brushes-on-an-artists-palette-of-colorful-oil-paint.jpg?s=612x612&w=0&k=20&c=38YQxVJVWnNfvGtlb7AXMx_ItyHZMEdmWenNkWNQ91g=', 'paint');
