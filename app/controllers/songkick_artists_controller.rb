class SongkickArtistsController < ApplicationController
  def create
    binding.pry
    @songkick_artist = SongkickArtist.new(name: params[:name], songkick_id: params[:songkick_id])
    @user.find(params[:user_id])
    if @songkick_artist.user = @user
      render json: {songkickArtistCreated: true, id: @songkick_artist.id, songkick_id: @songkick_artist.songkick_id, user_id: @songkick_artist.user_id}
    else
      render json: {songkickArtistCreated: false}
    end
  end
end
