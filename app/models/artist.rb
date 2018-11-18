class Artist < ApplicationRecord
  validates :name, uniqueness: true

  belongs_to :user
end
