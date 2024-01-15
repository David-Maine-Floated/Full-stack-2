class ReAddAuthorId < ActiveRecord::Migration[7.0]
  def change
    remove_foreign_key :articles, column: :author_id
  end
end
