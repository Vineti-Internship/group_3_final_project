class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_one :admin
  
end
