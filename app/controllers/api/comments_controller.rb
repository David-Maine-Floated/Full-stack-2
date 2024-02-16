class Api::CommentsController < ApplicationController


    def create 
        @comment = Comment.new(comment_params)
        @user = User.find(comment_params[:commenter_id])
        if @comment.save 
            puts 'Comment Saved!'
            render '/api/comments/show' 
        else 
            render json: {errors: @comment.errors.full_messages}, status: :unprocessable_entity
        end
    end


    def destroy 
        @comment = Comment.find_by(id: comment_params[:id]) 
        if @comment.delete 
            render json: 'Comment deleted'
        else  
            render json: {errors: @comment.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def for_article
        @comments = Comment.includes(:commenter).where(article_id: params[:article_id])
        if @comments
            render '/api/comments/for_article'
        else 
            render json: {errors: @comments.errors.full_messages}, status: :unprocessable_entity
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
        params.require(:comment).permit(:article_id, :id, :commenter_id, :body, :username)
    end



end
