class DropUsersAndArtilces < ActiveRecord::Migration[7.0]
  def change
    drop_table :articles
    drop_table :users
  end
end
