class Comment < ApplicationRecord
    validates :body, :commenter_id, :article_id, :username, presence: true  
    validates :body, length: { in: 1..500 }

    belongs_to :article 

    belongs_to :commenter, class_name: 'User', foreign_key: 'commenter_id'

    has_many :replies, 
        foreign_key: :parent_comment_id,
        class_name: :Comment 

    belongs_to :parent_comment, 
        foreign_key: :parent_comment_id,
        class_name: :Comment,
        optional: true
end 
