class Api::ListsController < ApplicationController
  before_action :require_login

  def show
    render :json
  end

  def index
    current_board = Board.find(params[:board_id])
    @lists = current_board.lists
    render :json
  end

  def create
    @list = List.new(list_params)
    unless @list.save
      render json: @list.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
  end

  private

  def list_params
    params.require(:list).permit(:title, :board_id)
  end

end
