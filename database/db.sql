create extension if not exists "uuid-ossp";

create table users (
  id_user UUID primary key default uuid_generate_v4(),
  username varchar(50) not null,
  monthly_budget int not null,
  user_image_src varchar(100),
  user_email varchar(100) unique,
  user_password varchar(100),
  login_at timestamp default current_timestamp
);

create table expense (
  id_expense UUID primary key default uuid_generate_v4(),
  expense_name varchar(100) not null,
  amount_spent int not null,
  description text,
  user_id UUID references users(id_user),
  expense_category UUID references category(id_category),
  created_at timestamp default current_timestamp
);

create table category (
  id_category UUID primary key default uuid_generate_v4(),
  name varchar(50) not null,
  description text
);

insert into expense(expense_name, amount_spent, description, user_id, expense_category) values 
('Humburger', 10000, 'Food that make you happy everytime', 
'53cb24e4-ecd5-42a3-ba71-1c3bd05fc1ee', '9b5c837c-cc4d-4c23-ac8b-2b1fbbd4b8dc')

insert into category (name, description) values
('Housing', 'Expenses related to rent, mortgage, and home maintenance.'),
('Food', 'Spending on groceries, restaurants, and dining out.'),
('Transportation', 'Costs for fuel, public transport, and vehicle maintenance.'),
('Health', 'Medical bills, insurance, and pharmacy purchases.'),
('Communication', 'Internet, phone plans, and digital services.'),
('Education', 'Tuition, books, and learning resources.'),
('Entertainment', 'Leisure activities like movies, games, and streaming.'),
('Clothing', 'Clothes, shoes, and personal grooming.'),
('Taxes', 'Government taxes and mandatory contributions.'),
('Savings', 'Money set aside for future needs or investments.'),
('Donations', 'Charitable giving and support to others.'),
('Family', 'Expenses for children, childcare, and family needs.');