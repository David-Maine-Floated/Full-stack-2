class Article < ApplicationRecord
    validates :title, :body, :author_id, presence: true 
    validates :title, uniqueness: true
    

    belongs_to :author,
        foreign_key: :author_id 
        class_name: :User
end
