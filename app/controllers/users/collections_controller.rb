class Users::CollectionsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    @collected_notes = current_user.collected_notes.order(id: :desc)
  end

end
