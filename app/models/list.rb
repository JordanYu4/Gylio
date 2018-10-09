# == Schema Information
#
# Table name: lists
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  board_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  card_ids   :integer          default([]), is an Array
#

class List < ApplicationRecord
  validates :title, :board_id, presence: true

  has_many :cards, dependent: :destroy
  belongs_to :board,
             primary_key: :id,
             foreign_key: :board_id,
             class_name: :Board

end
