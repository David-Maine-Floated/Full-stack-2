class Api::AritlcesController < ApplicationController

    def create 
        @article = Article.new(article_params)

        if @article.save 
            # render '/api/articles/show'
            #finish dis

    end



private 


    def article_params 
        params.require(:article).permit(:title, :body, :topics)
    end

end