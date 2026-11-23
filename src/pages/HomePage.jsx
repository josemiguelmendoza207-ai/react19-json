import Hero from '../components/hero'
import Homecards from '../components/Homecards'
import JobListings from '../components/JobListings'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Homecards />
      <JobListings ishome={true} />
    </>
  )
}

export default HomePage