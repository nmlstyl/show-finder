require 'rails_helper'
require 'spec_helper'

RSpec.describe 'Artist', :type => :model do
  it "has a name" do
    @artist = Artist.new(name: 'Joey')
    expect(@artist.name).to eq 'Joey'
  end
end
