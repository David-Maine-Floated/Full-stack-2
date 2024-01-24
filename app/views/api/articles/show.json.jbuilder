
  json.extract! @article, :title, :body, :topics, :created_at, :updated_at, :author_id, :id
  json.photoUrl @article.photo.attached? ? @article.photo.url : nil
  json.extract! @article.author, :username
  json.userPhotoUrl @article.author.photo.attached? ? @article.photo.url : nil
  json.claps do 
    json.array! @article.claps do |clap|
      json.extract! clap, :id, :clap_count, :article_id
    end
  end
