class AddSectionIdToExams < ActiveRecord::Migration[5.2]
  def change
    add_reference :exams, :section, foreign_key: true
  end
end
