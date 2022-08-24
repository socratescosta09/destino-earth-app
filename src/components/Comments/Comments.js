import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import './styles.css';
import ImageProfile from "../../assets/images/user-icon.png";

import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "../../api";

const Comments = ({ commentsUrl, currentUserId }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  const addComment = (text, parentId) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
    });
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  const deleteComment = (commentId) => {
    if (window.confirm("Tem certeza que deseja remover?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  return (
    <div className="comments">
      <h3 className="comments-title">Comentários</h3>
      <div className="comment-image-container">
        <img id="comment-img" src={ ImageProfile } alt="imagem do perfil do usuário" />
        <CommentForm submitLabel="Enviar" handleSubmit={addComment} />
      </div>
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
