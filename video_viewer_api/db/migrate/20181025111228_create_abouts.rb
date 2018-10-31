class CreateAbouts < ActiveRecord::Migration[5.2]
  def change
    create_table :abouts do |t|

    	t.text :about
    	t.text :date
    	t.integer :user_id

      t.timestamps
    end
  end
end
