

const SectionTile = ({mainTitle, subTitle}) => {
  return (
    <div className="container mx-auto text-center mt-8" >
        <h2 className="text-4xl font-bold text-neutral" > {mainTitle} </h2>
        <p className="mt-2" > {subTitle} </p>
    </div>
  )
}

export default SectionTile