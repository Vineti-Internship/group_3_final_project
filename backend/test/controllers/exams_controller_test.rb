require 'test_helper'

class ExamsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @exam = exams(:one)
  end

  test "should get index" do
    get exams_url, as: :json
    assert_response :success
  end

  test "should create exam" do
    assert_difference('Exam.count') do
      post exams_url, params: { exam: { course_id: @exam.course_id, date: @exam.date, topic: @exam.topic } }, as: :json
    end

    assert_response 201
  end

  test "should show exam" do
    get exam_url(@exam), as: :json
    assert_response :success
  end

  test "should update exam" do
    patch exam_url(@exam), params: { exam: { course_id: @exam.course_id, date: @exam.date, topic: @exam.topic } }, as: :json
    assert_response 200
  end

  test "should destroy exam" do
    assert_difference('Exam.count', -1) do
      delete exam_url(@exam), as: :json
    end

    assert_response 204
  end
end
