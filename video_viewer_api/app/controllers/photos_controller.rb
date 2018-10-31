class PhotosController < ApplicationController
	
	def index
		render json: Photo.all
	end

	def create

		photo = Photo.new(photo_params)

		if photo.save
			render json: photo
		else
			render json: { message: photo.errors }, status: 301
		end
	end

	def show
		render json: Photo.find_by_id(id: params[:id])
	end

	def update
		if @photo.update(photo_params)
			render json: @photo
		else
		  render json: { message: photo.errors }, status: 301
		end

	end

	def destroy
		if @photo.destroy
			render status: 204
		else
			render json: { message: "Unable to remove photo"}, status: 400
		end
	end


	private

	def photo_params
		params.require(:photo).permit(:url, :name)
	end
end
