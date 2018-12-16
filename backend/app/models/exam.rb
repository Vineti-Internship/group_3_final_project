class Exam < ApplicationRecord
  
  has_many :grades, dependent: :destroy

  belongs_to :course
  belongs_to :admin
  belongs_to :section
  
end
