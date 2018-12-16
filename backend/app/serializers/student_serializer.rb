class StudentSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :password, :email, :type_id, :authentication_token
  
  has_many :sections
  has_one :admin
  has_many :grades

end
