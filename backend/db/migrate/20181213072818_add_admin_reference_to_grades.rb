class AddAdminReferenceToGrades < ActiveRecord::Migration[5.2]
  def change
    add_reference :grades, :admin, foreign_key: true
  end
end
