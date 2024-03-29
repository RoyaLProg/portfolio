CREATE TABLE IF NOT EXISTS users (
	id SERIAL UNIQUE,
	username TEXT,
	password TEXT
);
CREATE TABLE IF NOT EXISTS projects (
	id SERIAL UNIQUE,
	title TEXT,
	description TEXT,
	image TEXT,
	short_desc TEXT,
	groups TEXT,
	github_link TEXT
);
CREATE TABLE IF NOT EXISTS comments (
	id SERIAL UNIQUE,
	username TEXT,
	comment TEXT,
	date DATE,
	project_id INT
);
CREATE TABLE IF NOT EXISTS skills (
	id SERIAL UNIQUE,
	name TEXT,
	advancement INT,
	description TEXT
);

INSERT INTO users (username, password) VALUES ('admin', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918');

INSERT INTO projects (title, description, short_desc, image, groups, github_link) VALUES  ('Default', 'SomeDefaultDescription', 'SomeDefaultDescription', 'https://choualbox.com/Img/1611426483399.jpg', 'Default', '');

INSERT INTO comments (username, comment, date ,project_id) VALUES ('defaultCommentator', 'An example of a comment', '2022-04-23', 1);

INSERT INTO skills (name, advancement, description) VALUES ('Default', 55, 'SomeDefaultDescription');

