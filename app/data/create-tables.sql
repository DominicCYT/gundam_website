
CREATE TABLE A01365286_user (
  ID int NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(50),
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(50),
  password VARCHAR(50),
  PRIMARY KEY (ID)
);

CREATE TABLE A01365286_user_timeline (
  ID int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  post_date VARCHAR(20),
  post_desc VARCHAR(150),
  post_time VARCHAR(20),
  post_views int,
  PRIMARY KEY (ID),
  FOREIGN KEY (user_id) REFERENCES A01365286_user(ID)
);
