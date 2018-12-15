class AddsectionstostudentsController < ApplicationController
    before_action :set_user, only: [:create, :destroy]
  
    # POST /students/1
    def create
      @userio.sections.append(Section.find(id = request.raw_post()))
    end
  
    # DELETE /students/1
    def destroy
      @userio.sections = []
    end
  
    private

      # Use callbacks to share common setup or constraints between actions.
      def set_user
        @userio = Student.find(params[:id])
      end
  
  end
  