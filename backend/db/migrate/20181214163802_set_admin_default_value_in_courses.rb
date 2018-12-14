class SetAdminDefaultValueInCourses < ActiveRecord::Migration[5.2]
  def change
    change_column :courses, :admin_id, :integer, :default => 1
  end
end
