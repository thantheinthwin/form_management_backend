-- Insert Admin and User Accounts
INSERT INTO users (id, name, email, password, role) VALUES 
(0, 'Admin User', 'admin@example.com', '$2a$10$ABCDE12345', 'admin'),
(NULL, 'Regular User', 'user@example.com', '$2a$10$XYZ987654', 'user');
