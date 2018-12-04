class LikesController < ApplicationController

  def create
    @like = Like.create(like_params)
    render json: @like
  end

  def update
    @like = Like.update(like_params)
    render json: @like
  end

  private

  def request_to_params
    data = JSON.parse(request.raw_post)
    params[:artist_id] = data['artist_id']
    params[:user_id] = data['user_id']
    params[:switch] = data['switch']
  end

  def like_params
     params.permit(:artist_id, :user_id, :switch)
  end
end
