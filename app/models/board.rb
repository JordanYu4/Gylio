# == Schema Information
#
# Table name: boards
#
#  id               :bigint(8)        not null, primary key
#  title            :string           not null
#  background_color :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  list_order       :integer          default([]), is an Array
#

class Board < ApplicationRecord
  validates :title, :background_color, presence: true
  
  has_many :lists, dependent: :destroy,
  primary_key: :id,
  foreign_key: :board_id,
  class_name: :List
  has_many :board_memberships
  has_many :members,
  through: :board_memberships,
  source: :member
  
  after_initialize :ensure_background_color

  DEFAULT_BACKROUND_COLOR = '#0078BF'

  def ensure_background_color
    self.background_color ||= '#0078BF'
  end

end
