class AddTopTopicsMsecsColumns < ActiveRecord::Migration[5.2]
  def change
    [:daily, :weekly, :monthly, :quarterly, :yearly].each do |period|
        add_column :top_topics, "#{period}_msecs_count".to_sym, :integer, null: false, default: 0
    end
  end
end
