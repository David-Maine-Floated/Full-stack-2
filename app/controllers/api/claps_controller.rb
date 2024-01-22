class Api::ClapsController < ApplicationController


    def create 
        @clap = Clap.new(clap_params)
            if @clap.save 
                render '/api/claps/show'
            else  
                render json: {errors: @clap.errors.full_messages}, status: :unprocessable_entity
            end
    end


private 
    
    def article_params 
        params.require(:clap).permit(:liker_id, :artilce_id)
    end


end