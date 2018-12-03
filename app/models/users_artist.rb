class UsersArtist < ApplicationRecord
  belongs_to  :user
  belongs_to :artist
end
