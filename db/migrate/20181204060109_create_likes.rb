class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :user_id
      t.integer :artist_id
      t.string :switch

      t.timestamps
    end

    execute "ALTER TABLE likes ALTER COLUMN switch SET DEFAULT 'true';"
  end
end
