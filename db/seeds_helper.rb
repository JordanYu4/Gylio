def generate_board(
  author, 
  board_title, 
  list_titles, 
  card_titles, 
  background_color = nil)

  board = create_board(author, board_title, background_color)
  populate_board(board, list_titles, card_titles)
  board
end

def create_board(author, board_title, background_color)
  board = Board.create!(
    title: board_title, 
    background_color: background_color
  )
  BoardMembership.create!(
    board_id: board.id, 
    member_id: author.id, 
    admin: 'true'
  )
  board
end

def populate_board(board, list_titles, card_titles)
  board_lists = Hash.new { |h, k| h[k] = Array.new }
  list_titles.each do |list_title| 
    new_list = List.create!(
      title: list_title, 
      board_id: board.id
    )
    board_lists[new_list.id]
  end
  board.update_attributes(list_order: board_lists.keys)

  card_titles.each_with_index do |card_title, idx| 
    receiving_list_id = board_lists.keys[idx % board_lists.length]
    new_card = Card.create!(
      title: card_title, 
      list_id: receiving_list_id
    )
    board_lists[receiving_list_id] << new_card.id
  end

  board_lists.each do |list_id, card_ids| 
    list = List.find(list_id)
    list.update_attributes(card_order: card_ids)
  end
end