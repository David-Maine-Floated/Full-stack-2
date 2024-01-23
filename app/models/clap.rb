class Clap < ApplicationRecord
    validates :article_id, :liker_id, :clap_count, presence: true 
    validates :clap_count, inclusion: { in: 1..50 }
    
    belongs_to :liker, 
        foreign_key: :liker_id,
        class_name: :User 

    belongs_to :article 


end