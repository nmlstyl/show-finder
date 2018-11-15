require 'bcrypt'

class User < ApplicationRecord
  has_secure_password

  has_many :bandsintown_artists
  has_many :songkick_artists
end
