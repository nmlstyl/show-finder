class ApplicationController < ActionController::API
  def fallback_index_html
    render :file => 'client/public/index.html'
  end
end
