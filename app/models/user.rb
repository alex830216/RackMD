class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable,
         :registerable,
         :recoverable,
         :rememberable,
         :validatable,
         :omniauthable, omniauth_providers: [:github]

  has_many :notes, dependent: :destroy
  has_many :collections, dependent: :destroy
  has_many :collected_notes, through: :collections, source: :note, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :favorite_notes, through: :likes, source: :note, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :tags, dependent: :destroy
  def favorite?(n)
    favorite_notes.exists?(n.id)
  end

  def collection?(n)
    collected_notes.exists?(n.id)
  end
  
  def self.from_omniauth(access_token)
    data = access_token.info
    user = User.where(email: data['email']).first
    unless user
        user = User.create(name: data['name'],
           email: data['email'],
           password: Devise.friendly_token[0,20]
        )
    end
    user
  end
end
