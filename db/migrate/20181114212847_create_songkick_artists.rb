class CreateSongkickArtists < ActiveRecord::Migration[5.1]
  def change
    create_table :songkick_artists do |t|
      t.string :name
      t.integer :songkick_id

      t.timestamps
    end
  end
end
