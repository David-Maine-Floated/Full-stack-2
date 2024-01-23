class Clap < ApplicationRecord
    debugger
    validates :article_id, :liker_id, presence: true 

    belongs_to :liker, 
        foreign_key: :liker_id,
        class_name: :User 

    belongs_to :article 


end