class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.references :commenter, foreign_key: {to_table: :users}, null: false
      t.references :article, foreign_key: {to_table: :articles}, null: false 
      t.timestamps
    end
  end
end
