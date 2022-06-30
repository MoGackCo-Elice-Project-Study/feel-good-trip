import styled from 'styled-components';
import SearchForm from '../components/SearchForm';

function Title() {
  return <h1 className="title">
        <span>Feel</span>
        <span>Good</span>
        <span>Trip</span>
      </h1>
}


export default function Home() {
  return (
    <div>
      <Title />
      <SearchForm />
    </div>
  );
}
