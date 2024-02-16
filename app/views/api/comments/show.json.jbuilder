  json.extract! @comment, :body, :created_at, :article_id, :updated_at, :username, :id
  json.photoUrl @user.photo.attached? ? @user.photo.url : nil
  json.authorId @user.id