class CreateExams < ActiveRecord::Migration[5.2]
  def change
    create_table :exams do |t|
      t.string :date, default: "", null:false
      t.string :topic, default: "", null:false
      t.references :course, foreign_key: true

      t.timestamps
    end
  end
end
