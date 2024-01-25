
  json.extract! @article, :title, :body, :topics, :created_at, :updated_at, :author_id, :id
  json.photoUrl @article.photo.attached? ? @article.photo.url : nil
  json.extract! @article.author, :username
  json.userPhotoUrl @article.author.photo.attached? ? @article.photo.url : nil
  


if @article.claps.length == 0 
  # debugger
  json.claps ({})
else  
  # debugger
  json.claps do
    @article.claps.each do |clap|
      json.set! clap.liker_id do
        json.extract! clap, :id, :clap_count, :article_id, :liker_id
      end
    end
  end
end


# json.claps do
#   @article.claps.each do |clap|
#     json.set! clap.liker_id do
#       json.extract! clap, :id, :clap_count, :article_id, :liker_id
#     end
#   end

#   json.set! '' do
#   end if @article.claps.empty?
# end