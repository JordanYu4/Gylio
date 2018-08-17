class Api::CardsController < ApplicationController
  before_action :require_login

  def show
    @card = Card.find(params[:id])
    render :json
  end

  def index
    
    render :json
  end

  def create
    @card = Card.new(card_params)
    unless @card.save
      render json: @card.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
  end

  private

  def card_params
    params.require(:card).permit(:title)
  end

end
