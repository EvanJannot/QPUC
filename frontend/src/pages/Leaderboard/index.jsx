import {
  LeaderboardWrapper,
  PageTitle,
  Table,
  Row,
  LastRow,
} from '../../style/Leaderboard'

function Leaderboard() {
  return (
    <LeaderboardWrapper>
      <PageTitle>LEADERBOARD</PageTitle>
      <Table>
        <Row>1#</Row>
        <Row>2#</Row>
        <Row>3#</Row>
        <Row>4#</Row>
        <Row>5#</Row>
        <Row>6#</Row>
        <Row>7#</Row>
        <Row>8#</Row>
        <Row>9#</Row>
        <Row>10#</Row>
      </Table>
    </LeaderboardWrapper>
  )
}

export default Leaderboard
