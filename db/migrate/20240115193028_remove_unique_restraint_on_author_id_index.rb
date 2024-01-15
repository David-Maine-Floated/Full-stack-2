class RemoveUniqueRestraintOnAuthorIdIndex < ActiveRecord::Migration[7.0]
  def change

    remove_index :articles, name: :index_articles_on_author_id

  end
end