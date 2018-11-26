class ApplicationController < ActionController::API
  def fallback_index_html
    render :file => 'index.html'
  end
end
