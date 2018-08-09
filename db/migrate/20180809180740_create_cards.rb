class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :title, null: false
      t.integer :list_id, null: false
      t.text :description
      t.datetime :due_date

      t.timestamps
    end

    add_index :cards, :list_id
    add_index :cards, :due_date
  end
end
