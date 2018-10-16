require_relative 'seeds_helper'

User.delete_all
Board.delete_all
List.delete_all
Card.delete_all
Comment.delete_all
BoardMembership.delete_all

valjean = User.create!(
  username: 'Jean Valjean',
  email: '24601@gmail.com',
  password: 'whoami'
)

sinatra = User.create!(
  username: 'Frank',
  email: 'frank@frank.com',
  password: 'sinatra'
)

board00 = Board.create!(
  title: 'Do it my way',
  background_color: 'black'
)

BoardMembership.create(
  board_id: board00.id,
  member_id: sinatra.id,
  admin: 'true'
)

####################################

gandalf = User.create!(
  username: 'Gandalf',
  email: 'thewhitewizard@undin.com',
  password: 'shadowfax'
)

board01_title = 'Recruit some dwarves'

board01_list_titles = [
  'Prospective candidates', 
  'Invitations sent', 
  'Accepted the adventure', 
  'Accepted, but don\'t know it yet'
]

board01_card_titles = [
  'Thorin', 
  'Fili', 
  'Kili', 
  'Balin', 
  'Dwalin', 
  'Oin', 
  'Gloin', 
  'Dori', 
  'Nori',
  'Ori', 
  'Bifur', 
  'Bofur', 
  'Bombur'
]

board01 = generate_board(
  gandalf, 
  board01_title, 
  board01_list_titles, 
  board01_card_titles
)

############################################

board_2 = Board.create!(
  title: 'Research Bilbo\'s shady ring',
  background_color: '#282C34'
)

BoardMembership.create!(
  board_id: board_2.id,
  member_id: gandalf.id,
  admin: 'true'
)
board_3 = Board.create!(
  title: 'Find Aragorn',
  background_color: 'green'
)

BoardMembership.create!(
  board_id: board_3.id,
  member_id: gandalf.id,
  admin: 'true'
)
board_4 = Board.create!(
  title: 'Invent new fireworks',
  background_color: 'black'
)

BoardMembership.create!(
  board_id: board_4.id,
  member_id: gandalf.id,
  admin: 'true'
)
board_5 = Board.create!(
  title: 'Annual wizard\'s council',
  background_color: 'navyblue'
)

BoardMembership.create!(
  board_id: board_5.id,
  member_id: gandalf.id,
  admin: 'true'
)

list_50 = List.create!(
  title: 'Draft up invites', 
  board_id: board_5.id
)

list_51 = List.create!(
  title: 'Order refreshments', 
  board_id: board_5.id
)

card_510 = Card.create!(
  title: 'Get chanterelles approved by Saruman', 
  list_id: list_51.id
)

card_511 = Card.create!(
  title: 'Order mushroom platter from Radagast',
  list_id: list_51.id
)


