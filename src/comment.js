class Comment {
  constructor(text) {
    this.text = text
  }

  render(){
    return (
      `<li class="comment">${this.text}</li>`
    )
  }

}
