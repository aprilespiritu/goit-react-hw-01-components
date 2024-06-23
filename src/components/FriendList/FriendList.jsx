export const FriendList = ({ friends }) => {
    return (
        <ul>
            {friends.map(friend => {
                <FriendListItem key={friend.id} name={friend.name} img={friend.avatar} />
            })}
        </ul>
    );
};
