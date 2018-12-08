class ArtistsController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    @artists = @user.artists
    @artists = @artists.sort_by { |artist| artist.name.downcase }
    render json: @artists
  end

  def show
    @artist = Artist.find(params[:artist_id])
    render json: @artist
  end

  def create
    request_to_params
    @user = User.find(params[:user_id])

    if !Artist.find_by(artist_params)
      @artist = Artist.create(artist_params)
      @user.artists << @artist
    end

    if @artist.save
      render json: { artistCreated: true, name: @artist.name, id: @artist.id, likes: @artist.likes }
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
