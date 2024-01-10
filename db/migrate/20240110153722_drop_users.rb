class DropUsers < ActiveRecord::Migration[7.0]
  def change
    drop_table :follows
    drop_table :likes 
  end
end
