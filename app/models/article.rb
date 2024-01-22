class Article < ApplicationRecord
    validates :title, :body, :author_id, presence: true 
    validates :title, uniqueness: true

    def ensure_photo
        unless self.photo.attached?
            errors.add(:photo, "must be attached")
        end
    end

    require "open-uri"

# ...

    before_validation :generate_default_pic

    # ...

    def generate_default_pic
        unless self.photo.attached?
            # Presumably you have already stored a default pic in your seeds bucket
            file = URI.open("https://maineum-seeds1.s3.amazonaws.com/default.jpg");
            self.photo.attach(io: file, filename: "default.jpg")
        end
    end




    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    has_one_attached :photo
        
end
