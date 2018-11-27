class User < ApplicationRecord
  has_secure_password

  validates_with EmailValidator
  validates :password, presence: true, length: { in: 6..20 }

  has_many :artists
end
