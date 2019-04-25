'use strict';

const e = React.createElement;

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
    const listOfComments = this.props.comments.map((comment) =>
      e(
        Comment, {author: comment.author, timestamp: comment.timestamp.toDateString(), content: comment.content}
      )
    );
    return e(
      'div', {className: 'comments'},
      listOfComments
    );
  }

}

const comments = [
  {author: 'Bob', timestamp: new Date(), content: 'First!'},
  {author: 'Alice', timestamp: new Date(), content: 'Repost. Unsubscribe!'},
  {author: 'Hanzki', timestamp: new Date(), content: 'Hitler did nothing wrong'},
];

const domContainer = document.querySelector('#goldfish_thread');
ReactDOM.render(e(CommentList, {comments: comments}), domContainer);