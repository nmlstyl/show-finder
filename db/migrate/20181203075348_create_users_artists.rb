class CreateUsersArtists < ActiveRecord::Migration[5.1]
  def change
    create_table :users_artists do |t|
      t.integer :user_id
      t.integer :artist_id

      t.timestamps
    end
  end
end
