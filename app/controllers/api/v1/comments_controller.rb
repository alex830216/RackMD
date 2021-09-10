class Api::V1::CommentsController < ApplicationController
  def editcomment
    comment = Comment.find(params[:id])
    comment.update(comment_params)
    render json: { status: "ok", id: params[:id] }
  end

  private
  def comment_params
    params.require(:comment)
          .permit(:content)
          .merge(user_id: current_user.id)
  end
end