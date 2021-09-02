module NotesHelper
  def collection_icon(user, note)
    class_gather = ['collection_icon']

    if user
      class_gather << (user.collection?(note) ? 'collection-on' : 'collection-off')
    end

    tag.div class: class_gather, "data-collection-target": "icon"
  end

end
