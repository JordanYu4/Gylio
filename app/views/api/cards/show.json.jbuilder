json.card do 
    json.partial! 'api/cards/card', card: @card
    json.commentIds @card.comments.pluck(:id)
end

@card.comments.each do |comment|
  json.comments do
    json.set! comment.id 
        json.partial! 'api/comments/comment', comment: comment
    end
  end
end
