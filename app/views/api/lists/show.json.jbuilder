json.list do 
  json.partial! 'api/lists/list', list: @list
  json.cardIds @list.cards.pluck(:id)
end

@list.cards.each do |card|
  json.cards do
    json.set! card.id do 
      json.partial! 'api/cards/card', card: card
    end
  end
end
