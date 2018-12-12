class Teacher < ApplicationRecord
  acts_as_token_authenticatable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_one :section, dependent: :destroy

  # Add Validators
  validates :first_name, :last_name, :password, :email, presence: true
end
