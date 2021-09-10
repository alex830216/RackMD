class AddIsCommentToNote < ActiveRecord::Migration[6.1]
  def change
    add_column :notes, :comment_status, :boolean, default: true
  end
end
