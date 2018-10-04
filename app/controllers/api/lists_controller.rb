class Api::ListsController < ApplicationController
  before_action :require_login

  def show
    @list = List.find(params[:id])
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
    if @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def update
    @list = List.find(params[:id])
    @list.update_attributes(create_list_params)
    if @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
  end

  private

  def create_list_params
    params.require(:list).permit(:title, :board_id)
  end

  def edit_list_params
    params.require(:list).permit(:title, :card_order)
  end

end
