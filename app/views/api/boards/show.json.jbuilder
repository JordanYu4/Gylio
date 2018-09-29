json.board do
  json.partial! 'api/boards/board', board: @board
  json.listIds do 
    json.array! @board.lists {|list| list.id}
  end
  # json.listIds(@board.lists) do |list|  # may need to change this - rails syntax 
  #   list.id
  # end
end

@board.lists.each do |list|
  json.lists do
    json.set! list.id do
      json.partial! 'api/lists/list', list: list
    end
  end
end

@board.members.each do |member|
  json.members do
    json.set! member.id do
      json.partial! 'api/users/user', user: member
    end
  end
end
