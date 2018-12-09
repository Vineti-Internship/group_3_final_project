class Student < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  # Association with sections
  has_and_belongs_to_many :sections

  # Add validators
  validates :first_name, :last_name, :password, :email, presence: true

end
