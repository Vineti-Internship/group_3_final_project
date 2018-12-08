class SectionSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :course
  has_one :teacher
end
