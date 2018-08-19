json.partial! 'api/cards/card', card: @card
json.commentIds @card.comments.pluck(:id)

# @card.comments.each do |comment|
#   json.comments do
    # json.partial! 'api/comments/comment', comment: comment
#   end
# end
