class VideoController < ApplicationController

	before_action :set_video, only: [:show, :update, :destroy]

	def index
		video = Video.all

		render json: video
	end

	def new
		@video = Video.new(video_params)
	end

	def create
		video = Video.new(video_params)

		if video.save
			render json: video
		else
			render json: { message: video.errors }, status: 301
		end
	end

	def show
		render json: @video
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
		params.require(:video).permit(:url, :name, :user_id)
	end

	def set_video
		@video = Video.find_by(id: params[:id])
	end

end