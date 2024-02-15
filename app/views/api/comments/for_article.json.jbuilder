    json.array! @comments do |comment|
    json.extract! comment, :body, :created_at, :commenter, :updated_at, :id
   
    end
