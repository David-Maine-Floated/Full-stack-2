class Api::CommentsController < ApplicationController


    def create 
        @comment = Comment.new(comment_params)
        if @comment.save 
            puts 'Clap Saved!'
            # render 
        else 
            render json: {errors: @comment.errors.full_messages}, status: :unprocessable_entity
        end
    end


    def destroy 
        @comment = Comment.find_by(id: params[:clapId]) 
        if @comment.delete 
            render json: 'Comment deleted'
        else  
            render json: {errors: @comment.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def for_article
        @comments = Clap.where(article_id: params[:article_id])
        if @comments
            # render '
        else 
            render json: {errors: @claps.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        @comment = Comment.find_by(id: clap_params[:id])
        if @comment.update(clap_params)
            # render '/api/claps/show'
        else  
            render json: {errors: @clap.errors.full_messages}, status: :unprocessable_entity
        end
    end



end
