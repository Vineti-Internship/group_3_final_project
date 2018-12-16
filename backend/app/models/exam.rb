class Exam < ApplicationRecord
  
  has_many :grades, dependent: :destroy

  belongs_to :course
  belongs_to :admin
  
end
