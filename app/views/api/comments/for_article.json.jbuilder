    json.array! @comments do |comment|
    json.extract! comment, :body, :created_at, :user, :updated_at, :id
   
    end
