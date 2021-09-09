class NotesController < ApplicationController
  before_action :authenticate_user!
  before_action :find_user_note, only: [:show, :edit, :update, :destroy]

  def index
    @notes = current_user.notes.order(updated_at: :desc).page(params[:page])
  end

  def show
    @comment = @note.comments.new
    @comments = @note.comments.order(id: :desc)
  end

  def new
    @note = current_user.notes.new
  end

  def create
    @note = current_user.notes.new(note_params)
    if @note.save
      redirect_to "/notes"
    else
      render :new
    end
  end

  def edit
  end

  def is_edit
    @note = Note.find(params[:note_id])
    if @note.edit_status.blank?
      @note.update(edit_status: true)
    else
      @note.update(edit_status: false)
    end
    redirect_to note_path(@note)
  end

  def is_comment
    @note = Note.find(params[:note_id])
    if @note.comment_status.blank?
      @note.update(comment_status: true)
    else
      @note.update(comment_status: false)
    end
    redirect_to note_path(@note)
  end

  def update
    if @note.update(note_params)
      redirect_to "/notes"
    else
      render :edit
    end
  end

  def destroy
    if @note.destroy
      redirect_to "/notes"
    end
  end



  private 
  def note_params
    params.require(:note).permit(:title, :content, :tag_list)
  end

  def find_user_note
    @note = current_user.notes.find(params[:id])
  end
end
