$(document).ready(function(){
  commentListener()
  commentSearch()
})

function commentListener(){
   $('#note-form').on("submit",function(event){
     event.preventDefault()
     let comment = $('#comment').val()
     $('#comments-list').append(`<li class="comment">${comment}</li>`)
   })
}

function commentSearch(){
  $('#search-form').on("submit",function(event){
    event.preventDefault()
    let search = $('#search').val()
    $("li.comment").filter(function(index, comment){
    var $comment = $(comment)
    //debugger
    if (!comment.innerText.includes(search)){
        $comment.hide()
      }else{
        $comment.show()
      }})
  })
}
