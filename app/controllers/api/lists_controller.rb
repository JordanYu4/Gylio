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
    @list = List.new(create_list_params)
    if @list.save 
      board = Board.find(@list.board_id)
      new_list_order = board.list_order.dup << @list.id 
      board.update_attributes(list_order: new_list_order)
      if board.save 
        render :show
      else
        render json: board.errors.full_messages, status: 422
      end
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def update
    @list = List.find(params[:id])
    @list.update_attributes(edit_list_params)
    if @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def destroy
    @list = List.find(params[:id])
    board = Board.find(@list.board_id)
    new_list_order = board.list_order.reject { |id| id == @list.id }
    @list.destroy
    board.update_attributes(list_order: new_list_order)
    unless board.save 
      render json: board.errors.full_messages, status: 422
    end
  end

  private

  def create_list_params
    params.require(:list).permit(:title, :board_id)
  end

  def edit_list_params
    params.require(:list).permit(:id, :title, :board_id, card_order: [])
  end

end
