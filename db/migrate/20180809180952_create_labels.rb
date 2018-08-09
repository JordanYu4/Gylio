class CreateLabels < ActiveRecord::Migration[5.2]
  def change
    create_table :labels do |t|
      t.integer :board_id, null: false
      t.string :title
      t.string :color, null: false

      t.timestamps
    end

    add_index :labels, :board_id
  end
end
