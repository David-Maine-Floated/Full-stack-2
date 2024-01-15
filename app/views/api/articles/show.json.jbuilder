json.article do
  json.extract! @article, :title, :body, :topics, :created_at, :updated_at, :author_id, :id

end