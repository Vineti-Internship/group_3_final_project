class Student < ApplicationRecord
  acts_as_token_authenticatable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :grades, dependent: :destroy
  has_and_belongs_to_many :sections, dependent: :destroy
  
  belogs_to :admin

  # Add validators
  validates :first_name, :last_name, :password, :email, presence: true

end
