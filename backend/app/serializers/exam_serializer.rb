class ExamSerializer < ActiveModel::Serializer
  attributes :id, :date, :topic
  has_one :course
end
