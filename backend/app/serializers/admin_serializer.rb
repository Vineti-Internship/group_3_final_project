class AdminSerializer < ActiveModel::Serializer
  attributes :id, :nickname
  has_many :courses
  has_many :exams
  has_many :grades
  has_many :sections
  has_many :students
  has_many :teachers
end
