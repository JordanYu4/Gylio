# == Schema Information
#
# Table name: board_memberships
#
#  id         :bigint(8)        not null, primary key
#  member_id  :integer          not null
#  board_id   :integer          not null
#  admin      :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class BoardMembership < ApplicationRecord
  validates :admin, presence: true

  belongs_to :member,
             primary_key: :id,
             foreign_key: :member_id,
             class_name: :User
  belongs_to :board,
             primary_key: :id,
             foreign_key: :board_id,
             class_name: :Board

end
