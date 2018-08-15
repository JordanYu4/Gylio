class Api::ListsController < ApplicationController
  before_action :require_login

  def show
    render :json
  end

  def index
    lists = List.all
    @lists = lists.where(board_id: params[:id])
    render :json
  end

  def create
    @list = List.new(list_params)
    @list.board_id = params[:board_id]
    if @list.save
      render :show # render index instead?
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
    params.require(:list).permit(:title) #.require(:list)
  end

end
