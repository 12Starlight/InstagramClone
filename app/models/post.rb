class Post < ApplicationRecord
  validates :title, :description, presence: true 
  
  has_many_attached :photos

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :commments 
  has_many :likes, as: :likeable  
end