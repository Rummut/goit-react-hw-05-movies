import { Image, ItemReview } from './NotFound.styled';
import oopsImage from './oops.png';

const NotFound = () => {
  return (
    <div>
      <Image src={oopsImage} alt="oops" width="300" />;
      <ItemReview>
        Something went wrong:( Please reload the page or click another page
      </ItemReview>
    </div>
  );
};

export default NotFound;
