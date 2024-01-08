class Article < ApplicationRecord
    validates: :title, :body, :author_id, null: false 
    validates: :title, :body, length: {minimum: 1}
end
