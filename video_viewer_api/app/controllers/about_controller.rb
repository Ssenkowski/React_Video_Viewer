class AboutController < ApplicationController

	def index
		render json: About.all
	end


	def create
		
		about = About.new(about_params)

		if about.save
			render json: about
		else
			render json: { message: about.errors }, status: 301
		end
	end

	def show
		render json: About.find_by_id(id: params[:id])
	end

	def update
		if @about.update(about_params)
			render json: @about
		else
		  render json: { message: about.errors }, status: 301
		end

	end

	def destroy
		if @about.destroy
			render status: 204
		else
			render json: { message: "Unable to remove about"}, status: 400
		end
	end


	private

	def about_params
		params.require(:about).permit(:about, :date)
	end
end
