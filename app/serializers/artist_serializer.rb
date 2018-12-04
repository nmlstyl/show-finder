class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :like

  has_many :likes
end
