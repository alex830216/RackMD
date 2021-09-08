class Api::V1::NotesController < ApplicationController
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  before_action :authenticate_user!

  def collection
    note = Note.find(params[:id])

    if Collection.exists?(note: note)
      current_user.collected_notes.delete(note)
      render json: { status: "removed" }
    else
      current_user.collected_notes << note
      render json: { status: "added" }
    end
  end

end
=======
    before_action :check_login!  
=======
    before_action :authenticate_user!  
>>>>>>> 5a78d03 (修改權限/CSS)
    # POST /api/v1/notes/2/favorite

    def favorite
      note = Note.find(params[:id])
      if Like.exists?(note: note)
        #移除最愛
        current_user.favorite_notes.delete(note)
        render json: { status: "removed", id: params[:id] }
      else
        #新增最愛  
        current_user.favorite_notes << note
        render json: { status: "added", id: params[:id] }
=======
    before_action :check_login!  
=======
    before_action :authenticate_user!  
>>>>>>> e2a26d6 (修改權限/CSS)
=======
    before_action :authenticate_user!  
>>>>>>> d0202ec5039bf15862c7eabf5edc6d14228d38b7
    # POST /api/v1/notes/2/favorite

    def favorite
      note = Note.find(params[:id])
      if Like.exists?(note: note)
        #移除最愛
        current_user.favorite_notes.delete(note)
        render json: { status: "removed", id: params[:id] }
      else
        #新增最愛  
        current_user.favorite_notes << note
<<<<<<< HEAD
<<<<<<< HEAD
        render json: { status: "added",id: params[:id] }
>>>>>>> 0f0fb39 (controller api)
=======
        render json: { status: "added", id: params[:id] }
>>>>>>> e2a26d6 (修改權限/CSS)
=======
        render json: { status: "added", id: params[:id] }
>>>>>>> d0202ec5039bf15862c7eabf5edc6d14228d38b7
      end
      
    end    
end
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 7ddc41b (controller api)
=======
>>>>>>> 0f0fb39 (controller api)
=======
>>>>>>> d0202ec5039bf15862c7eabf5edc6d14228d38b7
