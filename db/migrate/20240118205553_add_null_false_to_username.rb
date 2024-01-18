class AddNullFalseToUsername < ActiveRecord::Migration[7.0]
  def change
    change_column :users, :username, :string, null: false 
    #Ex:- change_column("admin_users", "email", :string, :limit =>25)
  end
end
