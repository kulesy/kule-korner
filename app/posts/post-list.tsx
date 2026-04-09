import Link from "next/link";

export default function PostList(props) {
  return (
    <>
      <div className="posts-header">
        <h1>Blog Posts</h1>
        <p>Thoughts, stories, and ideas from my corner of the web</p>
      </div>
      <div className="post-grid">
        {props.data.postConnection.edges.map((post) => (
          <Link
            key={post.node.id}
            href={`/posts/${post.node._sys.filename}`}
            className="post-card"
          >
            <h2>{post.node.title || post.node._sys.filename}</h2>
            <div className="post-meta">
              {new Date(post.node._sys.createdAt || Date.now()).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            {post.node.excerpt && (
              <p className="post-excerpt">{post.node.excerpt}</p>
            )}
          </Link>
        ))}
      </div>
    </>
  );
}
