class StudentSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :password, :email, :authentication_token
  has_and_belongs_to_many :sections

end
