class ChangeUsersName < ActiveRecord::Migration[7.0]
  def change
    rename_table :new_users, :users
  end
end
