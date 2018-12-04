class User < ApplicationRecord
  has_secure_password

  validates_with EmailValidator
  validates :password, presence: true, length: { in: 6..20 }

  has_many :users_artists
  has_many :artists, through: :users_artists
  has_many :likes
end
