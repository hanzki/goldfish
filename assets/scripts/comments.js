'use strict';

const e = React.createElement;

const API_URL = 'https://9xpxcvmaaa.execute-api.eu-west-1.amazonaws.com/dev/posts/2/comments';

class Comment extends React.Component {

  render() {
    return e(
      'div', { className: 'comment' },
      e(
        'span', { className: 'comment-author' },
        this.props.author + ': '
      ),
      e(
        'span', { className: 'comment-time' },
        this.props.timestamp
      ),
      e('span', { className: 'comment-content' },
        this.props.content
      )
    );
  }

}

class CommentList extends React.Component {

  render() {
    const listOfComments = this.props.comments.map((comment, index) =>
      e(
        Comment, {key: index, author: comment.author, timestamp: comment.timestamp.toDateString(), content: comment.content}
      )
    );

    if(listOfComments.length) {
      return e(
        'div', {className: 'comments'},
        listOfComments
      );
    } else {
      return e(
        'p', null,
        'There are currently no comments.'
      )
    }
  }

}

class NewCommentControls extends React.Component {

  constructor(props) {
    super(props);
    this.state = {commentContent: '', commentAuthor: ''};

    this.onNewComment = this.props.onNewComment;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(API_URL, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'POST',
      body: JSON.stringify({
        comment: this.state.commentContent,
        author: this.state.commentAuthor
      })
    })
      .then(response => response.json())
      .then(data => {
        //alert(data.message + " " + JSON.stringify(data.comment));
        this.state.commentContent = "";
        this.onNewComment(parseApiComment(data.comment));
      });
  }

  render() {
    return e(
      'div', {className: 'comment-add-controls'},
      e(
        'form', {onSubmit: this.handleSubmit},
        e(
          'textarea', {id: 'newCommentContent', name: 'commentContent', placeholder: 'Leave a comment!', value: this.state.commentContent, onChange: this.handleChange}
        ),
        e(
          'div', {className: 'author-input-wrapper'},
          e(
            'label', {htmlFor: 'newCommentAuthor'},
            'Name: '
          ),
          e(
            'input', {type: 'text', id: 'newCommentAuthor', name: 'commentAuthor', placeholder: 'Anonymous', value: this.state.commentAuthor, onChange: this.handleChange}
          ),
        ),
        e(
          'input', {type: 'submit', id: 'newCommentSubmitButton', value: 'Comment'}
        )
      )
    )
  }
}

class CommentModule extends React.Component {

  constructor(props) {
    super(props);
    this.state = {comments: undefined};

    this.onNewComment = this.onNewComment.bind(this);

    this.updateList();

  }

  updateList() {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        const parsedComments = data.comments.map(parseApiComment);
        this.setState({comments: parsedComments});
      });
  }

  onNewComment(newComment) {
    this.updateList();
  }

  render() {
    let commentList;
    if(this.state.comments) {
      commentList = e(CommentList, {comments: this.state.comments});
    } else {
      commentList = e('p', null, 'Loading comments...')
    }

    return e(
      'div', {className: 'comment-module'},
      e('h2', null, 'Comments'),
      commentList,
      e(NewCommentControls, {onNewComment: this.onNewComment})
    )
  }

}

function parseApiComment(comment) {
  return {
    author: comment.comment_author,
    content: comment.comment_content,
    timestamp: new Date(comment.comment_timestamp)
  }
}

const domContainer = document.querySelector('#goldfish_thread');
ReactDOM.render(e(CommentModule), domContainer);