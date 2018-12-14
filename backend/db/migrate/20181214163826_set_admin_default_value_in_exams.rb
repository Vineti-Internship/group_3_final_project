class SetAdminDefaultValueInExams < ActiveRecord::Migration[5.2]
  def change
    change_column :exams, :admin_id, :integer, :default => 1
  end
end
