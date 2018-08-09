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

require 'test_helper'

class CardMembershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
