interface IInfoCard {
  mainContent: string
  secondaryContent: string
}
const InfoCard = ({ mainContent, secondaryContent }: IInfoCard) => {
  return (
    <div className="bg-blue-200 p-4 rounded-2xl">
      <h3 className="text-xl">{mainContent}</h3>
      <h3 className="font-bold">{secondaryContent}</h3>
    </div>
  )
}
export default InfoCard