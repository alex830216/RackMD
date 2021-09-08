class Collection < ApplicationRecord
  paginates_per 3
  belongs_to :user
  belongs_to :note
  def self.search(search) 
	  if search
	    where(['title LIKE ?', "%#{search}%"]) 
	  else
	    all 
	  end
	end
end
