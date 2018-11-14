class CreateBandsintownArtists < ActiveRecord::Migration[5.1]
  def change
    create_table :bandsintown_artists do |t|

      t.timestamps
    end
  end
end
