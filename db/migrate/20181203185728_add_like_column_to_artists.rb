class AddLikeColumnToArtists < ActiveRecord::Migration[5.1]
  def change
    add_column :artists, :likes, :integer, :null => false, :default => 0
  end
end
