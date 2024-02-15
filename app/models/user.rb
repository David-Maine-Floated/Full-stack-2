class User < ApplicationRecord
  validates :email, :session_token, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, allow_nil: true, length: { in: 6..40 } 
  validates :username, presence: true 
  has_secure_password

  before_validation :ensure_session_token
  
  has_one_attached :photo 

  has_many :comments, 
  foreign_key: 'commenter_id', 
  class_name: 'Comment'
  
  
  def self.find_by_credentials(email, password) 


      user = User.find_by(email: email)
   
      #user && user.authenticate(password)
    if user&.authenticate(password)
      return user 
    else  
      return nil 
    end
  end


  def reset_session_token! 
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end


  def require_logged_in
    unless current_user
      render json: { message: 'Unauthorized' }, status: :unauthorized 
    end
  end

  private 


  def generate_unique_session_token 
    while true 
      token = SecureRandom.urlsafe_base64
      return token unless User.exists?(session_token: token)
    end
  end

  def ensure_session_token 
    self.session_token ||= generate_unique_session_token
  end

  
  has_one_attached :user_photo 



end
