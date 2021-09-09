class Note < ApplicationRecord
  paginates_per 3
  belongs_to :user
  has_many :comments
  has_many :taggings
  has_many :tags, through: :taggings
  has_many :likes, dependent: :destroy
  has_many :collections
  has_many :subscribes

  # tag_list 的 getter
  def tag_list
    tags.map(&:title).join(', ')
  end

  # tag_list 的 setter
  def tag_list=(title)
    self.tags = title.split(',').map do |item|
      Tag.where(title: item.strip).first_or_create!
    end
  end
  
  def self.search(search) 
    if search
      where(['title LIKE ?', "%#{search}%"]) 
    else
      all 
    end	
  end 
end
