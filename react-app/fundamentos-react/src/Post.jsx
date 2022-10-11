export function Post(props) {
  return (
    <div>
      <h1>{props.author}</h1>
      <strong>{props.content}</strong>
    </div>
  )
}