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

board_0 = Board.create!(
  title: 'Do it my way',
  background_color: 'black'
)

BoardMembership.create(
  board_id: board_0.id,
  member_id: sinatra.id,
  admin: 'true'
)

####################################

gandalf = User.create!(
  username: 'Gandalf',
  email: 'thewhitewizard@undin.com',
  password: 'shadowfax'
)

board_1 = Board.create!(
  title: 'Recruit some dwarves',
  background_color: '#0078BF'
)

BoardMembership.create!(
  board_id: board_1.id,
  member_id: gandalf.id,
  admin: 'true'
)

board_1_list_titles = [
  'Prospective candidates', 
  'Invitations sent', 
  'Accepted the adventure', 
  'Accepted, but don\'t know it yet'
]

board_1_list_order = []

board_1_list_titles.each do |list_title| 
  new_list = List.create!(
    title: list_title, 
    board_id: board_1.id
  )
  board_1_list_order << new_list.id
end

board_1.update_attributes(list_order: board_1_list_order)

# card_100 = Card.create!(
#   title: 'Thorin',
#   list_id: list_12.id
# )

# card_101 = Card.create!(
#   title: 'Fili',
#   list_id: list_12.id
# )

# card_102 = Card.create!(
#   title: 'Kili',
#   list_id: list_13.id
# )

# card_103 = Card.create!(
#   title: 'Balin',
#   list_id: list_11.id
# )

# card_104 = Card.create!(
#   title: 'Dwalin',
#   list_id: list_11.id
# )

# card_105 = Card.create!(
#   title: 'Oin',
#   list_id: list_11.id
# )

# card_106 = Card.create!(
#   title: 'Gloin',
#   list_id: list_10.id
# )

# card_107 = Card.create!(
#   title: 'Dori',
#   list_id: list_10.id
# )

# card_108 = Card.create!(
#   title: 'Nori',
#   list_id: list_11.id
# )

# card_109 = Card.create!(
#   title: 'Ori',
#   list_id: list_10.id
# )

# card_1010 = Card.create!(
#   title: 'Bifur',
#   list_id: list_12.id
# )

# card_1011 = Card.create!(
#   title: 'Bofur',
#   list_id: list_11.id
# )

# card_1012 = Card.create!(
#   title: 'Bombur',
#   list_id: list_10.id
# )

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


