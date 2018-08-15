class Api::BoardsController < ApplicationController
  before_action :require_login

  def show
    @board = Board.find(params[:id])
  end

  def index
    @boards = current_user.boards
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

  def create_new(val)
    @board = Board.new(val)
    @board_memberships = BoardMembership.new

    @board_memberships.board_id = @board.id
    .save
    .save

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
