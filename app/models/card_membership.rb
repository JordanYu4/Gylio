# == Schema Information
#
# Table name: card_memberships
#
#  id         :bigint(8)        not null, primary key
#  member_id  :integer          not null
#  card_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CardMembership < ApplicationRecord
  validates :member_id, :card_id, presence: true

  belongs_to :member,
             foreign_key: :member_id,
             class_name: :User
  belongs_to :card,
             foreign_key: :card_id,
             class_name: :Card

end
