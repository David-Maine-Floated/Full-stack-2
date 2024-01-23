class AddClapCountColumn < ActiveRecord::Migration[7.0]
  def change
    add_column :claps, :clap_count, :integer, default: 1
    change_column :claps, :clap_count, :integer, check: 'clap_count >= 1 AND clap_count <= 50'
  end
end
