class Post < ApplicationRecord
  validates :title, presence: true 
  
  has_many_attached :photos

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
end