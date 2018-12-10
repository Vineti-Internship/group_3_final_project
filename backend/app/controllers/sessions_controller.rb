class SessionController < ApplicationController

  def create
    @user = Student.where(email: params[:email]).first || Teacher.where(email: params[:email]).first

    if @user&.valid_password?(params[:password])
      render json: @user
    else
      head(:unauthorized)
    end

  end

  def destroy
    current_user.authentication_token = nil
  end

  # Only allow a trusted parameter "white list" through.
  def session_params
    params.require(:session).permit(:email, :password)
  end
end