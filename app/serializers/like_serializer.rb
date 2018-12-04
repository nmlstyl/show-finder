class LikeSerializer < ActiveModel::Serializer
  attributes :id, :switch, :user_id, :artist_id

  belongs_to :artist
  belongs_to :user
end
