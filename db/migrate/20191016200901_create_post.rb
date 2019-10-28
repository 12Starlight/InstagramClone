class CreatePost < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.text :description

      t.timestamps 
    end
    add_index :posts, :title
    add_index :posts, :author_id
  end
end
