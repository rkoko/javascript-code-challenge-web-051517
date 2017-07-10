$(document).ready(function() {
  let comments = new CommentList()

  const $comment = $("#comment")
  $("#note-form").on("submit", function(event){
    event.preventDefault()
    comments.addComment($comment.val())
    $("#comments-list").html(comments.render())
    $("#note-form")[0].reset()
  })
  // commentListener()
  commentSearch()


 })
