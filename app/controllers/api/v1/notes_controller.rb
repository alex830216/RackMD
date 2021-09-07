class Api::V1::NotesController < ApplicationController
  def tag
    render html: params
  end
end