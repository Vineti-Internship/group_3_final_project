class SessionsController < ApplicationController

  # user = Student.where(email: params[:email]).first || Teacher.where(email: params[:email]).first || Admin.where(email: params[:email]).first

  def create
    user = Student.where(email: params[:email]).first || Teacher.where(email: params[:email]).first || Admin.where(email: params[:email]).first

    @user = user

    if @user&.valid_password?(params[:password])
      render json: @user.authentication_token
    else
      head(:unauthorized)
    end

  end

  def destroy
    user = Student.where(email: params[:email]).first || Teacher.where(email: params[:email]).first || Admin.where(email: params[:email]).first

    @user = user
    @user.authentication_token = nil
    render json: @user
  end

  private
  # Only allow a trusted parameter "white list" through.
  def session_params
    params.require(:session).permit(:email, :password)
  end
end