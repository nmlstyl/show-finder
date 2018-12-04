class LikesController < ApplicationController

  def like_action
    request_to_params
    if Like.where(arists_id: params[:artist_id], user_id: params[:user_id]).exist?
      binding.pry
    else
      @like = Like.create(like_params)
      render json: @like
    end
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
