import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import Friends from "./components/Friends";
import TransactionHistory from "./components/TransactionHistory";

import friends from "./data/friends.json";
import profile from "./data/profile.json";
import statistics from "./data/statistics.json";
import transactions from "./data/transaction.json";

function Main() {
  return (
    <>
      <Profile
        name={profile.name}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        stats={profile.stats}
      />
      ;
      <Statistics title="Upload stats" stats={statistics} />;
      <Friends friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
}

export default Main;
