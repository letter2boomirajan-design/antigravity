import { useState, useRef, useEffect } from "react";

export default function Election(props) {
  const [parties, setParties] = useState([
    { id: 1, partyName: "Democratic", votes: 0 },
    { id: 2, partyName: "Republican", votes: 0 },
  ]);

  const refEle = useRef(null);

  const [electionStatus, setElectionStatus] = useState({
    totalVotes: props.votes,
    peopleVoted: 0,
    remainingVote: props.votes,
    whoIsLeading: "",
    winner: "",
  });

  useEffect(() => {
    console.log("Function component --- useEffect - after");
    console.log(refEle);
    refEle.current.checked = true;
    return () => {
      console.log("Function component --- useEffect --- before");
    };
  }, [parties]);

  const addVote = (id) => {
    if (electionStatus.peopleVoted >= electionStatus.totalVotes) return;

    // Update party votes
    const updatedParties = parties.map((party) =>
      party.id === id ? { ...party, votes: party.votes + 1 } : party
    );

    setParties(updatedParties);

    // Find leader AFTER update
    const maxVotes = Math.max(...updatedParties.map((p) => p.votes));

    const topParties = updatedParties.filter((p) => p.votes === maxVotes);

    const leader =
      topParties.length > 1
        ? "Tie between: " + topParties.map((p) => p.partyName).join(" & ")
        : topParties[0].partyName;

    const newPeopleVoted = electionStatus.peopleVoted + 1;
    const newRemaining = electionStatus.totalVotes - newPeopleVoted;

    setElectionStatus((prev) => ({
      ...prev,
      peopleVoted: newPeopleVoted,
      remainingVote: newRemaining,
      whoIsLeading: leader,
      winner: newPeopleVoted === prev.totalVotes ? leader : "",
    }));
  };

  const resetPoll = () => {
    const resetParties = parties.map((p) => ({ ...p, votes: 0 }));
    setParties(resetParties);

    setElectionStatus({
      totalVotes: electionStatus.totalVotes,
      peopleVoted: 0,
      remainingVote: electionStatus.totalVotes,
      whoIsLeading: "",
      winner: "",
    });
  };

  console.log("Function component ------------");

  return (
    <div className="poll-container">
      <h1 className="poll-title">🗳️ Live Voting Poll</h1>

      <div className="poll-options">
        {parties.map((party) => (
          <div className="poll-option" key={party.id}>
            <label className="poll-label">
              <input
                type="radio"
                name="vote"
                ref={refEle}
                onClick={() => addVote(party.id)}
                disabled={
                  electionStatus.peopleVoted === electionStatus.totalVotes
                }
              />
              <span className="poll-party">{party.partyName}</span>
            </label>

            <div className="poll-bar">
              <div
                className="poll-bar-fill"
                style={{ width: `${party.votes * 10}%` }}
              ></div>
            </div>

            <div className="poll-votes">{party.votes} votes</div>
          </div>
        ))}
      </div>

      <div className="poll-summary-card">
        <h2 className="summary-title">📊 Poll Summary</h2>

        <div className="summary-row">
          <span className="summary-label">Total Votes</span>
          <span className="summary-value">{electionStatus.totalVotes}</span>
        </div>

        <div className="summary-row">
          <span className="summary-label">People Voted</span>
          <span className="summary-value">{electionStatus.peopleVoted}</span>
        </div>

        <div className="summary-row">
          <span className="summary-label">Remaining Votes</span>
          <span className="summary-value">{electionStatus.remainingVote}</span>
        </div>

        {electionStatus.whoIsLeading && (
          <div className="summary-leading">
            <span className="leading-icon">🏅</span>
            <span className="leading-text">
              Leading: <strong>{electionStatus.whoIsLeading}</strong>
            </span>
          </div>
        )}

        {electionStatus.winner && (
          <div className="summary-winner">
            <span className="winner-icon">🏆</span>
            <span className="winner-text">
              Winner: <strong>{electionStatus.winner}</strong>
            </span>
          </div>
        )}

        {electionStatus.winner && (
          <button className="reset-btn" onClick={resetPoll}>
            🔄 Reset Poll
          </button>
        )}
      </div>
    </div>
  );
}
