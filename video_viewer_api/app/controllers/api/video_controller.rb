class Api::VideoController < ApplicationController
	skip_before_action :verify_authenticity_token

	before_action :set_video, only: [:show, :update, :destroy]

	def index
		render json: Video.all
	end

	def new
		@video = Video.new(video_params)
	end

	def create
		
		@video = Video.new(video_params)

		if @video.save
			render json: @video
		else
			render json: { message: @video.errors }, status: 301
		end
	end

	def show
		render json: Video.find_by_id(id: params[:id])
	end

	def update
		if @video.update(video_params)
			render json: @video
		else
		  render json: { message: video.errors }, status: 301
		end

	end

	def destroy
		if @video.present?
			@video.destroy!
			render status: 204
		else
			render json: { message: "Unable to remove video"}, status: 400
		end
	end

	private

	def video_params
		params.require(:video).permit(:url, :name)
	end

	def set_video
		@video = Video.find_by_id(id: params[:id])
	end
end