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

class Labeling < ApplicationRecord
  validates :card_id, :label_id, presence: true

  belongs_to :card,
             foreign_key: :card_id,
             class_name: :Card
  belongs_to :label,
             foreign_key: :label_id,
             class_name: :Label

end
