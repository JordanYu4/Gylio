# == Schema Information
#
# Table name: labels
#
#  id         :bigint(8)        not null, primary key
#  board_id   :integer          not null
#  title      :string
#  color      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Label < ApplicationRecord
  validates :board_id, :color, presence: true

  has_many :labelings
  has_many :cards,
           through: :labelings,
           source: :card
  belongs_to :board,
             foreign_key: :board_id,
             class_name: :Board

end
