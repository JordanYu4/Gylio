class BoardsController < ApplicationController

  def show
    @board = Board.find(params[:board_id])
    render :json
  end

  def index
    @boards = Board.all
    render :json
  end

  def create
    @board = Board.new(board_params)

    if @board.save
      render "api/boards/:boardId"
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def update
    @board = Board.find(params[:board_id])
  end

  def destroy

  end

  private

  def board_params
    params.require(:board).permit(:title, :background_color)
  end

end
