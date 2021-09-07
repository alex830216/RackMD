class AddIsEditToNote < ActiveRecord::Migration[6.1]
  def change
    add_column :notes, :edit_status, :boolean, default: true
  end
end
