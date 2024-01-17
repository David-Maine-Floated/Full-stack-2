
json.array! @articles do |article|
        json.extract! article, :title, :body, :id
end
