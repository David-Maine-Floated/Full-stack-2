class ApplicationController < ActionController::API
    include ActionController::RequestForgeryProtection


  rescue_from StandardError, with: :unhandled_error
  rescue_from ActionController::InvalidAuthenticityToken,
  with: :invalid_authenticity_token
  
  protect_from_forgery with: :exception

  before_action :attach_authenticity_token 

  def attach_authenticity_token 
    headers['X-CSRF-TOKEN'] = masked_authenticity_token(session)
  end


  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login!(user)

    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout!
    # reset the `current_user`'s session cookie, if one exists
    # clear out token from `session` cookie
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil # so that subsequent calls to `current_user` return nil
  end

  def require_logged_in
    unless current_user
      render json: { message: 'Unauthorized' }, status: :unauthorized
    end
  end


  def require_logged_in
    unless current_user
      render json: { message: 'Unauthorized' }, status: :unauthorized 
    end
  end


private 

  def attach_authenticity_token 
    headers['X-CSRF-TOKEN'] = masked_authenticity_token(session)
  end

  def invalid_authenticity_token
  render json: { message: 'Invalid authenticity token' }, 
    status: :unprocessable_entity
end

def unhandled_error(error)
  if request.accepts.first.html?
    raise error
  else
    @message = "#{error.class} - #{error.message}"
    @stack = Rails::BacktraceCleaner.new.clean(error.backtrace)
    render 'api/errors/internal_server_error', status: :internal_server_error

    logger.error "\n#{@message}:\n\t#{@stack.join("\n\t")}\n"
  end
end




end
