class ApplicationController < ActionController::Base
  # protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token

  helper_method :logged_in?, :current_user

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout!
    @current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!@current_user
  end

end
