class CreateExams < ActiveRecord::Migration[5.2]
  def change
    create_table :exams do |t|
      t.datetime :date
      t.string :topic
      t.references :course, foreign_key: true

      t.timestamps
    end
  end
end
