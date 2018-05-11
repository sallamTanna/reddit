BEGIN;
DROP TABLE IF EXISTS users, posts, comments, votes CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  password VARCHAR(60) NOT NULL,
  phone VARCHAR(10) NOT NULL,
  email VARCHAR(30) UNIQUE
);


CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  body TEXT NOT NULL,
  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  body TEXT NOT NULL,
  post_id INTEGER REFERENCES posts(id),
  user_id INTEGER REFERENCES users(id),
  parent_id INTEGER REFERENCES comments(id)
);

CREATE TABLE votes(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  post_id INTEGER REFERENCES posts(id)

);

INSERT INTO users (name, password, phone, email) VALUES
('sallam','123', '0598985166','sallamtanna2015@hotmail.com'),
('Israa','123', '0598985166','israatanna2015@hotmail.com'),
('Dana','123', '0598985166','dana@hotmail.com'),
('Lana','123', '0598985166','lana@hotmail.com');

INSERT INTO posts (body, user_id) VALUES
('The first post',1),
('The second post',2),
('The third post',3),
('The fourth post',4);


INSERT INTO comments (body, post_id, user_id, parent_id) VALUES
(' comment1 ',1,1,1),
(' comment2 ',1,1,1),
('comment 1',2,2,1),
('comment 1',3,2,1),
('comment 1',4,2,1);

INSERT INTO votes(user_id, post_id) VALUES
(1,1),
(2,2);

COMMIT;
