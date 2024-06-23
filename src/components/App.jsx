import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json'

export const App = () => {
  return (
    <>
      <FriendList friends={friends} />
    </>
  );
};
