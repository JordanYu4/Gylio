# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :email, uniqueness: true
  validates :session_token, uniqueness: true
  validates :password, length: { minumum: 6, allow_nil: true }

  has_many :card_memberships
  has_many :cards,
           through: :card_memberships,
           source: :card
  has_many :board_memberships
  has_many :boards,
           through: :board_memberships,
           source: :board

  attr_reader :password

end
