class Comment < ApplicationRecord
    validates :body, :commenter_id, :article_id, presence :
    validates :body, inclusion: {in: 1..}
end
