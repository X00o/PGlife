CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  full_name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  gender ENUM('male', 'female') NOT NULL,
  college_name VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE cities (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE properties (
  id INT NOT NULL AUTO_INCREMENT,
  city_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  address VARCHAR(255) NOT NULL,
  description LONGTEXT NOT NULL,
  gender ENUM('male', 'female', 'unisex') NOT NULL,
  rent INT NOT NULL,
  rating_clean FLOAT(2,1) NOT NULL,
  rating_food FLOAT(2,1) NOT NULL,
  rating_safety FLOAT(2,1) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(city_id) REFERENCES cities(id)
);

CREATE TABLE amenities (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  type VARCHAR(100) NOT NULL,
  icon VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE properties_amenities (
  id INT NOT NULL AUTO_INCREMENT,
  property_id INT NOT NULL,
  amenity_id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(property_id) REFERENCES properties(id),
  FOREIGN KEY(amenity_id) REFERENCES amenities(id)
);

CREATE TABLE testimonials (
  id INT NOT NULL AUTO_INCREMENT,
  property_id INT NOT NULL,
  user_name VARCHAR(100) NOT NULL,
  content LONGTEXT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(property_id) REFERENCES properties(id)
);

CREATE TABLE interested_users_properties (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  property_id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(property_id) REFERENCES properties(id)
);
