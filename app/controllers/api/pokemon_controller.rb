class Api::PokemonController < ApplicationController
    
    def index
        @pokemon = Pokemon.all
        # render :index
    end
    
    def show
        @pokemon = Pokemon.find(params[:id])
    end

    def create
        @pokemon = Pokemon.new(pokemon_params)
        if @pokemon.save
            render :show
        else
            render :json => @pokemon.errors.full_messages, status: 422
        end 
    end

    private

    def pokemon_params
        params.require(:pokemon).permit(:name, :attack, :defense, :image_url, :poke_type, :moves => [])
    end
    
end 