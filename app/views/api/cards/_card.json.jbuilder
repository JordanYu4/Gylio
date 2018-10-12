json.extract! card, :id, :title, :list_id, :description, :due_date
json.labelIds card.labels.pluck(:id)
json.commentIds card.comments.pluck(:id)
