class Comment < ApplicationRecord
    validates :body, :commenter_id, :article_id, presence: true 
    validates :body, inclusion: {in: 1..500}

    belongs_to: :article 

    has_many: :replies 
        foreign_key: :parent_comment_id,
        class_name: :Comment 

    belongs_to: :parent_comment, 
        foreign_key: :parent_comment_id,
        class_name: :Comment
end 
