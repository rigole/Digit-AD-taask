import { render, screen, wrapper } from '@testing-library/react';
import App from './App';
import HomePage from './components/HomePage';
import PostDetailComponent from './components/PostDetailComponent';


test('render search bar', () => {
  render(<HomePage/>)
  const searchTitle = screen.getByText("Search Articles");
  expect(searchTitle).toBeInTheDocument();

  const searchBar = screen.getByTestId("search-input");
  expect(searchBar).toBeInTheDocument()
  expect(searchBar).toHaveAttribute("type", "search")
});

test('render ')

test("check if there is a div for post", () => {
  render(<HomePage/>)
  const cardDivPost = screen.getByTestId("card-posts");
  expect(cardDivPost).toBeInTheDocument();

})


