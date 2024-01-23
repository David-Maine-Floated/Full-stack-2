
json.array! @claps do |clap|
    json.extract! clap, :liker_id, :article_id, :id  
end