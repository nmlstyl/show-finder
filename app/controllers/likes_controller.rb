class LikesController < ApplicationController

  def like_action
    if Like.where(artist_id: params[:artist_id], user_id: params[:user_id]).exists?
      @like = Like.find_by(artist_id: params[:artist_id], user_id: params[:user_id])

      if @like.switch == 'true'
        @like.switch = 'false'
      else
        @like.switch = 'true'
      end

      @like.save

      @user = @like.user
      # sort
      render json: @user.artists
    else
      @like = Like.create(like_params)

      @like.save

      @user = @like.user
      # sort
      render json: @user.artists
    end
  end

  private

  def like_params
     params.permit(:artist_id, :user_id)
  end
end
