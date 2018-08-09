class CreateLabelings < ActiveRecord::Migration[5.2]
  def change
    create_table :labelings do |t|
      t.integer :card_id, null: false
      t.integer :label_id, null: false

      t.timestamps
    end

    add_index :labelings, [:card_id, :label_id], unique: true
    add_index :labelings, [:label_id]
  end
end
