# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

<<<<<<< HEAD
ActiveRecord::Schema.define(version: 2021_09_06_101028) do
=======
ActiveRecord::Schema.define(version: 2021_09_01_100714) do
>>>>>>> 02977e8fcda45da261faf3856e05a4562d77eff4

  create_table "collections", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "note_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["note_id"], name: "index_collections_on_note_id"
    t.index ["user_id"], name: "index_collections_on_user_id"
  end
<<<<<<< HEAD

  create_table "comments", force: :cascade do |t|
    t.integer "user_id", null: false
    t.text "content"
    t.integer "note_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["note_id"], name: "index_comments_on_note_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end
=======
>>>>>>> 02977e8fcda45da261faf3856e05a4562d77eff4

  create_table "notes", force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id"
    t.boolean "comment_status", default: true
    t.index ["user_id"], name: "index_notes_on_user_id"
  end

  create_table "taggings", force: :cascade do |t|
    t.integer "tag_id", null: false
    t.integer "note_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["note_id"], name: "index_taggings_on_note_id"
    t.index ["tag_id"], name: "index_taggings_on_tag_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.string "photo"
    t.text "intro"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "collections", "notes"
  add_foreign_key "collections", "users"
<<<<<<< HEAD
  add_foreign_key "comments", "notes"
  add_foreign_key "comments", "users"
=======
>>>>>>> 02977e8fcda45da261faf3856e05a4562d77eff4
  add_foreign_key "notes", "users"
  add_foreign_key "taggings", "notes"
  add_foreign_key "taggings", "tags"
end
