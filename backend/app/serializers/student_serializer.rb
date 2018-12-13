class StudentSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :password, :email, :authentication_token
  
  has_many :sections
  has_one :admin


end
