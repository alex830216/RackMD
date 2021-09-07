module NotesHelper
  def collection_btn
  end
<<<<<<< HEAD
end
=======
end
# tag("div", :data => {:controller => 'collect', :action => "click->collect#toggle", collect-id-value: => @note.id })

# if Collection.exists?(note: @note)
  # tag.div class: %W(collection-btn collection-on) tag.p("加入收藏") 
  #         data: { controller: collect,
  #                 action: click->collect#toggle,
  #                 collectIdValue: @note.id}
  # content_tag(:div, content_tag(:p, "加入收藏"), class: "collection-btn collection-on", data-controller: "collect", data-action: "click->collect#toggle", data-collect-id-value: "@note.id" )
  

  # content_tag(:div, content_tag(:p, "加入收藏"), class: "collection-btn collection-on", data-controller: "collect", data-action: "click->collect#toggle", data-collect-id-value: "@note.id" )

# tag("div", class: ["collection-btn", "collection-on"] :data => {controller: => "collect", :action => "click->collect#toggle", :collect_id_value => @note.id})

# if Collection.exists?(note: @note)
#   <div class="collection-btn collection-on" 
#   data-controller="collect" 
#   data-action="click->collect#toggle" 
#   data-collect-target="btn" 
#   data-collect-id-value="<%= @note.id %>">
#   <a href="#">加入收藏</a>
#   </div>
# else
#   <div class="collection-btn collection-off" 
#   data-controller="collect" 
#   data-action="click->collect#toggle" 
#   data-collect-target="btn" 
#   data-collect-id-value="<%= @note.id %>">
#   <a href="#">加入收藏</a>
#   </div>
# end


>>>>>>> 02977e8fcda45da261faf3856e05a4562d77eff4
