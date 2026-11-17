const Card = ({Children, bg='bg-gray-100'}) => {
  return (
    <div className = {`${bg} rounded-lg p-6 shadow-md`}>
      {Children}
      </div>
  )
}

export default Card