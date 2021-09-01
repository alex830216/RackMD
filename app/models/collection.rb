class Collection < ApplicationRecord
  belongs_to :user
  belongs_to :note
end
