class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :title, null: false
      t.string :background_color, null: false

      t.timestamps
    end

    add_index :boards, :title 
  end
end
