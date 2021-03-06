json.pokemon do 
    json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type, :moves, :item_ids
    begin
        json.image_url asset_path("pokemon_snaps/#{@pokemon.image_url}")
    rescue
        json.image_url @pokemon.image_url
    end
end 

json.items do 
    @pokemon.items.each do |item|
        json.set! item.id do
            json.extract! item, :id, :name, :pokemon_id, :price, :happiness
            json.image_url asset_path(item.image_url)


            
            # begin
            #     json.image_url asset_path("images/#{item.image_url}")
            #     # or 
            #     # json.image_url asset_path("#{item.image_url}")
            # rescue 
            # end
        end
    end
end