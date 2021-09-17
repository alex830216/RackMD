class Users::ProfilesController < ApplicationController
  def public_note
    @user = User.find(params[:id])
    @notes = @user.notes.order(updated_at: :desc).search(params[:search]).page(params[:page])
  end  
  def private_note
  end
  def like_note
  end

end