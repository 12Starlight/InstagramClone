class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User 

  belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Post 
    
  has_many :likes, as: :likeable 
end