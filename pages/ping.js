function Ping() {}

// This gets called on every request
export async function getServerSideProps(context) {
  context.res.end("PONG")
  return { props: {} }
}

export default Ping
