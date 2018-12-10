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
    binding.pry
    if find_artist_casefree # if artist is found
      @artist = Artist.find_by(name: params[:name]) # assign artist @artist
      if !@user.artists.find_by(id: @artist.id) # if association has been broken - fix it
        @user.artists << @artist
      end
    else
      @artist = Artist.create(artist_params) # else create a new artist
      @user.artists << @artist
      @artist.save
    end

    if @artist
      render json: { artistCreated: true, name: @artist.name, id: @artist.id, likes: @artist.likes }
    else
      render json: { artistCreated: false }
    end
  end

  def destroy
    @user = User.find(params[:user_id])
    @artist = Artist.find(params[:id])
    @user.artists.delete(Artist.find(params[:id]))

    render json: { name: @artist.name, id: @artist.id, likes: @artist.likes }
  end

  private

  def find_artist_casefree
    result = false
    Artist.all.each do |artist|
      if artist.name.casecmp?(params[:name])
        result = artist
      end
    end
    result
  end

  def request_to_params
    data = JSON.parse(request.raw_post)
    params[:name] = data['name']
  end

  def artist_params
     params.permit(:name)
  end

end
