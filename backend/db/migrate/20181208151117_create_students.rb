class CreateStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      t.string :first_name, default: "", null:false
      t.string :last_name, default: "", null:false
      t.string :password, default: "", null:false
      t.string :email, default: "", null:false

      t.timestamps
    end
  end
end
