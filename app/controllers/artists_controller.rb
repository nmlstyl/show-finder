class ArtistsController < ApplicationController

  def index
    @artists = Artist.all
    render json: @artists
  end

  def create
    @user = User.find(params[:user_id])
    @artist = @user.artists.build(name: params[:name])
    if @artist.save
      render json: {ArtistCreated: true, name: @artist.name, id: @artist.id}
    else
      render json: {ArtistCreated: false}
    end
  end

end
