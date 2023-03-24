DROP TABLE IF EXISTS entries;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(100) NOT NULL,
    password CHAR(60) NOT NULL,
    dob DATE NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE entries (
    entry_id INT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(255) NOT NULL,
    content VARCHAR(2000) NOT NULL,
    entry_date DATE NOT NULL,
    category VARCHAR(100) NOT NULL,
    user_id INT NOT NULL, 
    PRIMARY KEY (entry_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

INSERT INTO users
    (name, password, dob)
VALUES 
    ('Test User', 'test123', '1999-05-20');

INSERT INTO entries
    (title, content, entry_date, category, user_id)
VALUES 
    ('Test entry1', 'Test content1', '2023-01-11', 'Life', 1),
    ('Test entry2', 'Test content2', '2023-02-21', 'Life', 1),
    ('Test entry3', 'Test content3', '2023-03-05', 'Work', 1),
    ('Test entry4', 'Test content4', '2023-03-22', 'Work', 1);
