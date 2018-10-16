require 'test_helper'

class SignUpControllerTest < ActionDispatch::IntegrationTest
  test "should get welcome" do
    get sign_up_welcome_url
    assert_response :success
  end

end
