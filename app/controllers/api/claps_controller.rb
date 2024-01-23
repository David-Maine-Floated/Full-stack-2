class Api::ClapsController < ApplicationController


    def create 
        @clap = Clap.new(clap_params)
        if @clap.save 
            puts 'Clap Saved!'
            render '/api/claps/show'
        else 
            render json: {errors: @clap.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def index
        @claps = Clap.all 
        render '/api/claps/index'
    end

    def destroy 
        @clap = Clap.find_by(id: params[:clapId]) 
        if @clap.delete 
            render json: 'Article delete'
        else  
            render json: {errors: @clap.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def for_article
        @claps = Clap.where(article_id: params[:article_id])
        if @claps 
            render '/api/claps/for_article'
        else 
            render json: {errors: @claps.errors.full_messages}, status: :unprocessable_entity
        end
    end


private 
    
    def clap_params 
        params.require(:clap).permit(:liker_id, :article_id, :id)
    end


end