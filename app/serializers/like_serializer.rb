class LikeSerializer < ActiveModel::Serializer
  attributes :id, :switch, :user_id, :artist_id
end
