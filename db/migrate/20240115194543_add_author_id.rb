class AddAuthorId < ActiveRecord::Migration[7.0]
  def change

   add_foreign_key :articles, :users, column: :author_id, index: true
  end
end
