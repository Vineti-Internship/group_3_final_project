class ExamSerializer < ActiveModel::Serializer
  attributes :id, :date, :topic
  
  has_one :course
  has_one :admin
  has_one :section

end
