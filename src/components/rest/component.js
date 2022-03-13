import { useMemo } from "react"
import { Menu } from "../menu/component"
import { Reviews } from "../reviews/component"
import { Rate } from "../rate/component"

export function Rest({ menu, reviews }) {
  const averageRating = useMemo(() => {
    return Math.round(reviews.reduce((acc, item) => acc + item.rating, 0)/reviews.length)
  }, [reviews])
  return (
    <div>
        <span>Average rating: </span>
        <Rate rate={averageRating} />
        <Menu menu={menu} />
        <Reviews reviews={reviews} />
    </div>
  );
}
