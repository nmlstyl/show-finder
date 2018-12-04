class LikesController < ApplicationController

  def like_action
    if Like.where(artist_id: params[:artist_id], user_id: params[:user_id]).exists?
      @like = Like.find_by(artist_id: params[:artist_id], user_id: params[:user_id])

      if @like.switch == true
        @like.switch = false
      else
        @like.switch = true
      end

      @like.save

      render json: @like
    else
      @like = Like.create(like_params)
      @like.switch = true
      @like.save
      render json: @like
    end
  end

  private

  def like_params
     params.permit(:artist_id, :user_id, :switch)
  end
end
