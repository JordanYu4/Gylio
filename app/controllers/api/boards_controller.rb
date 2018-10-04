class Api::BoardsController < ApplicationController
  before_action :require_login

  def show
    @board = Board.find(params[:id])
    render :show
  end

  def index
    @boards = current_user.boards
    render :index
  end

  def create
    @board = Board.new(create_board_params) # refer to reddit lite to refactor w/ inverse of
    unless @board.save
      render json: @board.errors.full_messages, status: 422
    end
    create_board_membership(@board.id, current_user.id, true)
  end

  def create_board_membership(board_id, member_id, is_admin)
    @board_membership = BoardMembership.new(
      board_id: board_id,
      member_id: member_id,
      admin: is_admin
    )
    if @board_membership.save
      render :show
    else
      render json: @board_membership.errors.full_messages, status: 422
    end
  end

  def update
    @board = Board.find(params[:id])
    puts @board
    @board.update_attributes(edit_board_params)
    if @board.save
      render :show
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def destroy
    @board.destroy
  end

  private

  def create_board_params
    params.require(:board).permit(:title)
  end

  def edit_board_params
    params.require(:board).permit(:id, :title, :background_color, list_order: [])
  end

end
