class ArtistsController < ApplicationController

  def index
    @artists = Artist.all
    @artists = @artists.sort_by { |artist| artist.name.downcase }
    render json: @artists
  end

  def create
    request_to_params
    @user = User.find(params[:user_id])
    @artist = Artist.find_or_create_by(artist_params)
    @user.artists << @artist
    if @artist.save
      render json: { artistCreated: true, name: @artist.name, id: @artist.id }
    else
      render json: { artistCreated: false }
    end
  end

  private

  def request_to_params
    data = JSON.parse(request.raw_post)
    params[:name] = data['name']
  end

  def artist_params
     params.permit(:name)
  end

end
