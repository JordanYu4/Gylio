json.partial! 'api/lists/list', list: @list
json.cardIds @list.cards.pluck(:id)

@list.cards.each do |card|
  json.cards do
    json.partial! 'api/cards/card', card: card
  end
end
