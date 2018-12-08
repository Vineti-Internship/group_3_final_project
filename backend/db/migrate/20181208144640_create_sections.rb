class CreateSections < ActiveRecord::Migration[5.2]
  def change
    create_table :sections do |t|
      t.string :name, default: "", null:false
      t.references :course, foreign_key: true
      t.references :teacher, foreign_key: true

      t.timestamps
    end
  end
end
