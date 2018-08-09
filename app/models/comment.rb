# == Schema Information
#
# Table name: comments
#
#  id         :bigint(8)        not null, primary key
#  body       :text             not null
#  card_id    :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :body, :card_id, :author_id, presence: true

  belongs_to :card,
             foreign_key: :card_id,
             class_name: :Card
  belongs_to :author,
             foreign_key: :author,
             class_name: :User

end
