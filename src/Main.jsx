import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import Friends from "./components/Friends";
import TransactionHistory from "./components/TransactionHistory";

import Section from "./components/Section";
import Container from "./components/Container";
// import Heading from "./components/Heading";

import friends from "./data/friends.json";
import profile from "./data/profile.json";
import statistics from "./data/statistics.json";
import transactions from "./data/transaction.json";

function Main() {
  return (
    <Section>
      <Container>
        {/* <Heading marginBottom="50px" textAlign="center">
          1 
        </Heading> */}
        <Profile
          name={profile.name}
          tag={profile.tag}
          location={profile.location}
          avatar={profile.avatar}
          stats={profile.stats}
        />
        ;
        {/* <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          2
        </Heading> */}
        <Statistics title="Upload stats" stats={statistics} />;
        {/* <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          3
        </Heading> */}
        <Friends friends={friends} />;
        {/* <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          4
        </Heading> */}
        <TransactionHistory items={transactions} />;
      </Container>
    </Section>
  );
}

export default Main;
