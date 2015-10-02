class Game < ActiveRecord::Base
  def initialize
    @deck = build_deck
  end
end
