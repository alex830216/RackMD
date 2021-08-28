class NotesController < ApplicationController
  
  before_action :find_note, only: [:show, :edit, :update, :destroy]

  def index
    @notes = Note.order(updated_at: :desc)
  end

  def show
  end

  def new
    @note = Note.new
  end

  def create
    @note = Note.new(note_params)
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
    params.require(:note).permit(:title, :content)
  end

  def find_note
    @note = Note.find(params[:id])
  end
end
