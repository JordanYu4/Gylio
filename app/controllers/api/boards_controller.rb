class Api::BoardsController < ApplicationController
  before_action :require_login

  def show
    @board = Board.find(params[:id])
  end

  def index
    boards = Board.all

    # if params[:user_id]
    #   boards = boards.where(:user_id == current_user.id)
    # end

    @boards = boards
    render :index
  end

  def create
    @board = Board.new(board_params)

    if @board.save
      render :show
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def update
    @board = Board.find(params[:board_id])
    # execute edits
    render :show
  end

  def destroy

  end

  private

  def board_params
    params.require(:board).permit(:title)
  end

end
