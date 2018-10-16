class PostsController < ApplicationController
	def create

	end

	def update

	end

	def destroy

	end

private

	def post_params
		params.require(:post).permit(:title, :body, uploads: [])
end
