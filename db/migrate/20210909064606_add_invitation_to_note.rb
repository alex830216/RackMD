class AddInvitationToNote < ActiveRecord::Migration[6.1]
  def change
    add_column :notes, :invitation_status, :boolean
  end
end
