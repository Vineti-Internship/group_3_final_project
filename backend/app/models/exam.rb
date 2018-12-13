class Exam < ApplicationRecord
  belongs_to :course
  has_one :grade, dependent: :destroy
  belogs_to :admin
end
