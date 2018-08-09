# == Schema Information
#
# Table name: labelings
#
#  id         :bigint(8)        not null, primary key
#  card_id    :integer          not null
#  label_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class LabelingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
