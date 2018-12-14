class AdminSerializer < ActiveModel::Serializer
  attributes :id, :nickname, :password, :email, :type_id, :authentication_token
end
