class Api::V1::NotesController < ApplicationController
  before_action :authenticate_user!

  def collection
    # byebug
    note = Note.find(params[:id])

    if Collection.exists?(note: note)
      # 移除最愛
      current_user.collected_notes.delete(note)
      render json: { status: "removed" }
    else
      # 新增最愛
      current_user.collected_notes << note
      render json: { status: "added" }
    end
  end
end

# note = Note.find(params[:id])

# if Collection.exists?
#   # 移除最愛
#   current_user.collections.destroy(note_id: params[:id])
#   render json: { status: "removed", id: params[:id] }
# else
#   # 新增最愛
#   current_user.collections.new(note_id: params[:id]).save
#   render json: { status: "added", id: params[:id] }
# end