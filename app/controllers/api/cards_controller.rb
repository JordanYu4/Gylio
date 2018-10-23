class Api::CardsController < ApplicationController
  before_action :require_login

  def show
    @card = Card.find(params[:id])
    render :show
  end

  def index
    current_list = List.find(params[:list_id])
    @cards = current_list.cards
    render :index
  end

  def create
    @card = Card.new(create_card_params)
    if @card.save
      list = List.find(@card.list_id)
      new_card_order = list.card_order.dup << @card.id 
      list.update_attributes(card_order: new_card_order)
      if list.save
        render :show
      else
        render json: list.errors.full_messages, status: 422
      end
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def update
    @card = Card.find(params[:id])
    @card.update_attributes(edit_card_params)
    if @card.save
      render :show
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def destroy
    @card = Card.find(params[:id])
    list = List.find(@card.list_id)
    new_card_order = list.card_order.reject { |id| id == @card.id }
    @card.destroy
    list.update_attributes(card_order: new_card_order)
    unless list.save
      render json: list.errors.full_messages, status: 422
    end
  end

  private

  def create_card_params
    params.require(:card).permit(:title, :list_id)
  end
  
  def edit_card_params
    params.require(:card).permit(:title, :description, :due_date)
  end

end
