class CreateSongkickArtists < ActiveRecord::Migration[5.1]
  def change
    create_table :songkick_artists do |t|

      t.timestamps
    end
  end
end
