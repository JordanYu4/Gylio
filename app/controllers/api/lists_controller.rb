class Api::ListsController < ApplicationController
  before_action :require_login

  def show
    @list = List.find(params[:list_id])
    render :show
  end

  def index
    current_board = Board.find(params[:board_id])
    @lists = current_board.lists
    render :index
  end

  def create
    current_board = Board.find(params[:board_id])
    
    @list = List.new(list_params)
    unless @list.save
      render json: @list.errors.full_messages, status: 422
    end
  end

  def update
    # @list = List.find(params[:listId])
    if @list.update_attributes(list_params)
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def destroy
    @list.destroy
  end

  private

  def list_params
    params.require(:list).permit(:title, :board_id)
  end

end
