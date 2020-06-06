class CreateFollowers < ActiveRecord::Migration[5.2]
  def change
    create_table :followers do |t|
      t.integer :user_id, null: false 
      t.integer :following_id
      t.integer :follower_id

      t.timestamps 
    end
    add_index :followers, :user_id
    add_index :followers, :following_id 
    add_index :followers, :follower_id 
  end
end
