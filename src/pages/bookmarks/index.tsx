// TODO: IMPLEMENT. Just redirect to the home page for now
function BookmarksPage() {
  return <div />
}

export const getServerSideProps = () => {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  }
}

export default BookmarksPage
