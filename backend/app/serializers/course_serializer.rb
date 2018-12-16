class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_one :admin
  has_many :exams
  
end
