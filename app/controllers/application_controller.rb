class ApplicationController < ActionController::Base
    before_action :configure_permitted_parameters, if: :devise_controller?


    
    before_action :set_locale

    def set_locale
    # 可以將 ["en", "zh-CN"] 設定為 VALID_LANG 放到 config/environment.rb 中
    if params[:locale] && I18n.available_locales.include?( params[:locale].to_sym )
        session[:locale] = params[:locale]
    end

    I18n.locale = session[:locale] || I18n.default_locale
    end

    private
    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :intro])
        devise_parameter_sanitizer.permit(:account_update, keys: [:name, :intro])
    end
end
