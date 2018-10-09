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

ActiveRecord::Schema.define(version: 2018_10_09_173104) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "board_memberships", force: :cascade do |t|
    t.integer "member_id", null: false
    t.integer "board_id", null: false
    t.boolean "admin", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["board_id"], name: "index_board_memberships_on_board_id"
    t.index ["member_id", "board_id"], name: "index_board_memberships_on_member_id_and_board_id", unique: true
  end

  create_table "boards", force: :cascade do |t|
    t.string "title", null: false
    t.string "background_color", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "list_order", default: [], array: true
    t.index ["title"], name: "index_boards_on_title"
  end

  create_table "card_memberships", force: :cascade do |t|
    t.integer "member_id", null: false
    t.integer "card_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["card_id"], name: "index_card_memberships_on_card_id"
    t.index ["member_id", "card_id"], name: "index_card_memberships_on_member_id_and_card_id", unique: true
  end

  create_table "cards", force: :cascade do |t|
    t.string "title", null: false
    t.integer "list_id", null: false
    t.text "description"
    t.datetime "due_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["due_date"], name: "index_cards_on_due_date"
    t.index ["list_id"], name: "index_cards_on_list_id"
  end

  create_table "comments", force: :cascade do |t|
    t.text "body", null: false
    t.integer "card_id", null: false
    t.integer "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_comments_on_author_id"
    t.index ["card_id"], name: "index_comments_on_card_id"
  end

  create_table "labelings", force: :cascade do |t|
    t.integer "card_id", null: false
    t.integer "label_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["card_id", "label_id"], name: "index_labelings_on_card_id_and_label_id", unique: true
    t.index ["label_id"], name: "index_labelings_on_label_id"
  end

  create_table "labels", force: :cascade do |t|
    t.integer "board_id", null: false
    t.string "title"
    t.string "color", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["board_id"], name: "index_labels_on_board_id"
  end

  create_table "lists", force: :cascade do |t|
    t.string "title", null: false
    t.integer "board_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "card_ids", default: [], array: true
    t.index ["board_id"], name: "index_lists_on_board_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
