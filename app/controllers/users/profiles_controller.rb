class Users::ProfilesController < ApplicationController
  def public_note
    @user = User.find(params[:id])
    @notes = @user.notes.order(updated_at: :desc).search(params[:search]).page(params[:page])
  end  
  def private_note
    @user = User.find(params[:id])
    @notes = @user.notes
  end
  def like_note
    @user = User.find(params[:id])
    @notes = @user.favorite_notes.order(updated_at: :desc).page(params[:page])
  end
end
# .where(is_private: false)
