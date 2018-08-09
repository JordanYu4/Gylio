# == Schema Information
#
# Table name: lists
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  board_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class List < ApplicationRecord
  validates :title, :board_id, presence: true

  has_many :cards
  belongs_to :board,
             foreign_key: :board_id,
             class_name: :Board

end
