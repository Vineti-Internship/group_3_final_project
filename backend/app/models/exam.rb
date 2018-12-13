class Exam < ApplicationRecord
  
  has_one :grade, dependent: :destroy

  belongs_to :course
  belongs_to :admin
  
end
