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
      current_user.favorite_notes.delete(note)
      render json: { status: "removed", id: params[:id] }
    else
      current_user.favorite_notes << note
      render json: { status: "added", id: params[:id] }
    end   
  end
end
