class Api::ArticlesController < ApplicationController

    before_action :require_logged_in, only: [:create]

    def index 
        @articles = Article.all 
    end


    def create 
        @article = Article.new(article_params)
        if @article.save 
            render '/api/articles/show'
        else  

            render json: {errors: @article.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show 
        @article = Article.find_by(id: params[:id])
        if @article 
            render '/api/articles/show'
        else  
            render json: {errors: @article.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def by_author
        author_id = params[:author_id]
        @articles = Article.where(author_id: author_id)
    end

    def update 
        @article = Article.find_by(id: params[:article][:id])
        if @article.update(article_params)
            render '/api/articles/show'
        else  

            render json: {errors: @article.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy 
        @article = Article.find_by(id: params[:articleId])

        if @article.delete 
            render json: 'Article deleted'
        else  
            render json: {errors: @aricle.errors.full_messages}, status: :unprocessable_entity
        end
    end

    
private 


    def article_params 
        params.require(:article).permit(:title, :body, :author_id, :id, :photo, :authorId)
    end

end