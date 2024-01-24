
  json.extract! @article, :title, :body, :topics, :created_at, :updated_at, :author_id, :id
  json.photoUrl @article.photo.attached? ? @article.photo.url : nil
  json.extract! @article.author, :username
  json.userPhotoUrl @article.author.photo.attached? ? @article.photo.url : nil
  json.claps do
    @article.claps.each do |clap|
      json.set! clap.liker_id do
        json.extract! clap, :id, :clap_count, :article_id, :liker_id
      end
    end

    # Add an empty object if @article.claps is empty
    json.set! '' do
    end if @article.claps.empty?
  end


