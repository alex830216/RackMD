class NotesController < ApplicationController
  before_action :authenticate_user!
  before_action :find_user_note, only: [:show, :edit, :update, :destroy]

  def index
    @notes = current_user.notes.order(updated_at: :desc).page(params[:page])
  end

  def show
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

  def update
    if @note.update(note_params)
      render json: @note
    else
      render html: 'fail'
    end
  end

  def destroy
    if @note.destroy
      redirect_to "/notes"
    end
  end



  private 
  def note_params
    params.require(:note).permit(:title, :content)
  end

  def find_user_note
    @note = current_user.notes.find(params[:id])
  end
end
