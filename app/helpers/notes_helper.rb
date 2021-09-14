module NotesHelper
  def favorite_icon(user, note)
    if user && user.favorite?(note)
      shape = 'fas'
    else
      shape = 'far'
    end
    content_tag(:i, '', class: ["fa-heart", "favorite_icon", shape], data: {'favorite-target': 'icon' })
  end

  def collection_icon(user, note)
    if user && user.collection?(note)
      shape = 'fas'
    else
      shape = 'far'
    end
    content_tag(:i, '', class: ["fa-bookmark", "collection_icon", shape], data: {'collect-target': 'icon' })
  end

  def day_difference(note)
    t = Time.now
    (( t - note.updated_at) / 1.day ).to_i
  end
end
