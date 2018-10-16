require_relative 'seeds_helper'

clear_database

##################################

valjean = User.create!(
  username: 'Jean Valjean',
  email: '24601@gmail.com',
  password: 'whoami'
)

##################################

sinatra = User.create!(
  username: 'Frank',
  email: 'frank@frank.com',
  password: 'sinatra'
)

board00 = generate_board(
  sinatra, 
  'Do it my way',
  [],
  []
)

####################################

gandalf = User.create!(
  username: 'Gandalf',
  email: 'thewhitewizard@undin.com',
  password: 'shadowfax'
)

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
  'Recruit some dwarves', 
  board01_list_titles, 
  board01_card_titles
)

board02 = generate_board(
  gandalf, 
  'Research Bilbo\'s shady ring',
  [], 
  [],
  '#282C34'
)

board03 = generate_board(
  gandalf, 
  'Find Aragorn',
  [], 
  [],
  'green'
)

board04 = generate_board(
  gandalf,
  'Invent new fireworks',
  [],
  [],
  'black'
)

board05_list_titles = [
  'Draft up invites',
  'Order refreshments',
]
board05_card_titles = [
  'Order fair trade paper from Treebeard',
  'Get chanterelles approved by Saruman', 
  'Ask delivery favor from the Eagles',
  'Order mushroom platter from Radagast'
]

board05 = generate_board(
  gandalf,
  'Annual wizard\'s council',
  board05_list_titles,
  board05_card_titles,
  'navyblue'
)

############################################