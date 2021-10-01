class AddTotalToLikes < ActiveRecord::Migration[6.1]
  def change
    add_column :likes, :total, :integer
  end
end
