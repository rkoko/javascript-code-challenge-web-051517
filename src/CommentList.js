class CommentList {
  constructor(array) {
    this.comments = []
    // this.array = array
    // this.convert()
  }

  addComment(string){
    const newComment = new Comment(string)
    this.comments.push(newComment)
  }

  render(){
    let comments = this.comments.map(comment => (comment.render())).join(" ")
    //return `${comments}`
    return `<ul>${comments}</ul>`
  }

}
