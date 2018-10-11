json.extract! list, :id, :title, :board_id, :card_order
json.cardIds list.cards.pluck(:id)
