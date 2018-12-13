class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :admins
end
