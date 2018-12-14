# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_12_14_163856) do

  create_table "admins", force: :cascade do |t|
    t.string "nickname"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.string "authentication_token", limit: 30
    t.integer "type_id", default: 1
    t.index ["authentication_token"], name: "index_admins_on_authentication_token", unique: true
    t.index ["email"], name: "index_admins_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true
  end

  create_table "courses", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "admin_id", default: 1
    t.index ["admin_id"], name: "index_courses_on_admin_id"
  end

  create_table "exams", force: :cascade do |t|
    t.string "date", default: "", null: false
    t.string "topic", default: "", null: false
    t.integer "course_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "admin_id", default: 1
    t.index ["admin_id"], name: "index_exams_on_admin_id"
    t.index ["course_id"], name: "index_exams_on_course_id"
  end

  create_table "grades", force: :cascade do |t|
    t.integer "value", default: 0, null: false
    t.integer "exam_id"
    t.integer "student_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "admin_id", default: 1
    t.index ["admin_id"], name: "index_grades_on_admin_id"
    t.index ["exam_id"], name: "index_grades_on_exam_id"
    t.index ["student_id"], name: "index_grades_on_student_id"
  end

  create_table "sections", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.integer "course_id"
    t.integer "teacher_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "admin_id", default: 1
    t.index ["admin_id"], name: "index_sections_on_admin_id"
    t.index ["course_id"], name: "index_sections_on_course_id"
    t.index ["teacher_id"], name: "index_sections_on_teacher_id"
  end

  create_table "sections_students", id: false, force: :cascade do |t|
    t.integer "section_id", null: false
    t.integer "student_id", null: false
    t.index ["section_id", "student_id"], name: "index_sections_students_on_section_id_and_student_id"
  end

  create_table "students", force: :cascade do |t|
    t.string "first_name", default: "", null: false
    t.string "last_name", default: "", null: false
    t.string "email", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.string "authentication_token", limit: 30
    t.integer "admin_id", default: 1
    t.integer "type_id", default: 3
    t.index ["admin_id"], name: "index_students_on_admin_id"
    t.index ["authentication_token"], name: "index_students_on_authentication_token", unique: true
    t.index ["email"], name: "index_students_on_email", unique: true
    t.index ["reset_password_token"], name: "index_students_on_reset_password_token", unique: true
  end

  create_table "teachers", force: :cascade do |t|
    t.string "first_name", default: "", null: false
    t.string "last_name", default: "", null: false
    t.string "email", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.string "authentication_token", limit: 30
    t.integer "admin_id", default: 1
    t.integer "type_id", default: 2
    t.index ["admin_id"], name: "index_teachers_on_admin_id"
    t.index ["authentication_token"], name: "index_teachers_on_authentication_token", unique: true
    t.index ["email"], name: "index_teachers_on_email", unique: true
    t.index ["reset_password_token"], name: "index_teachers_on_reset_password_token", unique: true
  end

end
