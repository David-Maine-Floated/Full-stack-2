class RemoveImageInput < ActiveRecord::Migration[7.0]
  def change
    remove_column :articles, :image
  end
end
