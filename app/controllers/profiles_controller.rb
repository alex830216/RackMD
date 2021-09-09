class ProfilesController < ApplicationController
  def myallnote
    @notes = current_user.notes.order(updated_at: :desc).search(params[:search]).page(params[:page])
  end  
  def showopennote
  end
  def showlikenote
  end

end