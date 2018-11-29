class ArtistsController < ApplicationController

  def index
    @artists = Artist.all
    @artists = @artists.sort_by { |artist| artist.name.downcase }
    render json: @artists
  end

  def create
    @user = User.find(params[:user_id])
    @artist = @user.artists.build(artist_params)
    if @artist.save
      render json: {ArtistCreated: true, name: @artist.name, id: @artist.id}
    else
      render json: {ArtistCreated: false}
    end
  end

  def artist_params
     params.permit(:name)
  end

end
