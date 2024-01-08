class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.string :title, null: false, index: {unique: true}
      t.text :body, null: false 
      t.references :author, foreign_key: {to_table: :users}
      t.timestamps
    end
  end
end
