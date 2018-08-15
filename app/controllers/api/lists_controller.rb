class Api::ListsController < ApplicationController
  before_action :require_login

  def show
    render :json
  end

  def index
    render :json
  end

  def create
    @list = List.new(list_params);
    if @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
  end

  private

  def list_params
    params.require(:list).permit(:title)
  end

end
