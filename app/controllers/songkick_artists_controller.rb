class SongkickArtistsController < ApplicationController

  def index
    @songkick_artists = SongkickArtist.all
    render json: @songkick_artists
  end

  def create
    @songkick_artist = SongkickArtist.new(name: params[:name], songkick_id: params[:songkick_id])
    @user = User.find(params[:user_id])
    @songkick_artist.user = @user
    if @songkick_artist.save
      render json: {songkickArtistCreated: true, name: @songkick_artist.name, id: @songkick_artist.id, songkick_id: @songkick_artist.songkick_id, user_id: @songkick_artist.user_id}
    else
      render json: {songkickArtistCreated: false}
    end
  end

end
