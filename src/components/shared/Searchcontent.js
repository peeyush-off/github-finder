
import Card from './Card'
import Spinner from './Spinner'

function Searchcontent({ users, loading }) {

  return (
    loading ?
      <Spinner /> :
      (<div className='w-full flex flex-wrap m-12'>
        {
          users.map(val => {
            return <Card key={val.id} userName={val.login} imageLink={val.avatar_url} profileDetailsURL={val.url} />
          })
        }
      </div>
      )
  )
}

export default Searchcontent