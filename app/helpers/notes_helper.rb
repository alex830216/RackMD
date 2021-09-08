module NotesHelper
  def collection_btn
  def favorite_icon(user, note)
    if user && user.favorite?(note)
      shape = 'fas'
    else
      shape = 'far'
    end
    content_tag(:i, '', class: ["fa-heart", "favorite_icon", shape], data: {'favorite-target': 'icon' })
  end
  def favorite_icon(user, note)
    if user && user.favorite?(note)
      shape = 'fas'
    else
      shape = 'far'
    end
    content_tag(:i, '', class: ["fa-heart", "favorite_icon", shape], data: {'favorite-target': 'icon' })
  end
end
