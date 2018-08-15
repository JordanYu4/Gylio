# == Schema Information
#
# Table name: cards
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  list_id     :integer          not null
#  description :text
#  due_date    :datetime
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Card < ApplicationRecord
  validates :title, presence: true

  has_many :comments
  has_many :labelings
  has_many :labels,
           through: :labelings,
           source: :label
  has_many :card_memberships
  has_many :members,
           through: :card_memberships,
           source: :card
  belongs_to :list,
             foreign_key: :list_id,
             class_name: :List

end
