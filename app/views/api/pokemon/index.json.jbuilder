@pokemon.each do |pokemon|
    json.set! pokemon.id do 
        json.extract! pokemon, :id, :name 
        begin
            json.image_url asset_path("pokemon_snaps/#{pokemon.image_url}")
        rescue 
            json.image_url pokemon.image_url
        end
        json.moves []
        json.item_ids
    end
end