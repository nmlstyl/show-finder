class Like < ApplicationRecord
  attr_accessor :like

  belongs_to :artist
  belongs_to :user
end
