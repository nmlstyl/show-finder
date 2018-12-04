class Artist < ApplicationRecord
  validates :name, uniqueness: true

  has_many :users_artists
  has_many :users, through: :users_artists
  has_many :likes
end
