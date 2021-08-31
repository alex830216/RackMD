class CommentsController < ApplicationController
  before_action :find_user_note

  def create
    @note.comments.new(comment_params)

    if @note.save
      @content = comment_params[:content]
    else
      redirect_to "/"
    end
  end

  private
  def comment_params
    # comment 的 model 有寫兩個 belongs_to 所以這邊要兩個欄位才能正常送出
		# 用 merge 把 user_id 加進去，讓他變兩個欄位，merge 的參數要是 hash
    params.require(:comment)
          .permit(:content)
          .merge(user_id: current_user.id)
  end

  def find_user_note
    @note = Note.find(params[:note_id])
  end
end
