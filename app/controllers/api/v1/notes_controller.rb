class Api::V1::NotesController < ApplicationController
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
    end   
  end
 
  def tag
    tag_list = params[:tag_str].split(",")
    @note = Note.find(params[:id])
    @note.save_tage(tag_list)
    # p "=================="
    # p Note.includes(:tags)
    # p "=================="
    # byebug
    
    # if @note.save
    #   render json: { addTags: "success!!" }
    # else
    #   render json: {status: 'failed!'}
    # end
    # tagList.each do |tag|
      # Tag.includes(:tagging).where("note_id LIKE ?", params[:id]).where("title LIKE ?", tag.strip).first_or_create
    # end
  
  end
end
 


