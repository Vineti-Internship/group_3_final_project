class AddAdminReferenceToExams < ActiveRecord::Migration[5.2]
  def change
    add_reference :exams, :admin, foreign_key: true
  end
end
