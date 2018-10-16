json.card do 
  json.partial! 'api/cards/card', card: @card
  json.commentIds @card.comments.pluck(:id)
end

@card.comments.each do |comment|
  json.comments do
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end

@card.labels.each do |label|
  json.labels do 
    json.set! label.id do 
      json.partial! 'api/labels/label', label: label
    end
  end
end