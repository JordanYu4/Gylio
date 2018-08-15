# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Board.delete_all
BoardMembership.delete_all

User.create!(
  username: 'Jean Valjean',
  email: '24601@gmail.com',
  password: 'whoami'
)

sinatra = User.create!(
  username: 'Frank',
  email: 'frank@frank.com',
  password: 'sinatra'
)

board_0 = Board.create!(
  title: 'Do it my way',
  background_color: 'black'
)

BoardMembership.create(
  board_id: board_0.id,
  member_id: sinatra.id,
  admin: 'true'
)

gandalf = User.create!(
  username: 'Gandalf',
  email: 'thewhitewizard@undin.com',
  password: 'shadowfax'
)

board_1 = Board.create!(
  title: 'Recruit some hobbits',
  background_color: '#0078BF'
)

BoardMembership.create(
  board_id: board_1.id,
  member_id: gandalf.id,
  admin: 'true'
)

board_2 = Board.create!(
  title: 'Research Bilbo\'s shady ring',
  background_color: '#282C34'
)

BoardMembership.create(
  board_id: board_2.id,
  member_id: gandalf.id,
  admin: 'true'
)
board_3 = Board.create!(
  title: 'Find Aragorn',
  background_color: 'green'
)

BoardMembership.create(
  board_id: board_3.id,
  member_id: gandalf.id,
  admin: 'true'
)
board_4 = Board.create!(
  title: 'Invent new fireworks',
  background_color: 'black'
)

BoardMembership.create(
  board_id: board_4.id,
  member_id: gandalf.id,
  admin: 'true'
)
board_5 = Board.create!(
  title: 'Annual wizard\'s council',
  background_color: 'navyblue'
)

BoardMembership.create(
  board_id: board_5.id,
  member_id: gandalf.id,
  admin: 'true'
)
