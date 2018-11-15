class CreateSongkickArtists < ActiveRecord::Migration[5.1]
  def change
    create_table :songkick_artists do |t|
      t.string :name
      t.integer :songkick_id
      t.belongs_to :user, index: true

      t.timestamps
    end
  end
end
