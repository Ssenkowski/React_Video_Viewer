require 'test_helper'

class UserControllerTest < ActionDispatch::IntegrationTest
  test "should get welcome" do
    get user_welcome_url
    assert_response :success
  end

  test "should get main" do
    get user_main_url
    assert_response :success
  end

  test "should get about" do
    get user_about_url
    assert_response :success
  end

end
