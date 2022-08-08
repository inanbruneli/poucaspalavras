import { MainSectionItem } from "./MainSectionItem";

export function MainSection() {
  return (
    <>
      <MainSectionItem
        mainTitle='Products Inspired by Nature'
        secondTitle="Nature isn't always scary – it can also be beautiful."
        btnTitle="View the Collection"
        colorLeft="#06385B"
        imageRight="https://cdn.shopify.com/s/files/1/0254/0516/1520/files/Nature_Banner_Homepage.jpg?crop=center&v=1658749271&width=900"
        href='../collections/accessories'
      />
      <MainSectionItem
        mainTitle='Learn How to Build New Habits'
        secondTitle="Change your life, one tiny step at a time."
        btnTitle="Get the Journal Here"
        colorLeft="#610425"
        imageRight="https://cdn.shopify.com/s/files/1/0254/0516/1520/files/220518_Habit_banner_Main.jpg?crop=center&v=1654200246&width=1296"
        href='../collections/notebooks'
      />
    </>
  )
}