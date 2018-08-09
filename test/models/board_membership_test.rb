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

require 'test_helper'

class BoardMembershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
