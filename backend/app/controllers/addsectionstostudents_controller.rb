class AddsectionstostudentsController < ApplicationController
    before_action :set_student, only: [:create, :destroy]
  
    # POST /students/1
    def create
      @student = Student.sections.append(Section.find(id = sectiontostudent_params)
  
      if @student.save
        render json: @student.sections, status: :created, location: @student.sections
      else
        render json: @student.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /students/1
    def destroy
      @student.sections = []
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_student
        @student = Student.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def student_params
        params.permit(:first_name, :last_name, :password, :email, :admin_id)
      end
  end
  