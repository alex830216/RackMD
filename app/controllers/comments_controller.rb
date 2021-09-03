class CommentsController < ApplicationController
  before_action :find_note,only: [:create]
  before_action :find_comment,only: [:edit, :update, :destroy]

  def create
    @comment = @note.comments.new(comment_params)
    
    if @comment.save
      @content = comment_params[:content]
    else
      redirect_to "/"
    end
  end
  
  def edit
  end

  def update
    if @comment.update(comment_params)
      redirect_to note_path(@comment.note_id)
    else
      render :edit
    end
  end

  def destroy
    if @comment.destroy
      redirect_to note_path(@comment.note_id)
    end
  end

  private
  def comment_params
    params.require(:comment)
          .permit(:content)
          .merge(user_id: current_user.id)
  end

  def find_note
    @note = Note.find(params[:note_id])
  end
  def find_comment
    @comment = Comment.find(params[:id])
  end
end

