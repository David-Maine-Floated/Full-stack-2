class CreateClaps < ActiveRecord::Migration[7.0]
  def change
    create_table :claps do |t|
      t.references :article, index: true, foreign_key: true, null: false
      t.references :liker, index: true, foreign_key: {to_table: :users}, null: false 
      t.timestamps
    end
  end
end
