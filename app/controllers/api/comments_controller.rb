class Api::CommentsController < ApplicationController


    def create 
        debugger
        @comment = Comment.new(comment_params)
        if @comment.save 
            debugger
            puts 'Clap Saved!'
            render '/api/comments/show' 
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
        @comments = Clap.includes(:user).where(article_id: params[:article_id])
        if @comments
            render '/api/comments/for_article'
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
private 
    
    def comment_params 
        params.require(:comment).permit(:article_id, :id, :commenter_id, :body)
    end



end
