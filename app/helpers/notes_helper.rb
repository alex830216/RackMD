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

  def publicbtn_display(note)
    if note.public_status && note.user != current_user 
    else 
      link_to "我要公開發表", is_public_note_path(note) 
    end 
  end
  
  def commentbtn_display(comment)
    if comment.user_id == current_user.id
      tag.i class: "fas fa-ellipsis-v"
    else 
    end
  end
end
